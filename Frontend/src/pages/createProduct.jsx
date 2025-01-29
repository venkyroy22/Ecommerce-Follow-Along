import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [email, setEmail] = useState("");
  const [previewImages, setPreviewImages] = useState([]); 

  const categoriesData = [
    { title: "Electronics" },
    { title: "Fashion" },
    { title: "Books" },
    { title: "Home Appliances" },
  ];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => prevImages.concat(files));
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prevPreviews) => prevPreviews.concat(imagePreviews));
  };

  useEffect(() => {
    
    return () => {
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      category,
      tags,
      price,
      stock,
      email,
      images,
    };
    console.log("Product Data:", productData);
    alert("Product created successfully!");
    setImages([]);
    setName("");
    setDescription("");
    setCategory("");
    setTags("");
    setPrice("");
    setStock("");
    setEmail("");
    setPreviewImages([]);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-2xl">
        <h5 className="text-[24px] font-bold text-center mb-4 text-gray-700">0
          Create Product
        </h5>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <InputField label="Email" type="email" value={email} setValue={setEmail} required />
          <InputField label="Name" type="text" value={name} setValue={setName} required />
          <InputField label="Description" type="textarea" value={description} setValue={setDescription} required />

          {/* Category Dropdown */}
          <div className="mt-4">
            <label className="block text-gray-600 font-medium">Category *</label>
            <select className="w-full p-2 border rounded-md" value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Choose a category</option>
              {categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
            </select>
          </div>

          <InputField label="Tags" type="text" value={tags} setValue={setTags} />
          <InputField label="Price" type="number" value={price} setValue={setPrice} required />
          <InputField label="Stock" type="number" value={stock} setValue={setStock} required />

          {/* Upload Images */}
          <div className="mt-4">
            <label className="block text-gray-600 font-medium">Upload Images *</label>
            <input type="file" id="upload" className="hidden" multiple onChange={handleImageChange} required />
            <label htmlFor="upload" className="cursor-pointer flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200">
              <AiOutlinePlusCircle size={30} color="#555" />
            </label>
            <div className="flex flex-wrap mt-2">
              {previewImages.map((img, index) => (
                <img src={img} key={index} alt="Preview" className="w-[100px] h-[100px] object-cover m-2 rounded-md" />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full mt-6 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};


const InputField = ({ label, type, value, setValue, required }) => (
  <div className="mt-4">
    <label className="block text-gray-600 font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === "textarea" ? (
      <textarea value={value} className="w-full p-2 border rounded-md" onChange={(e) => setValue(e.target.value)} placeholder={`Enter ${label.toLowerCase()}`} rows="4" required={required}></textarea>
    ) : (
      <input type={type} value={value} className="w-full p-2 border rounded-md" onChange={(e) => setValue(e.target.value)} placeholder={`Enter ${label.toLowerCase()}`} required={required} />
    )}
  </div>
);

export default CreateProduct;
