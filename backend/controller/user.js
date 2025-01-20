const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");

// create user
router.post("/create-user", upload.single("file"), async (req, res) => {
    console.log("create user");
    console.log(req.body);
    const { firstname,lastname, email, password } = req.body;
    res.send(res.body)
    const userEmail = await User.findOne({ email });
    if (userEmail) {
        const filename = req.file.filename;
        const filepath = `../uploads/${filename}`;
        fs.unlinkSync(filepath, (err) => {
            if (err) {
                console.log(err);
            }
        });
        return next(new ErrorHandler("User already exists", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
        firstname: firstname,
        lastname:lastname,
        email: email,
        password: password,
        avatar: fileUrl,
    };
    const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try {
        await sendMail({
            email: user.email,
            subject: "Account Activation",
            message: `Please click on the link to activate your account: ${activationUrl}`,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
    console.log(user);
});

const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, { expiresIn: "5m" });
}

router.post("/activation", catchAsyncErrors(async (req, res, next) => {
    console.log("we are hear");
    const { activation_token } = req.body;
    try {
        const newUser = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);
        if (!newUser) {
            return next(new ErrorHandler("Invalid token", 400));
        }
        const { name, email, password, avatar } = newUser;
        let User = await User.findOne({ email });
        if (User) {
            return next(new ErrorHandler("User already exists", 400));
        }

        let user = await User.create({
            firstname,
            lastname,
            email,
            avatar,
            password,
        });
        sendToken(user, 200, res);
    } catch (error) {
        return next(new ErrorHandler("Invalid token", 400));
    }
}
));

module.exports = router;