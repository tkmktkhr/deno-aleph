import React, { ComponentType } from "react";
import { redirect } from "framework";
import logger from "./common/logger.ts";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  logger.debug('Called app.tsx')
  return (
    <main>
      <head>
        <title>Hello World - Aleph.js</title>
        {/* <link rel="stylesheet" href="./style/index.css" /> */}
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
