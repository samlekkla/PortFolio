export type Project = {
  title: string;
  description: string;
  github: string;
  tags?: string[]; // Optional property for tags
};

const projectsConfig: Project[] = [
  {
    title: "🍕 Tomasos Pizzeria Web API",
    description: "This project is a backend Web API for Tomasos Pizzeria, built with ASP.NET Core, Entity Framework Core (Code First), and deployed on Microsoft Azure. Sensitive data is securely managed via Azure Key Vault.",
    github: "https://github.com/samlekkla/PizzeriaWebApi_EF",
    tags: ["ASP.NET Core", "Entity Framework Core", "Azure", "Web API", "C#"],
  },
  {
    title: "🌦️ Weather Web Application",
    description: "This project is a weather web app built with React that displays real-time weather data from APIs like OpenWeatherMap, Apixu, or SMHI. It features a clean, user-friendly interface powered by reusable React components.",
    github: "https://github.com/samlekkla/WeatherForecastREACT",
    tags: ["React", "Weather API", "JavaScript", "CSS"],
  },
    {
    title: "Customer Management System with Azure Functions & Cosmos DB",
    description: "This solution contains a minimal ASP.NET Core Web API and an Azure Function that together handle customer data and responsible salespeople using Azure Cosmos DB and SendGrid.",
    github: "https://github.com/samlekkla/Customer-Api-Azure-Function",
    tags: ["Azure Functions", "Cosmos DB", "ASP.NET Core", "C#", "API"],
  },
];

export default projectsConfig;
