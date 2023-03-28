'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <div>
      hello wolrd
      {/* <Ahmad/> */}
      <h2>
      {/* <p>Click <Link href="/user">hello</Link> </p> */}
      <button type="button" onClick={() => router.push('/about')}>
        About
      </button>
      <button type="button" onClick={() => router.push('/info')}>
        Info
      </button>
      </h2>
    </div>
  )
}
