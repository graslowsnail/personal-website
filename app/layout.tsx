import './globals.css'
import { Header } from '@/components';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Pablo Ramirez',
  description: 'A personal website to get to know Pablo Ramirez',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) { 
    return (
      <html lang="en">
        <body className='relative flex flex-col min-h-screen'>
        {<Header />}
            {children}
            <Footer />
        </body>
      </html>

    )
}
