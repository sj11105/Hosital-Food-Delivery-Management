import { type } from "node:os";
import { Dietmodel } from "../../utils/db";

export async function GET(request) {
  let dietfound = await Dietmodel.find({});
  return new Response(JSON.stringify(dietfound));
}
