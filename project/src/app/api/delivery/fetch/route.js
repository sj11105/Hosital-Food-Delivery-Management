import { DeliveryModel } from "../../utils/db";

export async function GET(request) {
  let deliveryfound = await DeliveryModel.find({});
  return new Response(JSON.stringify(deliveryfound));
}
