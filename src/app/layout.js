import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}
