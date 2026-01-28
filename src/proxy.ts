import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const currentPathRoot = pathname.split('/')[1];

  return NextResponse.next();
}

// A configuração do matcher permanece idêntica
export const config = {
  matcher: [
    '/',
    '/private/:path*',
    // Regex para ignorar arquivos estáticos e rotas de API específicas
    '/((?!_next/static|_next/image|favicon.ico|api/auth).*)'
  ]
};
