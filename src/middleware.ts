import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    let jwt = request.cookies.get('tokenSereno');
    if (request.nextUrl.pathname.startsWith('/login')||request.nextUrl.pathname.startsWith('/register') ) {
      if (jwt) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    }else{
      if (jwt == undefined) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  }

  export const config = {
  matcher: '/(.*)?',
};