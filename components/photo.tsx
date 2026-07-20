import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * `images.unoptimized` bypasses the Next image loader, and with it the
 * automatic basePath prefix — the _next/ chunks get "/pansion-makina-v3/"
 * but the image src would stay at "/img/…" and 404 on Pages. Mirror the
 * basePath from next.config here so both resolve under the same root.
 */
export const BASE = process.env.NODE_ENV === "production" ? "/pansion-makina-v3" : "";

/**
 * A photograph in the site's existing grammar: the same rounded, bordered
 * surface the pegboard and the detail panel already use, so photos read as
 * part of the reception furniture rather than pasted onto it. Every photo is
 * the venue's own (professional shoot from the owner's site archive) — no stock.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  className,
  radius = "rounded-3xl",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 92vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  radius?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn("overflow-hidden border border-border bg-card", radius, className)}
    >
      <Image
        src={`${BASE}${src}`}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover"
      />
    </figure>
  );
}
