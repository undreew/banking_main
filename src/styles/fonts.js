import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const heading = Bricolage_Grotesque({
    variable: "--font-heading",
    subsets: ["latin"],
});

export const ibmSans = IBM_Plex_Sans({
    variable: "--font-ibm-sans",
    subsets: ["latin"],
});

export const ibmMono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable: "--font-ibm-mono",
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});