'use client'
 
import { useSearchParams } from 'next/navigation';
 
export default function Results() {
  const searchParams = useSearchParams()
 
  const qt = searchParams.get('qt')
 
  // This will not be logged on the server when using static rendering
  console.log(qt)
 
  return <>Search terms used: {qt}</>
}