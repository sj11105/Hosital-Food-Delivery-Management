"use client";
import React, { useState } from "react";
import axios from "axios";

interface DietChartFormData {
  patientId: string;
  morningMeal: {
    meal: string;
    ingredients: string;
    instructions: string;
  };
  eveningMeal: {
    meal: string;
    ingredients: string;
    instructions: string;
  };
  nightMeal: {
    meal: string;
    ingredients: string;
    instructions: string;
  };
}

const DietPlan = () => {
  const [formData, setFormData] = useState<DietChartFormData>({
    patientId: "",
    morningMeal: { meal: "", ingredients: "", instructions: "" },
    eveningMeal: { meal: "", ingredients: "", instructions: "" },
    nightMeal: { meal: "", ingredients: "", instructions: "" },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMealChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    meal: "morningMeal" | "eveningMeal" | "nightMeal",
    field: "meal" | "ingredients" | "instructions"
  ) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [meal]: {
        ...prev[meal],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/api/dietchart/add", // Backend endpoint
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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white mt-8 mb-8 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Create Diet Plan
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient ID */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Patient ID
            </label>
            <input
              type="String"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter Patient ID"
              required
            />
          </div>

          {/* Morning Meal */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Morning Meal
            </h2>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Meal</label>
              <input
                type="text"
                name="morningMeal.meal"
                value={formData.morningMeal.meal}
                onChange={(e) => handleMealChange(e, "morningMeal", "meal")}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="E.g., Oatmeal"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Ingredients
              </label>
              <textarea
                name="morningMeal.ingredients"
                value={formData.morningMeal.ingredients}
                onChange={(e) =>
                  handleMealChange(e, "morningMeal", "ingredients")
                }
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="List of ingredients"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Instructions
              </label>
              <textarea
                name="morningMeal.instructions"
                value={formData.morningMeal.instructions}
                onChange={(e) =>
                  handleMealChange(e, "morningMeal", "instructions")
                }
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Meal instructions"
              />
            </div>
          </div>

          {/* Evening Meal */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Evening Meal
            </h2>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Meal</label>
              <input
                type="text"
                name="eveningMeal.meal"
                value={formData.eveningMeal.meal}
                onChange={(e) => handleMealChange(e, "eveningMeal", "meal")}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="E.g., Salad"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Ingredients
              </label>
              <textarea
                name="eveningMeal.ingredients"
                value={formData.eveningMeal.ingredients}
                onChange={(e) =>
                  handleMealChange(e, "eveningMeal", "ingredients")
                }
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="List of ingredients"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Instructions
              </label>
              <textarea
                name="eveningMeal.instructions"
                value={formData.eveningMeal.instructions}
                onChange={(e) =>
                  handleMealChange(e, "eveningMeal", "instructions")
                }
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Meal instructions"
              />
            </div>
          </div>

          {/* Night Meal */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Night Meal
            </h2>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Meal</label>
              <input
                type="text"
                name="nightMeal.meal"
                value={formData.nightMeal.meal}
                onChange={(e) => handleMealChange(e, "nightMeal", "meal")}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="E.g., Soup"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Ingredients
              </label>
              <textarea
                name="nightMeal.ingredients"
                value={formData.nightMeal.ingredients}
                onChange={(e) =>
                  handleMealChange(e, "nightMeal", "ingredients")
                }
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="List of ingredients"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Instructions
              </label>
              <textarea
                name="nightMeal.instructions"
                value={formData.nightMeal.instructions}
                onChange={(e) =>
                  handleMealChange(e, "nightMeal", "instructions")
                }
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Meal instructions"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Create Diet Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DietPlan;
