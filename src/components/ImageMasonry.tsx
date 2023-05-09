import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export interface ImageMasonryProps {
  images: string[];
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
        {images.map((image, index) => (
          <Image
            key={index}
            priority
            src={image}
            alt="Actiefoto Image"
            className="rounded object-fit w-full"
            placeholder="blur"
            blurDataURL={image}
            height={50}
            width={50}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
