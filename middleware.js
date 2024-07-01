import { NextResponse } from 'next/server';

export function middleware(req) {
  const { cookies } = req;
  const authToken = cookies.authToken || true;

  if (authToken) {
    return NextResponse.rewrite(new URL('/auth', req.url));
  } else {
    return NextResponse.rewrite(new URL('/general', req.url));
  }
}

export const config = {
  matcher: ['/privacy-policy', '/term-of-service', '/contact'],
};
