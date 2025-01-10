import { DeliveryModel } from "../../utils/db";

export async function POST(request) {
  const { mealBoxId, patientName, roomNumber, assignedTo, status } =
    request.json();

  const createdelivery = await DeliveryModel.create({
    mealBoxId,
    patientName,
    roomNumber,
    assignedTo,
    status,
  });
  return new Response(
    JSON.stringify({ message: "delivery scheduled", createdelivery })
  );
}
