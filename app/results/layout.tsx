import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { getData } from '@/app/lib/data';
import Header from '@/app/ui/results/header';
import Footer from '@/app/ui/footer';
import CookieBanner from '@/app/ui/cookie-banner';

const data = await getData(
    `https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`,
);
const typeListsArray = data.typeLists;

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {
        typeListsArray: [];
    };
}) {
    params.typeListsArray = typeListsArray;

    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Header typeListsArray={params.typeListsArray} />
                {children}
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
