import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import styles from './page.module.css'
import { Theme } from '@radix-ui/themes'
import './globals.css'

import ReduxStoreProvider from './_providers/redux'
import Header from './_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Theme>
          <ReduxStoreProvider>
            <>
              <Header />
              <main className={styles.main}>
                <div className={styles.description}>{children}</div>
              </main>
            </>
          </ReduxStoreProvider>
        </Theme>
      </body>
    </html>
  )
}
