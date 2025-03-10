import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  width?: number;
  height?: number;
}

export function Image({
  className,
  src,
  alt,
  fallback,
  width,
  height,
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      className={cn(className)}
      src={error && fallback ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      width={width}
      height={height}
      {...props}
    />
  );
}
