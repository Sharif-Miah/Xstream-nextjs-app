import localFont from 'next/font/local';
import './globals.css';
import Nevbar from '@/components/Nevbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Xstream App',
  description: 'This is a Xstream NextJs Application.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='bg-color-bg text-white font-exo'>
          <div className='container mx-auto px-4 py-4'>
            <Nevbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
