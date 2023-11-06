import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let jwt = request.cookies.get('tokenSereno');

  if (jwt) {
    return NextResponse.redirect(new URL('/', request.url));
  }

}


export const config = {
    matcher: ['/login','/regsiter'],
  };