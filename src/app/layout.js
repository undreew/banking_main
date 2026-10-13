import "./globals.css";
import { heading, ibmSans, ibmMono } from '@/styles/fonts';

export const metadata = {
    title: "Banking",
    description: "Banking Frontend Main"
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${heading.variable} ${ibmSans.variable} ${ibmMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
