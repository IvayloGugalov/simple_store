import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/app/_components/Header'
import Main from '@/app/_components/Main'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <Main />
      </div>

      <div className={styles.center}></div>

      <div className={styles.grid}></div>
    </main>
  )
}
