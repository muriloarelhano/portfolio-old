import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../styles/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="It's portfolio to show Murilo's work"
          />
          <meta property="og:title" content="Murilo's Portfolio" />
          <meta
            property="og:description"
            content="It's portfolio to show Murilo's work"
          />
          <meta property="og:url" content="https://muriloarelhano.com.br/" />{" "}
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body style={{ minHeight: "100vh" }}>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
