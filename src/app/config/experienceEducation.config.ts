export type ExperienceEducationItem = {
    title: string;
    organization: string;
    location?: string;
    start?: string;
    end?: string;
    description?: string;
    type: "experience" | "education" | "certificate";
    tags?: string[];
    url?: string; // Optional URL for certificates or projects
};

const experienceEducationConfig: ExperienceEducationItem[] = [
    {
        title: "Back End Developer (Part-time)",
        organization: "SANDORA PTY LTD",
        start: "2025",
        end: "Present",
        description: "As a backend developer, I build and maintain APIs using Node.js and JavaScript, and manage database interactions with Prisma ORM. I focus on creating scalable, secure backend systems that integrate smoothly with modern frontend applications.",
        type: "experience",
        tags: ["Node.js", "JavaScript", "Prisma ORM", "APIs", "Backend"],
    },
    {
        title: "Warehouse Assistant (Part-time)",
        organization: "Insitepart AB",
        start: "2025",
        end: "Present",
        description: "As a warehouse assistant, I manage inventory, assist with shipping and receiving, and ensure a smooth workflow in the warehouse environment.",
        type: "experience",
        tags: ["Inventory", "Logistics", "Shipping", "Receiving"],
    },
    {
        title: "Sales Representative",
        organization: "Insitepart AB",
        start: "2022",
        end: "2023",
        description: "Handled customer relations, processed orders, and recommended products to restaurants and retailers. Maintained regular contact to boost sales and coordinated with logistics to ensure timely deliveries.",
        type: "experience",
        tags: ["Sales", "Customer Relations", "Order Processing", "Logistics"],
    },
    {
        title: "Overseas IT Coordinator",
        organization: "Winnine Interactive Co., Ltd.",
        start: "2019",
        end: "2022",
        description: "Supported global teams by managing IT operations across time zones, troubleshooting issues, and coordinating software rollouts. Acted as a bridge between local and international IT teams to ensure stable systems and clear communication.",
        type: "experience",
        tags: ["IT Operations", "Global Teams", "Troubleshooting", "Software Rollouts"],
    },

    // Education
    {
        title: ".NET Developer Specialized in Azure and Cloud Solutions",
        organization: "Jensen Education College",
        start: "2024",
        end: "2026",
        type: "education",
        tags: [".NET", "Azure", "Cloud", "Backend", "MsSQL", "Entity Framework"
            , "C#", "ASP.NET Core", "Web APIs", "Cloud Services", "Microservices", "Agile",
            "Unit Tests", "Clean Architecture", "CI/CD", "DevOps", "Frontend"]
    },
    {
        title: "Front End Developer",
        organization: "Sundsgarden Folk High School",
        start: "JAN 2024",
        end: "JUN 2025",
        type: "education",
        tags: ["Front End", "JavaScript", "React", "CSS", "Bootstrap", "Tailwind CSS", "HTML", "TypeScript"],
    },

    //Certificates
    {
        title: "Full Stack Developer C# Basics",
        organization: "Distansakademin.se", 
        description: "Basics of C# and .NET, including object-oriented programming, data structures, and basic web development.",
        type: "certificate",
        tags: ["C#", ".NET", "Object-Oriented Programming", "Web Development", "MVC", "MangoDB"],
        url: "https://verify.trueoriginal.com/FF2B5E07-15AB-E14E-8441-1AA5F3AFAC29/?ref=direct-copy"
    },

];

export default experienceEducationConfig;
