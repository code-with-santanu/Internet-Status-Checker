"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("checking...");
  const [ip, setIp] = useState("");
  const [strength, setStrength] = useState("");

  useEffect(() => {
    //This code is executed in the browser
  }, []);

  // const g =
  //   typeof globalThis === "object"
  //     ? globalThis
  //     : typeof window === "object"
  //     ? window
  //     : typeof global === "object"
  //     ? global
  //     : null; // Causes an error on the next line

  // g.addEventListener("load", checkInternetconnection);

  const checkInternetconnection = () => {
    if (navigator.onLine) {
      console.log("h1");
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          console.log("h2");
          setIp(data.ip);
          console.log("h3");
          setStatus("Connected");

          const connection = navigator.connection;
          const networkStrength = connection
            ? connection.downlink + "Mbps"
            : "Unknown";
          console.log("h4");
          setStrength(networkStrength);
        })
        .catch(() => {
          setStatus("Disconnected");
          setIp("Unknown");
          setStrength("Unknown");
        });
    } else {
      console.log("err");
      setStatus("Disconnected");
      setIp("Unknown");
      setStrength("Unknown");
    }
  };

  if (process.browser) {
    console.log("h5");
    window.addEventListener("load", checkInternetconnection);
  }
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
      {/* <button onClick={checkInternetconnection}>click</button> */}
    </div>
  );
}
