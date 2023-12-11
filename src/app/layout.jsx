// import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
// const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeList',
  description: 'Website anime indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`
        // // ${gabarito.className}
        //  bg-color-dark`}
        className="bg-color-dark"
      >
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
