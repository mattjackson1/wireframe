import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import CookieBanner from '@/app/ui/cookie-banner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieBanner/>
      </body>
    </html>
  );
}
