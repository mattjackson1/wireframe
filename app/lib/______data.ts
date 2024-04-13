export async function getData(endpoint: string) {
    try {
        const res = await fetch(endpoint, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${endpoint}: ${res.statusText}`);
        }
        return await res.json(); // parses JSON response into native JavaScript objects
    } catch (error: any | unknown) {
        if (error instanceof TypeError) {
            console.error("Network error:", error);
            //throw new Error("Failed to connect to the server. Please check your internet connection.");
        } else {
            console.error("Error fetching data:", error);
            //throw error; // Rethrow other types of errors
        }
    }
}
