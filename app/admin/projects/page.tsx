"use client";

import React, { useState } from "react";
import { Plus, Trash2, Briefcase } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import { projects as initialProjects } from "@/data/mock-data";

export default function AdminProjectsPage() {
  const [projectList, setProjectList] = useState(initialProjects);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    funding: "",
    status: "Active",
    researchAreaId: "",
  });

  const handleSave = () => {
    if (!formData.title || !formData.researchAreaId) {
      toast.error("Title and Research Area are required");
      return;
    }

    const newProject = {
      ...formData,
      id: Date.now(),
    };

    setProjectList([newProject, ...projectList]);
    setIsDialogOpen(false);
    toast.success("Project added successfully");

    setFormData({
      title: "",
      description: "",
      funding: "",
      status: "Active",
      researchAreaId: "",
    });
  };

  const handleDelete = (id: number) => {
    setProjectList(projectList.filter((p) => p.id !== id));
    toast.success("Project deleted");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Research Projects</h2>
          <p className="text-zinc-500">
            Manage ongoing and completed laboratory projects.
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Research Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Project title..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="What is this project about?"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Research Area</label>
                  <Select
                    onValueChange={(val) =>
                      setFormData({ ...formData, researchAreaId: val })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solar">Solar Energy</SelectItem>
                      <SelectItem value="wind">Wind Power</SelectItem>
                      <SelectItem value="storage">Energy Storage</SelectItem>
                      <SelectItem value="grid">Smart Grid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select
                    defaultValue="Active"
                    onValueChange={(val) =>
                      setFormData({ ...formData, status: val })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Funding Info</label>
                <Input
                  value={formData.funding}
                  onChange={(e) =>
                    setFormData({ ...formData, funding: e.target.value })
                  }
                  placeholder="e.g. $2.5M NSF Grant"
                />
              </div>
              <Button
                onClick={handleSave}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Save Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {projectList.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-green-50 p-2 rounded-lg text-green-600">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{project.title}</h3>
                    <Badge
                      variant="secondary"
                      className="text-[10px] uppercase"
                    >
                      {project.researchAreaId}
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-500 line-clamp-1">
                    {project.description}
                  </p>
                  <div className="text-sm text-zinc-400 mt-1 font-mono">
                    Funding: {project.funding}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-700 border-none">
                  {project.status}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500"
                  onClick={() => handleDelete(project.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
