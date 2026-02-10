"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Briefcase, TrendingUp } from "lucide-react";
import { teamMembers, publications, projects } from "@/data/mock-data";

export default function AdminDashboardPage() {
  // Hitung statistik sederhana dari mock-data
  const stats = [
    {
      label: "Total Publications",
      value: publications.length,
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      label: "Research Projects",
      value: projects.length,
      icon: Briefcase,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      label: "Team Members",
      value: teamMembers.length,
      icon: Users,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      label: "Total Citations",
      value: "1,240+", // Contoh hardcode
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard</h2>
        <p className="text-zinc-500">Welcome back, Prof. Wilson. Here is an overview of your lab.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-600">
                {stat.label}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-zinc-500 mt-1">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                  <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{project.title}</p>
                    <p className="text-xs text-zinc-500">{project.status} • {project.funding}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Latest Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {publications.slice(0, 3).map((pub) => (
                <div key={pub.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none truncate w-[200px]" title={pub.title}>
                      {pub.title}
                    </p>
                    <p className="text-xs text-zinc-500">{pub.journal} • {pub.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}