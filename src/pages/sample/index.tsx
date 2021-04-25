import { useDeno } from "framework/react";
import React from "react";
import Logo from "../../components/logo.tsx";
import useCounter from "../../lib/useCounter.ts";

export default function Sample() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  // Called just once. This isn't called even get the page reload.
  const testData = useDeno(async () => {
    const a = await fetch("http://localhost:9001/search/accommodation/1000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Petting 🦕",
        address: "Tokyo",
      }),
    });

    const data = await a.json();
    // }).then((res) => res.json()); // 無限ループ
    console.log("==========================");
    console.log(data); // Need to parse response data. Currently, result is -> { title: "[object Object].", contents: "content" }
    console.log(data.name);
    console.log(data.address);
    // console.log(data.title.param);

    return data;
  });

  // FIXME Can't get API response correctly.
  // const every = async () => {
  //   const a = await fetch("http://localhost:9001/search/accommodation/1000", {
  //     method: "POST",
  //   }).then((res) => res.body.getReader());
  //   console.log(a);
  //   console.log(a.body);
  //   console.log(a.title);

  //   return a;
  // };
  // console.log("------------------------");

  // every();

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
