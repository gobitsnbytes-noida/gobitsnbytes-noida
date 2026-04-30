import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.redirect('https://forms.gle/JjsJ92VEkdY9G1ADA');
}

export const dynamic = 'force-static';
