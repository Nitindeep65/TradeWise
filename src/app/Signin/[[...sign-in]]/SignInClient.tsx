"use client"

import { SignIn, useAuth } from "@clerk/nextjs"
import React, { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import AuthWrapper from "@/components/auth/AuthWrapper"

export default function SignInClient() {
  const { isSignedIn } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!isSignedIn) return
    const redirectTo = searchParams?.get("redirectTo") || "/dashboard"
    const t = setTimeout(() => router.replace(redirectTo), 50)
    return () => clearTimeout(t)
  }, [isSignedIn, router, searchParams])

  return (
    <AuthWrapper title="Sign in">
      <SignIn appearance={{ elements: { formButtonPrimary: "bg-emerald-500 text-white" } }} />
    </AuthWrapper>
  )
}
