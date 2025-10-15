import React from "react";
import Link from "next/link";
import IMAGE from "next/image";

export function Logo({ className = "", size = 36 }: { className?: string; size?: number }) {
  const [src, setSrc] = React.useState<string>('/logo.png');

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <IMAGE
        src={src}
        alt="Tradewise"
        width={size}
        height={size}
        onError={() => {
          if (src !== '/logo.png') setSrc('/logo.png');
        }}
        style={{ width: size, height: size, objectFit: 'contain' }}
      />
      <span className="font-bold text-lg">Tradewise</span>
    </Link>
  );
}
