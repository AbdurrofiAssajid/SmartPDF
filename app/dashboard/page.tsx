import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server'
import { redirect } from 'next/navigation'

export default function page() {
    const {getUser} = getKindeServerSession()
    const user = getUser()
    if (!user) redirect('/auth-callback?origin=dashboard')
    
    return (
    <div></div>
  )
}
