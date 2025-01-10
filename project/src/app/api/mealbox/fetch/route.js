import { patientModel } from "../../utils/db";
import { Dietmodel } from "../../utils/db";
import { Staffmodel } from "../../utils/db";
import { MealBoxmodel } from "../../utils/db";

export async function GET(request) {
  const foundpatient = await patientModel.find({
    patientid: request.body.patientid,
  });
  if (!foundpatient) {
    return new Response(JSON.stringify({ message: "no user found" }));
  }

  const dietfound = await Dietmodel.find({ dietid: request.body.dietid });
  if (!dietfound) {
    return new Response(JSON.stringify({ message: "no diet found" }));
  }

  const stafffound = await Staffmodel.find({ staffid: request.body.staffid });
  if (!stafffound) {
    return new Response(JSON.stringify({ message: "no staff found" }));
  }

  const { patientid, dietChartId, deliveryPersonnelId, status } =
    await request.json();

  let createdmealbox = await MealBoxmodel.create({
    patientid,
    dietChartId,
    deliveryPersonnelId,
    status,
  });
  return new Response(JSON.stringify({ message: "created" }, createdmealbox));
}
