import { type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
//export const dynamic = 'force-static';
let n=0;
export function GET(request: NextRequest) {
  console.log('fetching...' + request.nextUrl.searchParams.get('id'));
  n++;
  revalidatePath('/api?id='+ request.nextUrl.searchParams.get('id'));
  const res =  NextResponse.json({ x: n });
  res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins, or specify a particular origin
  return res;
}
