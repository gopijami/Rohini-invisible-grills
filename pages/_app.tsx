import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { FloatingContactSkeleton } from '../components/LoadingSkeletons'

const FloatingContact = dynamic(() => import('../components/FloatingContact'), {
  loading: () => <FloatingContactSkeleton />,
  ssr: true,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full app-shell bg-white">
        <Component {...pageProps} />
      </div>
      <FloatingContact />
    </div>
  )
}
