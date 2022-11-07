import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname == '/asml/impact') {
    return NextResponse.redirect(new URL('/asml', req.url));
  } else if (pathname == '/impact') {
    return NextResponse.redirect(new URL('/asml', req.url));
  } else if (pathname == '/link') {
    return NextResponse.redirect(new URL('/uilenstede', req.url));
  } else if (pathname == '/link2') {
    return NextResponse.redirect(new URL('/uilenstede', req.url));
  }
  return NextResponse.next();
}

// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
