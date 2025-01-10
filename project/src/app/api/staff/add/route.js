import { Staffmodel } from "../../utils/db";

export async function POST(request) {
  const { name, role, contactInfo } = await request.json();
  let staff = await Staffmodel.create({
    name,
    role,
    contactInfo,
  });
  return new Response(JSON.stringify({ message: "staff added" }, staff));
}
