import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let jwt = request.cookies.get('tokenSereno');

  if (request.nextUrl.pathname === '/login' && jwt) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname === '/register' && jwt) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!jwt && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/register' ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

}

export const config = {
  matcher: ['/','/pli','/pli(.*)?','/history','/recharge','/send','/settings','/settings(/.*)?','/withdraw','/login','/register'],
};