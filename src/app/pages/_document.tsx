/* eslint-disable @next/next/no-page-custom-font */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html lang="en">
        <Head />
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito+Sans:opsz@6..12&family=Playfair+Display:ital@0;1&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }