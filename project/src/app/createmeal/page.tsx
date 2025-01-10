"use client";
import { useState, FormEvent } from "react";
import axios from "axios";
interface MealFormData {
  patientId: string;
  mealType: "Morning" | "Evening" | "Night";
  preparationStatus: "Pending" | "In Progress" | "Completed";
  deliveryStatus: "Not Delivered" | "Delivered";
  assignedTo: string;
  deliveryPersonnel: string;
}

const MealForm = () => {
  const [formData, setFormData] = useState<MealFormData>({
    patientId: "",
    mealType: "Morning",
    preparationStatus: "Pending",
    deliveryStatus: "Not Delivered",
    assignedTo: "",
    deliveryPersonnel: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/meal/assign", formData);
      console.log(response.data);
      console.log("Form Data Submitted:", formData);
      console.log("API Response:", response.data);
      alert("Meal details added successfully!");
    } catch (error) {
      console.error("Error while submitting data:", error);
      alert("Failed to add meal details. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="patientId"
          className="block text-sm font-medium text-gray-700"
        >
          Patient ID
        </label>
        <input
          type="text"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          id="patientId"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="mealType"
          className="block text-sm font-medium text-gray-700"
        >
          Meal Type
        </label>
        <select
          name="mealType"
          value={formData.mealType}
          onChange={handleChange}
          id="mealType"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="preparationStatus"
          className="block text-sm font-medium text-gray-700"
        >
          Preparation Status
        </label>
        <select
          name="preparationStatus"
          value={formData.preparationStatus}
          onChange={handleChange}
          id="preparationStatus"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="deliveryStatus"
          className="block text-sm font-medium text-gray-700"
        >
          Delivery Status
        </label>
        <select
          name="deliveryStatus"
          value={formData.deliveryStatus}
          onChange={handleChange}
          id="deliveryStatus"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Not Delivered">Not Delivered</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="assignedTo"
          className="block text-sm font-medium text-gray-700"
        >
          Assigned To (Staff ID)
        </label>
        <input
          type="text"
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          id="assignedTo"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="deliveryPersonnel"
          className="block text-sm font-medium text-gray-700"
        >
          Delivery Personnel (Staff ID)
        </label>
        <input
          type="text"
          name="deliveryPersonnel"
          value={formData.deliveryPersonnel}
          onChange={handleChange}
          id="deliveryPersonnel"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MealForm;
