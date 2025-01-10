import { MealModel } from "@/app/api/utils/db";
import { Staffmodel } from "@/app/api/utils/db";

export async function POST(request) {
  try {
    const { mealType, patientId, preparationStaffId, deliveryStaffId } =
      await request.json();

    // Create a new meal task
    const meal = await MealModel.create({
      patientId,
      mealType,
      assignedTo: preparationStaffId,
      deliveryPersonnel: deliveryStaffId,
    });

    // Update staff availability
    await Staffmodel.findByIdAndUpdate(preparationStaffId, {
      isAvailable: false,
    });
    await Staffmodel.findByIdAndUpdate(deliveryStaffId, { isAvailable: false });

    return new Response(
      JSON.stringify({ message: "Task assigned successfully", meal }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error assigning task", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
