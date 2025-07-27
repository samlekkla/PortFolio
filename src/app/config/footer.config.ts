export type FooterConfig = {
  copyright: string;
  name: string;
  github: string;
  linkedin: string;
  email: string;
  extra?: string;
};

const footerConfig: FooterConfig = {
  copyright: `© ${new Date().getFullYear()} All rights reserved.`,
  name: "Sam Lekkla",
  github: "https://github.com/samlekkla",
  linkedin: "https://www.linkedin.com/in/sam-lekkla-5545622a2/",
  email: "sam.lekkla@gmail.com",
  extra: "Made with Next.js & Tailwind CSS",
};

export default footerConfig;
