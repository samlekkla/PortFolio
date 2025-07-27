export type ExperienceEducationItem = {
    title: string;
    organization: string;
    location?: string;
    start: string;
    end?: string;
    description?: string;
    type: "experience" | "education";
    tags?: string[];
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
        title: ".NET Developer with Azure Focus",
        organization: "Jensen Education College",
        start: "2024",
        end: "2026",
        type: "education",
        tags: [".NET", "Azure", "Cloud", "Backend"],
    },
        {
        title: "Front End Developer",
        organization: "Sundsgården Folk High School",
        start: "JAN 2024",
        end: "JUN 2025",
        type: "education",
        tags: ["Front End", "JavaScript", "React", "CSS"],
    },

];

export default experienceEducationConfig;
