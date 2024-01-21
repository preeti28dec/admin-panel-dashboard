"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import Navbar from "./ui/dashboard/navbar";
import Sidebar from "./ui/dashboard/sidebar";
import Footer from "./ui/dashboard/footer";
export default function ProviderView({ children}:any) {
  return (
    <ThemeProvider>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}