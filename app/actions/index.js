'use server'
 
import { cookies } from 'next/headers';
import { getData } from '@/app/lib/data';

export async function ClearCookieMessage() { 
  // Set cookie
  cookies().set('cookie_banner', '0')
}

export async function HasCookie(name) {
  // Get cookie
  const cookieStore = cookies()
  return cookieStore.has(name)
}

export async function Typelists() {
  const data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`);

  return data.typeLists;
}
