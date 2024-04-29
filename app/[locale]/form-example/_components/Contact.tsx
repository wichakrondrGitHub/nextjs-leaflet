"use client";
import { useState } from "react";

export default function MyForm() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      job: job,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://reqres.in/api/users",
        requestOptions
      );
      const result = await response.text();
      setResponseMessage(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Job:
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>Response: {responseMessage}</p>}
    </div>
  );
}
