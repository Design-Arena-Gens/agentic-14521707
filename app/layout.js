import "./globals.css";

export const metadata = {
  title: "STANDEX Business Growth Agent",
  description:
    "STANDEX content strategy, lead generation, and visa consultancy hub focused on Bangladeshi students and professionals heading to Japan."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
