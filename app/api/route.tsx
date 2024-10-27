import { type NextRequest } from 'next/server';

let n=0;
export function GET(request: NextRequest) {
  console.log('fetching...' + request.nextUrl.searchParams.get('id'));
  n++;
  return Response.json({ x: n });
}
