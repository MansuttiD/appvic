import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let jwt = request.cookies.get('tokenSereno');

  if (jwt == undefined ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

}

export const config = {
  matcher: ['/','/pli','/pli(/.*)?','/history','/recharge','/send','/settings','/settings(/.*)?','/withdraw'],
};