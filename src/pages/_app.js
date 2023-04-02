import MainLayout from '@layout/MainLayout'
import '@styles/tailwind.css'
import { AuthContext } from '../context/AuthContext'
import { useAuth } from '../hooks/useAuth'


export default function App({ Component, pageProps }) {
    const auth = useAuth()

  return (
    <>
     <AuthContext.Provider value={auth}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
     </AuthContext.Provider>
    </>
  )
}
