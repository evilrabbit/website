import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const currentYear = new Date().getFullYear();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={`${styles.logo} ${styles.fadeIn}`}
          src="/evilrabbit.svg"
          alt="Evil Rabbit Logo"
          width={115.2}
          height={120}
          priority
        />
      </div>
    </main>
  )
}