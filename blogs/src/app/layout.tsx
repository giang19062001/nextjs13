import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/herder';
import Footer from '@/components/footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App by Giang',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <ToastContainer/>
        <Footer></Footer>

      </body>
      
    </html>
  )
}
