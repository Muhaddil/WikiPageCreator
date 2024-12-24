export interface PageLinkProps {
  text: string;
  url: string;
  imgAlt?: string;
  img?: string;
  inactive?: boolean;
}

export interface BuiltByProps {
  text: string;
  link?: string;
  imgAlt?: string;
  img?: string;
}

export interface CivImageProps {
  link?: string;
  imgAlt: string;
  img: string;
}
