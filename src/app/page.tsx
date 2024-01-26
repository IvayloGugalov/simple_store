import styles from './page.module.css'
import Main from '@/app/_components/Main'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Main />
      </div>
    </main>
  )
}
