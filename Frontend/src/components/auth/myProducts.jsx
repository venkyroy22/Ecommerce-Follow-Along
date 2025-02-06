import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom";

function Myproduct({ _id, name, images, description, price }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!images || images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    const currentImage = images && images.length > 0 ? images[currentIndex] : null;

    const handleEdit = () => {
        navigate(`/create-product/${_id}`);
    };

    return (
        <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="w-full">
                {currentImage && (
                    <img
                        src={`http://localhost:8000${currentImage}`}
                        alt={name}
                        className="w-full h-56 object-cover rounded-lg mb-2"
                    />
                )}
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm opacity-75 mt-2">{description}</p>
            </div>
            <div className="w-full mt-4">
                <p className="text-lg font-bold my-2">${price.toFixed(2)}</p>
                <button
                    className="w-full text-white px-4 py-2 rounded-md bg-black hover:bg-gray-700 transition duration-300"
                    onClick={handleEdit}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

// Define PropTypes
Myproduct.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Myproduct;
