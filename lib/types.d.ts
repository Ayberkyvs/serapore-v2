export type MenuItem = {
  name: string;
  path: string;
  type: "link" | "button";
  icon: React.ReactNode;
};
export type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};
export type partnerLogosProps = string[];

export type YoutubeVideo = {
  id: string;
  title: string;
  url: string;
  viewCountText: string;
  thumbnails: {
    url: string;
    width: number;
    height: number;
  }[];
};
