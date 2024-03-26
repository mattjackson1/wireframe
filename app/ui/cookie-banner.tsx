'use client';

import { HasCookie, ClearCookieMessage } from '@/app/actions';
import { useState, useEffect } from 'react';

export default function MyComponent() {
    const [cookieExists, setCookieExists] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const exists = await HasCookie('cookie_banner');
            setCookieExists(exists);
        };
        fetchData();
    }, []);

    const clearCookieMessage = async () => {
        await ClearCookieMessage();
        setCookieExists(true);
    };

    return (
        <>
            {!cookieExists && 
                <div className="fixed inset-x-0 bottom-0 w-100 p-3 m-1 bg-yellow-200">
                    <h2>About Cookies On This Site</h2>
                    <p>We would like to use analytics cookies, which sends anonymous information about how our site is used to the Google Analytics service, which we use to improve this site.</p>
                    <p>Let us know if this is OK. We will save your choice in a cookie.</p>
                    <p>You can change your preferences at any time, and you can read more about our cookies before you choose.</p>
                    <button
                        onClick={clearCookieMessage}
                        className="btn-primary"
                    >    
                        clear
                    </button>
                </div>
            }
        </>
    );
  }