import Logo from "../components/logo.tsx";
import React from "react";

export default function E500() {
  console.log("insinde of Error 500");
  return (
    <div className="page">
      <p className="logo">
        <Logo />
      </p>
      <h1>
        Welcome to <strong>500 ERROR</strong>!
      </h1>
    </div>
  );
}
