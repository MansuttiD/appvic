import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    let jwt = request.cookies.get('tokenSereno');
    console.log(jwt)
    if (jwt == undefined) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  export const config = {
  matcher: ['/pli(/.*)?'],
};