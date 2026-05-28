import { useOutletContext } from 'react-router-dom'

export type AuthUser = { firstName: string; lastName: string; role: string }

export function useAuthUser() {
  return useOutletContext<AuthUser>()
}
