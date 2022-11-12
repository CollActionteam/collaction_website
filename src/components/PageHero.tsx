import Image, { StaticImageData } from 'next/image';

export interface PageHeroProps {
  image: StaticImageData;
  title?: string;
  description?: string;
  alt?: string;
  textColor?: 'white' | 'collaction';
}

export default function PageHero(props: PageHeroProps) {
  return (
    <div className="min-h-[520px] md:min-h-[70vh] w-full relative">
      <Image
        src={props.image}
        alt={props.alt ?? props.title ?? 'Page hero image'}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute bottom-0 min-h-[420px] md:min-h-[50vh] w-full bg-gradient-to-t from-black via-black opacity-50"></div>
      <div className="w-full absolute bottom-8 md:bottom-20 px-6 md:px-20">
        <h1
          className={`text-${
            props.textColor ?? 'white'
          } text-5xl md:text-6xl lg:text-7xl`}
        >
          {props.title}
        </h1>
        <p className="text-collaction pt-5">{props.description}</p>
      </div>
    </div>
  );
}
