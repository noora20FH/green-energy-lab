import {
  Lightbulb,
  BookOpen,
  Award,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export const researchTopics = [
  { value: "solar", label: "Solar Energy" },
  { value: "wind", label: "Wind Power" },
  { value: "battery", label: "Energy Storage" },
  { value: "grid", label: "Smart Grid" },
];

export const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Senior Researcher",
    expertise: "Solar Energy",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Research Associate",
    expertise: "Energy Storage",
  },
  {
    name: "Dr. Emily Thompson",
    role: "Postdoctoral Fellow",
    expertise: "Wind Power",
  },
];

export const researchNews = [
  {
    id: 1,
    type: "PUBLICATION",
    date: "Oct 12, 2025",
    title: "Breakthrough in Perovskite Stability",
    description:
      "Our latest findings on moisture-resistant solar cells published in Nature Energy.",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    type: "GRANT",
    date: "Oct 05, 2025",
    title: "$1.2M DOE Research Award",
    description:
      "Department of Energy funds our next-generation battery storage project.",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    type: "SEMINAR",
    date: "Sep 28, 2025",
    title: "International Conference Keynote",
    description: "Prof. Wilson presents at IEEE Green Energy Summit in Tokyo.",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    type: "COPYRIGHT",
    date: "Sep 15, 2025",
    title: "Patent Granted for Smart Grid Algorithm",
    description:
      "Our innovative load balancing system receives US patent approval.",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 5,
    type: "PROTOTYPE",
    date: "Sep 01, 2025",
    title: "Field Testing of Wind Optimization System",
    description:
      "Real-world deployment shows 23% efficiency improvement in wind farms.",
    color: "bg-green-100 text-green-700",
  },
];

// ... (pindahkan data publications dan stats di sini juga jika perlu)
export const publications = [
  {
    id: 1,
    title: 'Advanced Photovoltaic Cell Efficiency: A Comprehensive Study',
    authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez, Prof. James Wilson',
    journal: 'Nature Energy',
    year: 2024,
    researchTopic: 'Solar Energy',
    type: 'Journal Paper',
    typeColor: 'bg-blue-100 text-blue-700',
    summary: 'This research presents groundbreaking advancements in perovskite solar cell technology, achieving a record-breaking 28.5% efficiency through novel material composition and manufacturing techniques. Our findings demonstrate significant improvements in long-term stability and cost-effectiveness.',
    keywords: ['Perovskite', 'Solar Cells', 'Efficiency', 'Renewable Energy', 'Materials Science'],
    url: 'https://nature.com/articles/example1'
  },
  {
    id: 2,
    title: 'Machine Learning Applications in Wind Farm Optimization',
    authors: 'Prof. James Wilson, Dr. Emily Thompson',
    journal: 'IEEE Green Energy Summit 2023',
    year: 2023,
    researchTopic: 'Wind Power',
    type: 'Seminar Paper',
    typeColor: 'bg-purple-100 text-purple-700',
    summary: 'We present an AI-driven system that optimizes wind turbine positioning and operational parameters in real-time, resulting in a 23% increase in energy output. The system uses deep learning to predict wind patterns and adjust turbine angles accordingly.',
    keywords: ['Machine Learning', 'Wind Energy', 'Optimization', 'AI', 'Predictive Analytics'],
    url: 'https://ieee.org/papers/example2'
  },
  {
    id: 3,
    title: 'Next-Generation Battery Technologies for Grid-Scale Storage',
    authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez',
    journal: 'Energy Storage Materials',
    year: 2023,
    researchTopic: 'Energy Storage',
    type: 'Journal Paper',
    typeColor: 'bg-blue-100 text-blue-700',
    summary: 'Development of solid-state lithium-ion batteries with enhanced safety features and 40% higher energy density compared to conventional liquid electrolyte systems. This technology enables more efficient grid-scale renewable energy storage.',
    keywords: ['Battery Technology', 'Energy Storage', 'Solid-State', 'Grid Systems', 'Lithium-Ion'],
    url: 'https://sciencedirect.com/article/example3'
  },
  {
    id: 4,
    title: 'Smart Grid Load Balancing Algorithm',
    authors: 'Dr. Michael Rodriguez, Prof. James Wilson, Dr. Lisa Wang',
    journal: 'US Patent Office',
    year: 2024,
    researchTopic: 'Smart Grid',
    type: 'Copyright',
    typeColor: 'bg-orange-100 text-orange-700',
    summary: 'Patented algorithm for intelligent load distribution in smart grids, reducing energy waste by 18% through predictive demand modeling and automated resource allocation across distributed energy sources.',
    keywords: ['Smart Grid', 'Patent', 'Load Balancing', 'Energy Management', 'Algorithm'],
    url: 'https://patents.google.com/example4'
  },
  {
    id: 5,
    title: 'Autonomous Solar Panel Cleaning Robot',
    authors: 'Dr. Emily Zhang, Dr. Alex Martinez, Engineering Team',
    journal: 'Smart Green Energy Lab',
    year: 2025,
    researchTopic: 'Solar Energy',
    type: 'Prototype',
    typeColor: 'bg-green-100 text-green-700',
    summary: 'Developed a fully autonomous robot system for cleaning large-scale solar installations, improving panel efficiency by 15% while reducing maintenance costs by 60%. The prototype uses AI-based navigation and waterless cleaning technology.',
    keywords: ['Robotics', 'Solar Maintenance', 'Automation', 'Prototype', 'Innovation'],
    url: 'https://smartgreenenergy.edu/prototypes/solar-robot'
  },
  {
    id: 6,
    title: 'Thermal Energy Recovery System for Industrial Applications',
    authors: 'Dr. Kevin Park, Dr. Sophie Laurent, Industrial Partners',
    journal: 'Department of Energy Technology Transfer',
    year: 2024,
    researchTopic: 'Energy Storage',
    type: 'Applied Technology',
    typeColor: 'bg-teal-100 text-teal-700',
    summary: 'Commercial deployment of waste heat recovery technology in manufacturing facilities, capturing and repurposing thermal energy to reduce overall energy consumption by 25%. Successfully implemented in 12 industrial sites.',
    keywords: ['Waste Heat', 'Energy Recovery', 'Industrial', 'Thermal Systems', 'Applied Research'],
    url: 'https://energy.gov/tech-transfer/example6'
  },
]