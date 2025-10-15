"use client"

import React, { useEffect } from "react"
import { SignUp, useAuth } from "@clerk/nextjs"
import { useRouter, useSearchParams } from "next/navigation"
import AuthWrapper from "@/components/auth/AuthWrapper"

export default function SignUpClient() {
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
    <AuthWrapper title="Create an account">
      <SignUp
        appearance={{ elements: { formButtonPrimary: "bg-emerald-500 text-white" } }}
      />
    </AuthWrapper>
  )
}

