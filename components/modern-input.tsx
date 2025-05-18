"use client"
import { useState } from "react"
import type React from "react"

interface ModernInputProps {
  id: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  multiline?: boolean
  rows?: number
  className?: string
}

export default function ModernInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  multiline = false,
  rows = 4,
  className = "",
}: ModernInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const InputComponent = multiline ? "textarea" : "input"

  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          isFocused || value ? "-top-2 text-xs bg-neutral-900 px-1 text-teal-500" : "top-2.5 text-neutral-500"
        }`}
      >
        {label}
      </label>
      <InputComponent
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        rows={multiline ? rows : undefined}
        className={`w-full px-3 py-2 bg-neutral-900 border rounded-lg transition-colors duration-200 focus:outline-none ${
          isFocused ? "border-teal-500 ring-1 ring-teal-500/20" : "border-neutral-700 hover:border-neutral-600"
        } text-white`}
      />
    </div>
  )
}
