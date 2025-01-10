"use client";
import React, { useState } from "react";
import axios from "axios";

const CompactPatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    disease: "", // Changed from Disease to disease
    allergies: "", // Changed from Allergies to allergies
    age: "", // Changed from Age to age
    gender: "", // Changed from Gender to gender
    contact: "", // Changed from Contact to contact
    emergency: "", // Changed from Emergency to emergency
    roomInfo: {
      roomNumber: "",
      bedNumber: "",
      floorNumber: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name in formData.roomInfo) {
      setFormData((prev) => ({
        ...prev,
        roomInfo: { ...prev.roomInfo, [name]: value }, // Corrected roominfo to roomInfo
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const result = await axios.post(
        "http://localhost:3000/api/patients/add",
        formData
      );
      console.log("Form Data Submitted:", formData);
      console.log("API Response:", result.data);
      alert("Patient details added successfully!");
    } catch (error) {
      console.error("Error while submitting data:", error);
      alert("Failed to add patient details. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white mt-8 mb-8 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Patient Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Disease */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Disease</label>
            <input
              type="text"
              name="disease" // Changed from Disease to disease
              value={formData.disease}
              onChange={handleChange}
              placeholder="E.g., Diabetes"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Allergies
            </label>
            <input
              type="text"
              name="allergies" // Changed from Allergies to allergies
              value={formData.allergies}
              onChange={handleChange}
              placeholder="E.g., Pollen"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Age</label>
            <input
              type="number"
              name="age" // Changed from Age to age
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Gender</label>
            <select
              name="gender" // Changed from Gender to gender
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Contact</label>
            <input
              type="number"
              name="contact" // Changed from Contact to contact
              value={formData.contact}
              onChange={handleChange}
              placeholder="E.g., 9876543210"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Emergency */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Emergency
            </label>
            <input
              type="number"
              name="emergency" // Changed from Emergency to emergency
              value={formData.emergency}
              onChange={handleChange}
              placeholder="Emergency Contact"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Room Info */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Room No.
              </label>
              <input
                type="number"
                name="roomNumber"
                value={formData.roomInfo.roomNumber}
                onChange={handleChange}
                placeholder="101"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Bed No.
              </label>
              <input
                type="number"
                name="bedNumber"
                value={formData.roomInfo.bedNumber}
                onChange={handleChange}
                placeholder="B1"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Floor No.
              </label>
              <input
                type="number"
                name="floorNumber"
                value={formData.roomInfo.floorNumber}
                onChange={handleChange}
                placeholder="2nd"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompactPatientForm;
