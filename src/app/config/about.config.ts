export type AboutConfig = {
  bio: string[];
  techStack: string[];
  imagePath: string;
};

const aboutConfig: AboutConfig = {
  bio: [
    "I am a passionate developer with expertise in building scalable web applications.",
    "My journey in tech started with curiosity and evolved into a career I love.",
  ],
  techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js"],
  imagePath: "/profile.jpg",
};

export default aboutConfig;
