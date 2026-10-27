import "./globals.css";
import AppProviders from "@/providers/AppProviders";
import { heading, ibmMono, ibmSans } from "@/styles/fonts";

// Every page is rendered per request so Next.js can stamp the Content-Security-Policy nonce
// (set in proxy.js) onto its own script tags. A prerendered page would ship without it.
export const dynamic = "force-dynamic";

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
    <body className="min-h-full flex flex-col">
    <AppProviders>{children}</AppProviders>
    </body>
    </html>
  );
}