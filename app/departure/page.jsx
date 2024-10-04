"use client";

// import Link from "next/link";

// const getDeparture = async () => {
//   try {
//     const res = await fetch("http://127.0.0.1:3000/api/departure", {
//       cache: "no-store",
//     });

//     //console.log(res.json());

//     if (!res.ok) {
//       throw new Error("failed to fetch data");
//     }

//     //console.log(res.json());
//     return res.json();
//   } catch (error) {
//     console.log(error.message);
//   }
// };

import { useState, useEffect } from "react";
import axios from "axios";

// useEffect(() => {
//   fetchProducts();
// }, []);

export default function DepartureList() {
  const [departures, setDepartures] = useState([]);

  const fetchProducts = async () => {
    //const [departures, setDepartures] = useState([]);
    try {
      const departureResponse = await axios.get("http://127.0.0.1:3000/api/departure");
      //console.log(departureResponse.data);
      setDepartures(departureResponse.data.departures);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  //const departs = await getDeparture();
  //console.log(departs);

  const renderDepartures = () => {
    return departures.map((depart) => {
      return (
        <tr key={depart._id}>
          <td>{depart._id}</td>
          <td>{depart.airline}</td>
          <td>{depart.flightnumber}</td>
          <td>{depart.destination}</td>
          <td>{depart.time}</td>
          <td>{depart.gate}</td>
          <td>{depart.remark}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>unique id</th>
            <th>Airline</th>
            <th>Flight Number</th>
            <th>Destination</th>
            <th>Time</th>
            <th>Gate</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>{renderDepartures()}</tbody>
      </table>
    </div>
  );
}
