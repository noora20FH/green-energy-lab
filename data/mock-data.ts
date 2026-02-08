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
export const professorProfile = {
  name: "Prof. James Wilson",
  role: "Principal Investigator",
  image: "https://images.unsplash.com/photo-1758685734614-63fe30c18b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyOTAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  badges: ["PhD, MIT", "IEEE Fellow"],
  contact: {
    email: "j.wilson@university.edu",
    phone: "+1 (555) 123-4567",
    location: "Building 5, Room 301, Green Energy Lab"
  },
  biography: [
    "Professor James Wilson is a leading researcher in sustainable energy systems with over 20 years of experience in the field. He received his PhD from MIT in 2008 and has since published more than 150 peer-reviewed papers in top-tier journals.",
    "His groundbreaking work on advanced photovoltaic systems has earned him numerous accolades, including the prestigious IEEE Medal for Environmental Excellence and the National Science Foundation CAREER Award.",
    "Professor Wilson's current research focuses on integrating artificial intelligence with renewable energy systems to create smarter, more efficient power grids. He is passionate about mentoring the next generation of scientists and currently leads a diverse team of 15 PhD students and postdoctoral researchers.",
    "Beyond his academic work, Prof. Wilson advises several governmental bodies on renewable energy policy and serves on the board of the International Solar Energy Society."
  ],
  education: [
    {
      degree: "PhD in Electrical Engineering",
      institution: "Massachusetts Institute of Technology",
      year: "2008"
    },
    {
      degree: "MS in Energy Systems",
      institution: "Stanford University",
      year: "2004"
    },
    {
      degree: "BS in Physics",
      institution: "Caltech",
      year: "2002"
    }
  ],
  awards: [
    { title: "IEEE Medal for Environmental Excellence", year: "2022" },
    { title: "NSF CAREER Award", year: "2015" },
    { title: "Global Energy Prize Finalist", year: "2020" }
  ]
};
export const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Senior Researcher",
    expertise: "Solar Energy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsc2llbnRpc3QlMjBmZW1hbGV8ZW58MXx8fHwxNzcwMzQ2MjUxfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Research Associate",
    expertise: "Energy Storage",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzcwMzQ2Mjc4fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    name: "Dr. Emily Thompson",
    role: "Postdoctoral Fellow",
    expertise: "Wind Power",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyM3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzcwMzQ2MjkzfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    name: "Dr. Alex Martinez",
    role: "Wind Analytics Lead",
    expertise: "Data Science",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc3MDM0NjI3OHww&ixlib=rb-4.1.0&q=80&w=400"
  },
   {
    name: "Dr. Sophie Laurent",
    role: "Thermal Systems",
    expertise: "Thermodynamics",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzNHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzcwMzQ2MjkzfDA&ixlib=rb-4.1.0&q=80&w=400"
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