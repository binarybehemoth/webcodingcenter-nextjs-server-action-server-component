import { type NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  console.log('fetching...' + request.nextUrl.searchParams.get('id'));
  return Response.json({ x: 1 });
}
