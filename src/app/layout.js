import "./globals.css";
import { Outfit } from 'next/font/google'

const outfit = Outfit({ 
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Kind Of Cruise",
  description: "The easiest way to book your next holiday",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
