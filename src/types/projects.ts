export type ProjectsType = {
  publish: boolean;
  featured: boolean;
  title: string;
  image: string;
  links: {
    website?: string;
    phone?: string;
    location?: string;
    order?: string;
  };
  content: string;
  whiteBg?: boolean;
};
