import { Staffmodel } from "../../utils/db";

export async function GET(request) {
  let staff = await Staffmodel.find({});
  return new Response(JSON.stringify(staff), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
