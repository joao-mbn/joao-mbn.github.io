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
      <body className={inter.className + ' min-h-dvh w-dvw text-lg lg:text-xl'}>
        <div className="mx-auto flex flex-col lg:max-w-[1024px] w-full h-full gap-10 lg:gap-20 mt-10 lg:mt-20 px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

