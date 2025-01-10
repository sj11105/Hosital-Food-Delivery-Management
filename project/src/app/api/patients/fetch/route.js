import { patientModel } from "../../utils/db";

export async function GET(request) {
  let patient = await patientModel.find({});
  return new Response(JSON.stringify(patient), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
