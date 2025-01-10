import { patientModel } from "../../utils/db";

export async function POST(request) {
  try {
    const requestData = await request.json();
    console.log("Request Data:", requestData);

    const {
      name,
      disease,
      allergies,
      age,
      gender,
      contact,
      emergency,
      roomInfo,
    } = requestData;

    console.log({
      name,
      disease,
      allergies,
      age,
      gender,
      contact,
      emergency,
      roomInfo,
    });

    let roomNumber, bedNumber, floorNumber;
    if (roomInfo) {
      ({ roomNumber, bedNumber, floorNumber } = roomInfo);
    }

    const patientData = {
      name,
      disease,
      allergies,
      age: Number(age), // Convert age to Number
      gender,
      contact,
      emergency,
      roomInfo: {
        roomNumber,
        bedNumber,
        floorNumber,
      },
    };

    console.log("Patient Data to Insert:", patientData);

    let newPatient = await patientModel.create(patientData);

    return new Response(
      JSON.stringify({ message: "created successfully", newPatient }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating patient:", error);
    return new Response(
      JSON.stringify({ message: "Error creating patient", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
