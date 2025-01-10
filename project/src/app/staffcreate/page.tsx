"use client";
import React, { useState } from "react";
import axios from "axios";

const CompactStaffForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    contactInfo: "",
    isAvailable: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Cast e.target to HTMLInputElement so TypeScript knows it has the 'checked' property
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked, // Cast to HTMLInputElement to access 'checked'
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value, // For other inputs, use 'value'
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const result = await axios.post(
        "http://localhost:3000/api/staff/add",
        formData
      );
      console.log("Form Data Submitted:", formData);
      console.log("API Response:", result.data);
      alert("staff details added successfully!");
    } catch (error) {
      console.error("Error while submitting data:", error);
      alert("Failed to add staff details. Please try again.");
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

          {/* Role */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Select Role</option>
              <option value="Pantry Staff">Pantry Staff</option>
              <option value="Delivery Personnel">Delivery Personnel</option>
            </select>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Contact Info
            </label>
            <input
              type="number"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="12345667"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Available Checkbox */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Available
            </label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange} // This will now toggle the isAvailable state correctly
              className="h-5 w-5 text-blue-500 focus:ring-blue-400 transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompactStaffForm;
