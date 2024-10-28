import { type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
//export const dynamic = 'force-static';
let n=0;
export function GET(request: NextRequest) {
  console.log('fetching...' + request.nextUrl.searchParams.get('id'));
  n++;
  revalidatePath('https://webcodingcenter-nextjs-server-action-server-component.vercel.app/api?id='+ request.nextUrl.searchParams.get('id'));
  return Response.json({ x: n });
}
