"use client";
import { db } from "@/utils/db";
import React, { useState } from "react";
import PolygonList from "./PolygonList";
// Polygon.jsx
export default function Polygon({ defaultAge } = { defaultAge: 21 }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState("");

  async function addPolygon() {
    var id;
    try {
      if (true) {
        id = await db.testdb.add({
          polygon: "polygon",
          update_at: `${Date.now()}`,
        });
      } else {
        alert(" provide name and age field of polygon ");
      }
      setStatus(`Polygon ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <>
      <h1> Add stduent </h1>

      <button onClick={addPolygon}>Add</button>
      <div className="">
        <h1>Polygon listing </h1>
        <div className="">
          <PolygonList />
        </div>
      </div>
    </>
  );
}
