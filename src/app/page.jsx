"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("checking...");
  const [ip, setIp] = useState("");
  const [strength, setStrength] = useState("");

  return (
    <div className="container">
      <h1 className="heading">Internet Connection Status Checker</h1>
      <div className="status">
        <p>
          Connection Status : <span>{status}</span>
        </p>
        <p>
          IP Address : <span>{ip}</span>
        </p>
        <p>
          Network Strength : <span>{strength}</span>
        </p>
      </div>
    </div>
  );
}
