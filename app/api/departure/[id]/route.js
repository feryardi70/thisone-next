import { NextResponse } from "next/server";
import dbConnect from "../db";
import Departure from "../model.js/departure";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newairline, newflightnumber, newdestination, newdepartdate, newdeparttime, newgate, newremark } = await request.json();
  await dbConnect;
  await Departure.findByIdAndUpdate(id, {
    airline,
    flightnumber,
    destination,
    departdate,
    departtime,
    gate,
    remark,
  });
  return NextResponse.json({ msg: "successfully edit Departure" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect;
  const departure = await Departure.findOne({ _id: id });
  return NextResponse.json({ departure }, { status: 200 });
}
