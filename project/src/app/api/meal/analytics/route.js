// In your backend (Node.js/Express)
import { MealModel } from "../../utils/db";
export async function GET(request) {
  try {
    const totalMealsDelivered = await MealModel.countDocuments({
      deliveryStatus: "Delivered",
      createdAt: { $gte: new Date().setHours(0, 0, 0, 0) }, // Meals delivered today
    });

    const delayedDeliveries = await MealModel.countDocuments({
      deliveryStatus: "Delivered",
      deliveryTime: { $gt: "expected delivery time" }, // Logic for delayed deliveries
    });

    const onTimeDeliveries = totalMealsDelivered - delayedDeliveries;

    const preparationIssues = await MealModel.countDocuments({
      preparationStatus: "In Progress", // Example of tracking issues in meal preparation
    });

    return new Response(
      JSON.stringify({
        totalMealsDelivered,
        delayedDeliveries,
        onTimeDeliveries,
        preparationIssues,
      })
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "error" }));
  }
}
