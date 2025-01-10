import { Dietmodel } from "../../utils/db";
import { patientModel } from "../../utils/db";

export async function POST(request) {
  let foundpatient = patientModel.find({ patientid: request.body.patientid });
  if (!foundpatient) {
    return new Response(JSON.stringify({ message: "no user found" }));
  }

  const { morning, evening, night, patientid } = await request.json();
  let diet = await Dietmodel.create({
    morning,
    evening,
    night,
    patientid,
  });
  return new Response(JSON.stringify({ message: "diet created", diet }));
}
