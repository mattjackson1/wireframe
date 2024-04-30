import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { getData } from '@/actions';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import CookieBanner from '@/app/ui/cookie-banner';
import { Providers } from '@/app/providers';

const data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`);
const typeListsArray = data.typeLists;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <title>Suffolk InfoLink</title>
            <body className={`${inter.className} antialiased`}>
                <Providers>
                    <CookieBanner />
                    <Header typeListsArray={typeListsArray} />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
