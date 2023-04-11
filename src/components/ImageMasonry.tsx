import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export interface ImageMasonryProps {
  images: string[] | StaticImageData[];
  columnsCountBreakPoints?: {
    [key: number]: number;
  };
  gutter?: string;
}

export default function ImageMasonry({
  images,
  columnsCountBreakPoints,
  gutter,
}: ImageMasonryProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {images.map(image => (
          <Image
            key={image.src}
            priority
            src={image}
            alt="Actiefoto Image"
            className="rounded object-fit w-full"
            placeholder="blur"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
