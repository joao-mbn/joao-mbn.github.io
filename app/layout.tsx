import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import { Background, Footer, Header } from './components';
import './globals.css';

const inter = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Nascimento',
  description: "João's personal website",
  other: {
    'http-equiv': 'refresh',
    content: '0; url=https://joaonascimento.me/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' text-normal flex min-h-screen w-full bg-slate-50 text-slate-800'}>
        <Background />
        <div className="mx-auto mb-5 mt-10 flex w-full flex-col gap-10 px-6 lg:my-10 lg:max-w-[1024px] lg:gap-20">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
