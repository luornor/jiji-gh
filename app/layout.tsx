"use client";

import { Inter } from "next/font/google";
import { PublicEnvScript } from "next-runtime-env";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body className={inter.className}>
          <StoreProvider store={store}>{children}</StoreProvider>
      </body>
    </html>
  );
}
