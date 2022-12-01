import Image, { StaticImageData } from 'next/image';

export interface PageHeroProps {
  image: StaticImageData;
  title?: string;
  description?: string;
  alt?: string;
  textColor?: 'white' | 'collaction';
  overlay?: boolean;
}

export default function PageHero({
  image,
  title,
  description,
  alt,
  textColor,
  overlay = true,
}: PageHeroProps) {
  return (
    <div className="min-h-[520px] md:min-h-[70vh] w-full relative">
      <Image
        src={image}
        alt={alt ?? title ?? 'Page hero image'}
        fill
        style={{ objectFit: 'cover' }}
      />
      {overlay && (
        <div className="absolute bottom-0 min-h-[420px] md:min-h-[50vh] w-full bg-gradient-to-t from-black via-black opacity-50" />
      )}
      {(title || description) && (
        <div className="w-full absolute bottom-8 md:bottom-20 px-6 md:px-20">
          {title && (
            <h1
              className={`text-${
                textColor ?? 'white'
              } text-5xl md:text-6xl lg:text-7xl`}
            >
              {title}
            </h1>
          )}
          {description && <p className="text-collaction pt-5">{description}</p>}
        </div>
      )}
    </div>
  );
}
