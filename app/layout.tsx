// -----------------------------
import "./globals.css";
import { ReactNode } from "react";


export const metadata = {
title: "Blue Ruby",
description:
"Blue Ruby helps leadership teams bring product, sales, and marketing perspectives together and align on a way forward they can commit to.",
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="bg-stone-50 text-slate-900 antialiased">
{children}
</body>
</html>
);
}
