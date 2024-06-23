import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AuthForm from '../components/AuthForm'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const handleLogin = async (email, password) => {
    // Implement your authentication logic here
    // Using Supabase Auth for example
    try {
      const { error } = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      if (error) {
        // Handle login error
        console.error(error)
        return
      }

      router.push('/patient') // Redirect to patient portal after login
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Welcome to our Ayurvedic Healthcare Platform!</h1>
      {!session && <AuthForm onLogin={handleLogin} />}
      {session && (
        <div>
          <p>You are logged in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Home