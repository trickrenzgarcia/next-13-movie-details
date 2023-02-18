/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`mx-16 my-12 bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
