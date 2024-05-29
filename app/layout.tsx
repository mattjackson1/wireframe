import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { getData } from '@/actions';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import CookieBanner from '@/app/ui/cookie-banner';
import { Providers } from '@/app/providers';

let data: any = null;
let error: string | null = null;

try {
    data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`);
} catch (err: unknown) {
    if (err instanceof Error) {
        error = err.message;
    } else {
        error = 'An unknown error occurred.';
    }
}

const typeListsArray = data.typeLists;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    if (error) {
        return <div className="text-red-500">{error}</div>;
    }
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
