import { NextResponse } from 'next/server';

export function middleware(req) {
  
  let abTestGroup = req.cookies.get('ab-test-group');

  B
  if (!abTestGroup) {
    abTestGroup = Math.random() < 0.5 ? 'A' : 'B';
    const res = NextResponse.next();
    res.cookies.set('ab-test-group', abTestGroup, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
    return res;
  }

  
  return NextResponse.next();
}
