import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Muhammad Muntazir Mahdi", description:"AI & Technology Learner | Creative & Media Enthusiast" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
