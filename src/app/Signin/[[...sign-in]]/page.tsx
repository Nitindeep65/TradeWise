"use client"

import React, { useEffect } from "react"
import { SignIn, useAuth } from "@clerk/nextjs"
import { useRouter, useSearchParams } from "next/navigation"

export default function SignInPage() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <SignIn appearance={{ elements: { formButtonPrimary: "bg-emerald-500 text-white" } }} />
      </div>
    </div>
  )
}
