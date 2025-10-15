"use client";

import * as React from "react";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    <div className={`inline-flex items-center justify-center overflow-hidden ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
}

interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function AvatarImage({ src, alt = "Avatar", className, width = 32, height = 32 }: AvatarImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} className={className} />;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function AvatarFallback({ children, className, ...props }: AvatarFallbackProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
