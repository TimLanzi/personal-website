import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div id="view">
      <Header />
      {children}

      <hr style={{ margin: 0 }}/>
      <Footer />
    </div>
  )
}