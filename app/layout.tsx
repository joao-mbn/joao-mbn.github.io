import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import { Footer, Header } from './components';
import './globals.css';

const inter = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Nascimento',
  description: "João's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' text-normal bg-slate-50 text-slate-800'}>
        <div className="mx-auto mb-5 mt-10 flex h-full w-full flex-col gap-10 px-6 lg:mb-10 lg:mt-20 lg:max-w-[1024px] lg:gap-20">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

