"use client";

import { useState } from "react";
import { Button } from "@/utils/components/ui/button";
import { Input } from "@/utils/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/utils/components/ui/select";
import axios from "axios";
// Interface for form data
interface DeliveryFormData {
  mealBoxId: string;
  patientName: string;
  roomNumber: string;
  assignedTo: string;
  status: string;
}

export default function DeliveryForm() {
  const [formData, setFormData] = useState<DeliveryFormData>({
    mealBoxId: "",
    patientName: "",
    roomNumber: "",
    assignedTo: "",
    status: "Pending",
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission

  // Send form data to the backend (via API route or elsewhere)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/api/delivery/add", // Backend endpoint
        formData
      );
      console.log("Form Data Submitted:", formData);
      alert("Diet Plan created successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to create diet plan. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Delivery</h2>
      <form onSubmit={handleSubmit}>
        {/* Meal Box ID */}
        <div className="mb-4">
          <label
            htmlFor="mealBoxId"
            className="block text-sm font-medium text-gray-700"
          >
            Meal Box ID
          </label>
          <Input
            type="text"
            id="mealBoxId"
            name="mealBoxId"
            value={formData.mealBoxId}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Patient Name */}
        <div className="mb-4">
          <label
            htmlFor="patientName"
            className="block text-sm font-medium text-gray-700"
          >
            Patient Name
          </label>
          <Input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Room Number */}
        <div className="mb-4">
          <label
            htmlFor="roomNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Room Number
          </label>
          <Input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Assigned To */}
        <div className="mb-4">
          <label
            htmlFor="assignedTo"
            className="block text-sm font-medium text-gray-700"
          >
            Assigned To
          </label>
          <Input
            type="text"
            id="assignedTo"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <Select
            name="status"
            value={formData.status}
            onValueChange={(value) =>
              setFormData({ ...formData, status: value })
            }
          >
            <SelectTrigger className="mt-1 p-2 border border-gray-300 rounded-md w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="In Transit">In Transit</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white hover:bg-blue-700 py-2 rounded-md"
          >
            Submit Delivery
          </Button>
        </div>
      </form>
    </div>
  );
}
