import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  slug: string;
}

export default function ImageCard({
  imageSrc,
  imageAlt,
  title,
  slug,
}: CardProps) {
  return (
    <Link href={`/travels/${slug}`}>
      <div className="border-2 border-black group w-full overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="relative h-100 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 384px"
          />
          <div className="absolute inset-0 h-1/5 bg-gradient-to-t to-black/70 via-black/40 from-transparent" />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/0" />
          <h3 className="absolute left-1/2 -translate-x-1/2 top-4 text-4xl text-white text-center">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
