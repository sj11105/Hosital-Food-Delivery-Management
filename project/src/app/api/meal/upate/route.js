import { MealModel } from "@/app/api/utils/db";

export async function PATCH(request) {
  try {
    const { mealId, preparationStatus, deliveryStatus } = await request.json();

    // Update preparation or delivery status
    const updatedMeal = await MealModel.findByIdAndUpdate(
      mealId,
      { preparationStatus, deliveryStatus },
      { new: true }
    );

    return new Response(
      JSON.stringify({
        message: "Meal status updated successfully",
        meal: updatedMeal,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error updating meal status",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
