import { MealModel } from "@/app/api/utils/db";

export async function GET(request) {
  try {
    const { staffId, role } = await request.json();

    // Fetch tasks based on staff role (Pantry Staff or Delivery Personnel)
    const query =
      role === "Pantry Staff"
        ? { assignedTo: staffId }
        : { deliveryPersonnel: staffId };

    const tasks = await MealModel.find(query).populate("patientId");

    return new Response(
      JSON.stringify({ message: "Tasks fetched successfully", tasks }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching tasks", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
