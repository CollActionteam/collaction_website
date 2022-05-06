import { NextResponse } from 'next/server';
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == '/asml/impact') {
    return NextResponse.redirect('/asml');
  } else if (pathname == '/impact') {
    return NextResponse.redirect('/asml');
  } else if (pathname == '/link') {
    return NextResponse.redirect(
      'https://docs.google.com/forms/d/e/1FAIpQLScNdSAzK2sNknCptNzuEy9S8OsRs2MKFQvtCElhPnepbG4jWQ/viewform?usp=sf_link'
    );
  } else if (pathname == '/link2') {
    return NextResponse.redirect(
      'https://docs.google.com/forms/d/e/1FAIpQLScNdSAzK2sNknCptNzuEy9S8OsRs2MKFQvtCElhPnepbG4jWQ/viewform?usp=sf_link'
    );
  }
  return NextResponse.next();
}

// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
