import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LANGUAGES = ['en', 'ko', 'ja'];
const DEFAULT_LANGUAGE = 'en';

export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLanguage = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase() || '';

  const lang = SUPPORTED_LANGUAGES.includes(preferredLanguage)
    ? preferredLanguage
    : DEFAULT_LANGUAGE;

  const response = NextResponse.next();
  response.cookies.set('lang', lang, {
    path: '/',
    httpOnly: false,
  });

  return response;
}

export const config = {
  matcher: ['/', '/(.*)'],
};
