"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/booking")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400">
        Admin Dashboard
      </h1>

      <div className="mt-8 space-y-4">
        {data.map((b: any, i) => (
          <div
            key={i}
            className="p-4 border border-white/10 rounded bg-white/5"
          >
            <p>Name: {b.name}</p>
            <p>Service: {b.service}</p>
            <p>Date: {b.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}