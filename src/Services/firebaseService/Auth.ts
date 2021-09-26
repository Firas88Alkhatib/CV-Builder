import { getAuth, signInAnonymously } from '@firebase/auth'

// TODO implement this to have single source of truth
// and to minimize code duplication as getAuth need
// to be imported every time we use the auth service
const auth = getAuth()

export const anonymousLogin = async () => {
  return await signInAnonymously(auth)
}
