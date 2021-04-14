import { useDeno } from "framework/react";
import React from "react";
import Logo from "../../components/logo.tsx";
import useCounter from "../../lib/useCounter.ts";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h1>
        Welcome to use <strong>Aleph.js</strong>!
      </h1>
    </div>
  );
}
