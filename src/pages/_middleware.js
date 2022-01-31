import { NextResponse } from 'next/server';
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == '/asml/impact') {
    return NextResponse.redirect('/asml');
  } else if (pathname == '/impact') {
    return NextResponse.redirect('/asml');
  }
  return NextResponse.next();
}

// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page