import { NextResponse } from "next/server";
import dbConnect from "../db";
import Departure from "../model.js/departure";

// export default async function Handler(req, res) {
//   await dbConnect();

//   if (req.method === "POST") {
//     try {
//       const departure = new Departure(req.body);
//       await departure.save();
//       res.status(201).json({ success: true, msg: "successfully add data" });
//     } catch (error) {
//       console.log(error.message);
//     }
//   } else if (req.method === "GET") {
//     try {
//       const departure = await Departure.find();
//       res.status(200).json({ success: true, data: departure });
//     } catch (error) {
//       console.log(error.message);
//     }
//   } else {
//     res.status(405).json({ success: false, msg: "method not allowed" });
//   }
// }

export async function Post(request) {
  const { airline, flightnumber, destination, departdate, departtime, gate, remark } = await request.json();
  await dbConnect();
  await Departure.create({
    airline,
    flightnumber,
    destination,
    departdate,
    departtime,
    gate,
    remark,
  });
  return NextResponse.json({ msg: "add Departure succeded" }, { status: 201 });
}

export async function GET(request) {
  await dbConnect();
  const departures = await Departure.find();
  //console.log(departures);
  return NextResponse.json({ departures }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect;
  await Departure.findByIdAndDelete(id);
  return NextResponse.json({ msg: "successfully delete Departure" }, { status: 200 });
}
