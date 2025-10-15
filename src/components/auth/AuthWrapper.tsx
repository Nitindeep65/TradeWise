"use client"
import React from 'react'

export default function AuthWrapper({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        {title && <h1 className="text-2xl font-semibold mb-4">{title}</h1>}
        {children}
      </div>
    </div>
  )
}
