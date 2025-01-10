import { patientModel } from "../../utils/db";

export async function POST(request) {
  const {
    name,
    disease,
    allergies,
    age,
    Gender,
    Contact,
    Emergency,
    roominfo: { roomNumber, bednumber, floornumber },
  } = await request.json();

  let newpatient = await patientModel.create({
    name,
    Disease: disease,
    Allergies: allergies,
    age,
    Gender,
    Contact,
    Emergency,
    roomInfo: {
      roomNumber,
      bednumber,
      floornumber,
    },
  });
  return new Response(
    JSON.stringify({ message: "created successfuly", newpatient }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
