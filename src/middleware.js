import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname == '/veganuary/impact') {
    return NextResponse.redirect(new URL('/veganuary', req.url));
  } else if (pathname == '/impact') {
    return NextResponse.redirect(new URL('/veganuary', req.url));
  } else if (pathname == '/link') {
    return NextResponse.redirect(new URL('/greenlands', req.url));
  } else if (pathname == '/link2') {
    return NextResponse.redirect(new URL('/greenlands', req.url));
  } else if (pathname == '/q') {
    return NextResponse.redirect('https://forms.gle/ARBP4LUd1qsgAFkB8');
  } else if (pathname == '/free') {
    return NextResponse.redirect('https://forms.gle/Vc2HEPNHSWVJB7FK7');
  } else if (pathname == '/comedy') {
    return NextResponse.redirect('https://forms.gle/p1vGDFi6GVXcTCcX6');
  } else if (pathname == '/projects/steun-je-school') {
    return NextResponse.redirect(new URL('/steun-je-school', req.url));
  }

  return NextResponse.next();
}

// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
