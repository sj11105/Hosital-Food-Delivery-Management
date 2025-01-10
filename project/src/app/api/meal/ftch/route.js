import { CLIENT_STATIC_FILES_RUNTIME_MAIN_APP } from "next/dist/shared/lib/constants";
import { MealModel } from "../../utils/db";

export async function GET(request) {
  try {
    const fetchedmeal = await MealModel.find({});
    return new Response(
      JSON.stringify({ message: "Tasks fetched successfully", fetchedmeal }),
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
