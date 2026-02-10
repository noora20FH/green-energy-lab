// data/mock-data.ts

export type ResearchAreaId = "solar" | "wind" | "storage" | "grid";

// 1. TABEL AREA PENELITIAN (Utama)
export const researchAreas = [
  {
    id: "solar" as ResearchAreaId,
    title: "Solar Energy Systems",
    iconName: "Sun",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=1080",
    description: "Developing next-generation photovoltaic technologies to maximize efficiency.",
    overview: "The Solar Energy Systems group is at the forefront of renewable energy research, pioneering breakthrough technologies in photovoltaic cells and solar thermal systems.",
    teamImages: [
      "https://images.unsplash.com/photo-1693932038683-7c35401f5307?q=80&w=1080",
      "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?q=80&w=1080"
    ],
    keyAreas: ["Advanced Photovoltaic Materials", "Perovskite Solar Cells", "Tandem Cell Architecture", "BIPV Systems"],
  },
  {
    id: "wind" as ResearchAreaId,
    title: "Wind Power Optimization",
    iconName: "Wind",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1631874890489-71b1ab6aefb7?q=80&w=1080",
    description: "Leveraging AI to optimize wind farm performance and turbine design.",
    overview: "Our Wind Power group combines advanced computational fluid dynamics with machine learning to revolutionize turbine performance and farm layout.",
    teamImages: ["https://images.unsplash.com/photo-1673236394928-fdd8ec9d3619?q=80&w=1080"],
    keyAreas: ["ML for Wind Prediction", "Aerodynamic Optimization", "Offshore Wind Technology", "Wake Effect Mitigation"],
  },
  {
    id: "storage" as ResearchAreaId,
    title: "Energy Storage Solutions",
    iconName: "Battery",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?q=80&w=1080",
    description: "Developing next-generation battery technologies for grid-scale storage.",
    overview: "We focus on safe, high-density, and long-lasting storage solutions, from solid-state batteries to advanced flow battery systems.",
    teamImages: ["https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?q=80&w=1080"],
    keyAreas: ["Solid-State Batteries", "Redox Flow Systems", "Thermal Management", "Battery Recycling Tech"],
  },
  {
    id: "grid" as ResearchAreaId,
    title: "Smart Grid Technology",
    iconName: "Zap",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1080",
    description: "Pioneering intelligent load distribution and automated resource allocation.",
    overview: "The Smart Grid group develops AI-driven infrastructure to handle the intermittent nature of renewable energy while maintaining grid stability.",
    teamImages: ["https://images.unsplash.com/photo-1588317769568-a50fd5b6143b?q=80&w=1080"],
    keyAreas: ["Demand Response AI", "Microgrid Control", "V2G Integration", "Grid Cybersecurity"],
  }
];

// 2. TABEL PROFESSOR PROFILE
export const professorProfile = {
  name: "Prof. James Wilson",
  role: "Principal Investigator",
  image: "https://images.unsplash.com/photo-1758685734614-63fe30c18b79?q=80&w=1080",
  badges: ["PhD, MIT", "IEEE Fellow"],
  contact: {
    email: "j.wilson@university.edu",
    phone: "+1 (555) 123-4567",
    location: "Building 5, Room 301, Green Energy Lab"
  },
  biography: `Professor James Wilson is a leading researcher in sustainable energy systems with over 20 years of experience in the field. He received his PhD from MIT in 2008 and has since published more than 150 peer-reviewed papers in top-tier journals.

His groundbreaking work on advanced photovoltaic systems has earned him numerous accolades, including the prestigious IEEE Medal for Environmental Excellence and the National Science Foundation CAREER Award.

Professor Wilson's current research focuses on integrating artificial intelligence with renewable energy systems to create smarter, more efficient power grids. He is passionate about mentoring the next generation of scientists and currently leads a diverse team.`,
  education: [
    { degree: "PhD in Electrical Engineering", institution: "MIT", year: "2008" },
    { degree: "MS in Energy Systems", institution: "Stanford University", year: "2004" }
  ],
  awards: [
    { title: "IEEE Medal for Environmental Excellence", year: "2022" },
    { title: "NSF CAREER Award", year: "2015" }
  ]
};

// 3. TABEL PROJECTS (Relasi: researchAreaId)
export const projects = [
  { id: 1, researchAreaId: "solar", title: "Perovskite-Silicon Tandem Cells", description: "Achieving >30% efficiency in tandem solar cells.", funding: "$2.5M NSF Grant", status: "Active" },
  { id: 2, researchAreaId: "wind", title: "AI-Driven Wind Farm Control", description: "ML algorithms to optimize turbine positioning.", funding: "$3.2M DOE Grant", status: "Active" },
  { id: 3, researchAreaId: "storage", title: "Solid-State Lithium Batteries", description: "2x energy density batteries for EVs.", funding: "$4.5M ARPA-E", status: "Active" },
  { id: 4, researchAreaId: "grid", title: "AI-Powered Grid Optimization", description: "Predictive demand patterns for city-scale grids.", funding: "$3.8M DOE Grant", status: "Active" },
  { id: 5, researchAreaId: "solar", title: "BIPV Glass Innovation", description: "Transparent solar cells for skyscraper windows.", funding: "$1.2M Industry Fund", status: "Pending" },
  { id: 6, researchAreaId: "wind", title: "Offshore Wake Mitigation", description: "Reducing energy loss in large offshore farms.", funding: "$2.1M EU Research", status: "Completed" }
];

// 4. TABEL TEAM MEMBERS (Relasi: researchAreaId)
export const teamMembers = [
  { id: 1, researchAreaId: "solar", name: "Dr. Sarah Chen", role: "Senior Researcher", expertise: "Materials Science", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
  { id: 2, researchAreaId: "storage", name: "Dr. Michael Rodriguez", role: "Associate Researcher", expertise: "Electrochemistry", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
  { id: 3, researchAreaId: "wind", name: "Dr. Emily Thompson", role: "Postdoc Fellow", expertise: "Fluid Dynamics", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" },
  { id: 4, researchAreaId: "grid", name: "Dr. Kevin Park", role: "Senior Engineer", expertise: "Power Systems", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
  { id: 5, researchAreaId: "grid", name: "Dr. Lisa Wang", role: "Research Associate", expertise: "Cybersecurity", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400" }
];

// --- 2. TABEL PUBLICATION TYPES (Master) ---
export const publicationTypes = [
  { id: 1, name: "Journal Paper", color: "bg-blue-100 text-blue-700" },
  { id: 2, name: "Seminar Paper", color: "bg-purple-100 text-purple-700" },
  { id: 3, name: "Copyright", color: "bg-orange-100 text-orange-700" },
  { id: 4, name: "Prototype", color: "bg-green-100 text-green-700" },
  { id: 5, name: "Applied Technology", color: "bg-teal-100 text-teal-700" },
];

// --- 3. TABEL PUBLICATIONS (Relational) ---
export const publications = [
  {
    id: 1,
    title: "Advanced Photovoltaic Cell Efficiency: A Comprehensive Study",
    authors: "Dr. Sarah Chen, Dr. Michael Rodriguez, Prof. James Wilson",
    journal: "Nature Energy",
    year: 2024,
    researchAreaId: "solar",
    typeId: 1, // Journal Paper
    summary: "This research presents groundbreaking advancements in perovskite solar cell technology...",
    keywords: ["Perovskite", "Solar Cells", "Efficiency"],
    url: "https://nature.com/articles/example1",
  },
  {
    id: 2,
    title: "Machine Learning Applications in Wind Farm Optimization",
    authors: "Prof. James Wilson, Dr. Emily Thompson",
    journal: "IEEE Green Energy Summit 2023",
    year: 2023,
    researchAreaId: "wind",
    typeId: 2, // Seminar Paper
    summary: "We present an AI-driven system that optimizes wind turbine positioning...",
    keywords: ["Machine Learning", "Wind Energy", "AI"],
    url: "https://ieee.org/papers/example2",
  },
  {
    id: 3,
    title: "Next-Generation Battery Technologies for Grid-Scale Storage",
    authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
    journal: "Energy Storage Materials",
    year: 2023,
    researchAreaId: "storage",
    typeId: 1, // Journal Paper
    summary: "Development of solid-state lithium-ion batteries with enhanced safety features...",
    keywords: ["Battery Technology", "Energy Storage", "Solid-State"],
    url: "https://sciencedirect.com/article/example3",
  },
  {
    id: 4,
    title: "Smart Grid Load Balancing Algorithm",
    authors: "Dr. Michael Rodriguez, Prof. James Wilson, Dr. Lisa Wang",
    journal: "US Patent Office",
    year: 2024,
    researchAreaId: "grid",
    typeId: 3, // Copyright
    summary: "Patented algorithm for intelligent load distribution in smart grids...",
    keywords: ["Smart Grid", "Patent", "Algorithm"],
    url: "https://patents.google.com/example4",
  },
  {
    id: 5,
    title: "Autonomous Solar Panel Cleaning Robot",
    authors: "Dr. Emily Zhang, Dr. Alex Martinez, Engineering Team",
    journal: "Smart Green Energy Lab",
    year: 2025,
    researchAreaId: "solar",
    typeId: 4, // Prototype
    summary: "Developed a fully autonomous robot system for cleaning solar installations...",
    keywords: ["Robotics", "Solar Maintenance", "Prototype"],
    url: "https://smartgreenenergy.edu/prototypes/solar-robot",
  },
  {
    id: 6,
    title: "Thermal Energy Recovery System for Industrial Applications",
    authors: "Dr. Kevin Park, Dr. Sophie Laurent, Industrial Partners",
    journal: "Department of Energy Technology Transfer",
    year: 2024,
    researchAreaId: "storage",
    typeId: 5, // Applied Technology
    summary: "Commercial deployment of waste heat recovery technology in manufacturing...",
    keywords: ["Waste Heat", "Energy Recovery", "Industrial"],
    url: "https://energy.gov/tech-transfer/example6",
  },
];

// 6. TABEL IMPACT CONFIGS (Relasi: researchAreaId)
export const researchImpactConfigs = [
  { researchAreaId: "solar", patents: 8, phdStudents: 12, funding: "$5.1M" },
  { researchAreaId: "wind", patents: 5, phdStudents: 9, funding: "$6.8M" },
  { researchAreaId: "storage", patents: 12, phdStudents: 15, funding: "$9.8M" },
  { researchAreaId: "grid", patents: 10, phdStudents: 11, funding: "$8.3M" }
];