'use client'

import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Page() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status != 'loading') {
      if (session.status == 'authenticated') {
        void router.push('/dashboard')
      } else {
        void router.push('/auth/login')
      }
    }
  }, [session.status])

  return (
    <div className="grid place-items-center">
      <div className="flex items-center gap-2 animate-pulse">
        <Loader2 className="animate-spin" size={18} />
      </div>
    </div>
  )
}
