'use server';

import { cookies } from 'next/headers';

export async function ClearCookieMessage() {
    // Set cookie
    cookies().set('cookie_banner', '0');
}

export async function HasCookie(name) {
    // Get cookie
    const cookieStore = cookies();
    return cookieStore.has(name);
}

export async function getData(endpoint) {
    try {
        const res = await fetch(endpoint, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${endpoint}: ${res.statusText}`);
        }
        return await res.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Network error:", error);
            throw new Error("Failed to connect to the API server. Please check your internet connection.");
        } else {
            console.error("Error fetching data:", error);
            throw error; // Rethrow other types of errors
        }
    }
}
