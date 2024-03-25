'use server'
 
import { cookies } from 'next/headers'
 
export async function ClearCookieMessage() { 
  // Set cookie
  cookies().set('cookie_banner', '0')
}

export async function HasCookie(name) {
  // Get cookie
  const cookieStore = cookies()
  return cookieStore.has(name)
}