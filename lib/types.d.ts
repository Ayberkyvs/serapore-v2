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
