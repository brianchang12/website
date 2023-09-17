/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import AntdRegistry from './AntdRegistry'
import Head from 'next/head';


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body style={{margin: "0px"}}>
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </body>
      </html>
    );
  }
  