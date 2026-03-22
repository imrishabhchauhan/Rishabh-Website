import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Rohit Singh | Digital Marketing Expert',
  description: 'Portfolio of Rohit Singh, a Professional Digital Marketing Expert with 10 years of experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-zinc-950 text-zinc-50 antialiased selection:bg-orange-500/30`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
