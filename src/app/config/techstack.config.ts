export type TechStackItem = {
  name: string;
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
        { name: "Tailwind CSS" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Vue" },
        { name: "Bootstrap" },
        { name: "Angular" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "C#" },
        { name: ".NET" },
        { name: "Entity Framework" },
        { name: "Nest.js" },
        { name: "Node.js" },
        { name: "MSSQL" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Cosmos DB" },
      ],
    },
    {
      name: "Tools",
      items: [
        { name: "Azure" },
        { name: "Cloud" },
        { name: "GitHub" },
        { name: "Git" },
        { name: "Postman" },
        { name: "Visual Studio" },
        { name: "Visual Studio Code" },
      ],
    },
    {
      name: "Others",
      items: [
        { name: "Unit testing" },
        { name: "Agile methods" },
        { name: "Cloud services" },
        { name: "Cloud databases" },
        { name: "Self-leadership" },
        { name: "Team collaboration" },
      ],
    },
  ],
};

export default techStackConfig;
