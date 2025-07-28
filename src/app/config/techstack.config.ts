export type TechStackItem = {
  name: string;
  logo?: string;
};

export type TechStackCategory = {
  name: string;
  items: TechStackItem[];
};

export type TechStackConfig = {
  categories: TechStackCategory[];
};

const techStackConfig: TechStackConfig = {
  categories: [
    {
      name: "Frontend",
      items: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Tailwind" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Vue", logo: "/logos/vue.svg" },
        { name: "Bootstrap" },
        { name: "Angular" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "C#", logo: "/logos/c-sharp.svg" },
        { name: ".NET" },
        { name: "Nest.js" },
        { name: "Node.js" },
        { name: "Entity Framework" },
        { name: "MSSQL" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "CosmosDB" },
      ],
    },
    {
      name: "Tools & Platforms",
      items: [
        { name: "Azure" },
        { name: "GitHub" },
        { name: "Git" },
        { name: "GitHub Actions" },
        { name: "DevOps" },
        { name: "Unit tests" },
        { name: "VS Code" },
        { name: "Visual Studio" },
      ],
    },
    {
      name: "Others",
      items: [
        { name: "Unit tests" },
        { name: "Agile methods" },
        { name: "Cloud services" },
        { name: "Cloud databases" },
        { name: "Self-leadership" },
      ],
    },
  ],
};

export default techStackConfig;
