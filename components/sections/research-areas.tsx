import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ResearchOverviewHero } from "@/components/sections/research-overview-hero";
import {
  Sun,
  Wind,
  Battery,
  Zap,
  Users,
  FileText,
  Target,
  TrendingUp,
} from "lucide-react";

interface ResearchAreasProps {
  researchArea: string;
}

export function ResearchAreas({ researchArea }: ResearchAreasProps) {
  const researchAreaData: { [key: string]: any } = {
    solar: {
      title: "Solar Energy Systems",
      icon: <Sun className="h-16 w-16 text-yellow-500" />,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1769629918424-28594e8dcff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGZpZWxkJTIwZmFybXxlbnwxfHx8fDE3NzAyMzEzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Our solar energy research focuses on developing next-generation photovoltaic technologies to maximize energy conversion efficiency and reduce costs. We explore novel materials, advanced manufacturing techniques, and innovative system designs.",
      overview:
        "The Solar Energy Systems group is at the forefront of renewable energy research, pioneering breakthrough technologies in photovoltaic cells, solar thermal systems, and integrated energy solutions. Our interdisciplinary team combines expertise in materials science, electrical engineering, and sustainable design to address the global energy challenge.",
      teamImages: [
        "https://images.unsplash.com/photo-1693932038683-7c35401f5307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3RzJTIwc29sYXIlMjBwYW5lbCUyMHJlc2VhcmNoJTIwbGFifGVufDF8fHx8MTc3MDMwNTkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc2NpZW50aXN0cyUyMHRlYW13b3JrJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVycyUyMGxhYm9yYXRvcnklMjBjb2xsYWJvcmF0aW9uJTIwd29ya2luZ3xlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      keyAreas: [
        "Advanced Photovoltaic Materials",
        "Perovskite Solar Cells",
        "Tandem Cell Architecture",
        "Solar Panel Efficiency Optimization",
        "Building-Integrated Photovoltaics (BIPV)",
        "Solar Energy Storage Integration",
      ],
      currentProjects: [
        {
          title: "Perovskite-Silicon Tandem Cells",
          description:
            "Developing high-efficiency tandem solar cells combining perovskite and silicon technologies to achieve >30% conversion efficiency.",
          funding: "$2.5M NSF Grant",
          status: "Active",
        },
        {
          title: "Moisture-Resistant Solar Materials",
          description:
            "Engineering durable solar cell materials that maintain performance in high-humidity environments.",
          funding: "$1.8M DOE Grant",
          status: "Active",
        },
        {
          title: "Smart Solar Tracking Systems",
          description:
            "Implementing AI-driven solar tracking to maximize energy capture throughout the day.",
          funding: "$800K Industry Partnership",
          status: "Active",
        },
      ],
      teamMembers: [
        {
          name: "Dr. Sarah Chen",
          role: "Senior Researcher",
          expertise: "Photovoltaic Materials",
        },
        {
          name: "Prof. James Wilson",
          role: "Principal Investigator",
          expertise: "Solar System Design",
        },
        {
          name: "Dr. Emily Zhang",
          role: "Postdoctoral Fellow",
          expertise: "Perovskite Technology",
        },
      ],
      impact: {
        publications: "45+",
        patents: "8",
        phd: "12",
        funding: "$5.1M",
      },
    },
    wind: {
      title: "Wind Power Optimization",
      icon: <Wind className="h-16 w-16 text-blue-500" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1700471880224-3f84e2fe58a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzcwMjQ2NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "We leverage artificial intelligence and machine learning to optimize wind farm performance, improve turbine design, and predict maintenance needs. Our research aims to make wind energy more efficient and cost-effective.",
      overview:
        "The Wind Power Optimization group combines advanced computational methods with practical engineering to revolutionize wind energy production. We develop intelligent systems that adapt to changing wind conditions, optimize farm layouts, and extend turbine lifespans through predictive maintenance.",
      teamImages: [
        "https://images.unsplash.com/photo-1673236394928-fdd8ec9d3619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcnMlMjB3aW5kJTIwdHVyYmluZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MDMwNTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc2NpZW50aXN0cyUyMHRlYW13b3JrJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVycyUyMGxhYm9yYXRvcnklMjBjb2xsYWJvcmF0aW9uJTIwd29ya2luZ3xlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      keyAreas: [
        "Machine Learning for Wind Prediction",
        "Turbine Aerodynamic Optimization",
        "Wind Farm Layout Design",
        "Predictive Maintenance Systems",
        "Offshore Wind Technology",
        "Wake Effect Mitigation",
      ],
      currentProjects: [
        {
          title: "AI-Driven Wind Farm Control",
          description:
            "Implementing real-time ML algorithms to optimize wind turbine positioning and maximize energy capture across entire wind farms.",
          funding: "$3.2M DOE Grant",
          status: "Active",
        },
        {
          title: "Offshore Wind Blade Optimization",
          description:
            "Designing next-generation turbine blades specifically for offshore environments with extreme weather conditions.",
          funding: "$2.1M Industry Consortium",
          status: "Active",
        },
        {
          title: "Predictive Maintenance Platform",
          description:
            "Creating an AI platform that predicts component failures weeks in advance, reducing downtime by 40%.",
          funding: "$1.5M NSF Grant",
          status: "Active",
        },
      ],
      teamMembers: [
        {
          name: "Prof. James Wilson",
          role: "Principal Investigator",
          expertise: "Wind Farm Analytics",
        },
        {
          name: "Dr. Emily Thompson",
          role: "Senior Researcher",
          expertise: "Machine Learning",
        },
        {
          name: "Dr. Alex Martinez",
          role: "Research Scientist",
          expertise: "Aerodynamic Design",
        },
      ],
      impact: {
        publications: "38+",
        patents: "5",
        phd: "9",
        funding: "$6.8M",
      },
    },
    storage: {
      title: "Energy Storage Solutions",
      icon: <Battery className="h-16 w-16 text-green-500" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMHN0b3JhZ2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDMwNTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Our energy storage research addresses one of the most critical challenges in renewable energy adoption. We develop advanced battery technologies, grid-scale storage systems, and innovative energy management solutions.",
      overview:
        "The Energy Storage Solutions group pioneers breakthrough technologies in battery chemistry, power electronics, and energy management systems. Our work enables the large-scale deployment of renewable energy by providing reliable, efficient, and cost-effective storage solutions.",
      teamImages: [
        "https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5JTIwc2NpZW50aXN0c3xlbnwxfHx8fDE3NzAzMDU5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc2NpZW50aXN0cyUyMHRlYW13b3JrJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVycyUyMGxhYm9yYXRvcnklMjBjb2xsYWJvcmF0aW9uJTIwd29ya2luZ3xlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      keyAreas: [
        "Next-Generation Battery Chemistry",
        "Solid-State Batteries",
        "Grid-Scale Energy Storage",
        "Battery Management Systems",
        "Rapid Charging Technology",
        "Second-Life Battery Applications",
      ],
      currentProjects: [
        {
          title: "Solid-State Lithium Batteries",
          description:
            "Developing solid-state batteries with 2x energy density and improved safety for grid-scale applications.",
          funding: "$4.5M DOE ARPA-E Grant",
          status: "Active",
        },
        {
          title: "Advanced Battery Thermal Management",
          description:
            "Creating intelligent cooling systems that extend battery life and enable ultra-fast charging.",
          funding: "$2.2M Industry Partnership",
          status: "Active",
        },
        {
          title: "Flow Battery Optimization",
          description:
            "Enhancing redox flow batteries for long-duration grid storage with 20-year operational lifespans.",
          funding: "$3.1M NSF Grant",
          status: "Active",
        },
      ],
      teamMembers: [
        {
          name: "Dr. Michael Rodriguez",
          role: "Principal Investigator",
          expertise: "Battery Chemistry",
        },
        {
          name: "Dr. Sarah Chen",
          role: "Senior Researcher",
          expertise: "Materials Science",
        },
        {
          name: "Dr. Lisa Wang",
          role: "Research Associate",
          expertise: "Power Electronics",
        },
      ],
      impact: {
        publications: "52+",
        patents: "12",
        phd: "15",
        funding: "$9.8M",
      },
    },
    grid: {
      title: "Smart Grid Technology",
      icon: <Zap className="h-16 w-16 text-orange-500" />,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      image:
        "https://images.unsplash.com/photo-1766853042063-e7fbaccb42c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdyaWQlMjBlbGVjdHJpY2FsJTIwcG93ZXJ8ZW58MXx8fHwxNzcwMzA1MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "We design intelligent grid systems that integrate renewable energy sources, optimize power distribution, and enable real-time energy management. Our research makes the power grid more resilient, efficient, and sustainable.",
      overview:
        "The Smart Grid Technology group develops cutting-edge solutions for modernizing electrical infrastructure. By combining IoT sensors, AI algorithms, and advanced control systems, we create adaptive grids that can seamlessly integrate renewable energy while maintaining stability and reliability.",
      teamImages: [
        "https://images.unsplash.com/photo-1588317769568-a50fd5b6143b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZ3JpZCUyMGVuZ2luZWVycyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcwMzA1OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc2NpZW50aXN0cyUyMHRlYW13b3JrJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVycyUyMGxhYm9yYXRvcnklMjBjb2xsYWJvcmF0aW9uJTIwd29ya2luZ3xlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzMDU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      keyAreas: [
        "Grid-Scale Energy Management",
        "Demand Response Systems",
        "Distributed Energy Resources",
        "Microgrid Technology",
        "Real-Time Load Balancing",
        "Cybersecurity for Smart Grids",
      ],
      currentProjects: [
        {
          title: "AI-Powered Grid Optimization",
          description:
            "Developing machine learning algorithms that predict demand patterns and optimize energy distribution in real-time.",
          funding: "$3.8M DOE Grant",
          status: "Active",
        },
        {
          title: "Resilient Microgrid Networks",
          description:
            "Creating self-healing microgrid systems that can operate independently during main grid outages.",
          funding: "$2.9M NSF Grant",
          status: "Active",
        },
        {
          title: "Blockchain-Based Energy Trading",
          description:
            "Implementing decentralized peer-to-peer energy trading platforms for community solar projects.",
          funding: "$1.6M Industry Partnership",
          status: "Active",
        },
      ],
      teamMembers: [
        {
          name: "Prof. James Wilson",
          role: "Principal Investigator",
          expertise: "Power Systems",
        },
        {
          name: "Dr. Kevin Park",
          role: "Senior Researcher",
          expertise: "Control Systems",
        },
        {
          name: "Dr. Sophie Laurent",
          role: "Research Scientist",
          expertise: "Grid Security",
        },
      ],
      impact: {
        publications: "41+",
        patents: "10",
        phd: "11",
        funding: "$8.3M",
      },
    },
  };

  const data = researchAreaData[researchArea];

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-600">Research area not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Overview Hero Section with Hexagonal Images */}
      <ResearchOverviewHero
        title={data.title}
        overview={data.overview}
        images={data.teamImages}
      />

      {/* Impact Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-24">
        <h1 className="col-span-full text-3xl font-bold text-center mb-4">Research Impact</h1>
        <Card className="text-center">
          <CardContent className="pt-6">
            <FileText className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-3xl font-bold text-green-600 mb-1">
              {data.impact.publications}
            </div>
            <div className="text-sm text-zinc-600">Publications</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {data.impact.patents}
            </div>
            <div className="text-sm text-zinc-600">Patents</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {data.impact.phd}
            </div>
            <div className="text-sm text-zinc-600">PhD Students</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {data.impact.funding}
            </div>
            <div className="text-sm text-zinc-600">Total Funding</div>
          </CardContent>
        </Card>
      </div>

      {/* Key Research Areas */}
      <div className="px-24">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Key Research Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {data.keyAreas.map((area: string, index: number) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="py-2 px-4 text-sm justify-start"
                >
                  <span className="mr-2">•</span>
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>        

      {/* Current Projects */}
      <div className="px-24">

        <h2 className="col-span-full text-3xl font-bold text-center mb-4">Current Projects</h2>
        <div className="space-y-4">
          {data.currentProjects.map((project: any, index: number) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="font-medium">Funding:</span>
                  <span>{project.funding}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Team */}
      <div className="px-24">
        <h2 className="col-span-full text-3xl font-bold text-center mb-4">Research Team</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {data.teamMembers.map((member: any, index: number) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-3 text-green-600" />
                  <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-zinc-600 mb-2">{member.role}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.expertise}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Collaboration Opportunities */}
      <div className="px-24 mb-12">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-2xl">
            Collaboration Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-700 mb-4">
            We welcome collaborations with industry partners, academic
            institutions, and government agencies. If you're interested in
            working with our team, please reach out to discuss potential
            projects and partnerships.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-600 hover:bg-green-700">
              Industry Partnerships
            </Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">
              Academic Collaborations
            </Badge>
            <Badge className="bg-orange-600 hover:bg-orange-700">
              Graduate Research
            </Badge>
            <Badge className="bg-purple-600 hover:bg-purple-700">
              Postdoctoral Positions
            </Badge>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
