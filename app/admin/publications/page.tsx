"use client";

import React, { useState } from "react";
import {
  Plus,
  Trash2,
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

import { publications as initialPubs } from "@/data/mock-data";

export default function AdminPublicationsPage() {
  const [publications, setPublications] = useState(initialPubs);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    journal: "",
    year: new Date().getFullYear().toString(),
    researchTopic: "",
    type: "Journal Paper",
    url: "",
    summary: "",
  });

  // --- LOGIC: PAGINATION CALCULATION ---
  const totalPages = Math.ceil(publications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = publications.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // --- HANDLERS ---
  const handleSave = () => {
    const newPub = {
      ...formData,
      id: Date.now(),
      year: parseInt(formData.year, 10),
      typeColor: "bg-blue-100 text-blue-700",
      keywords: [],
    };

    const updatedPubs = [newPub, ...publications];
    setPublications(updatedPubs);
    setIsDialogOpen(false);
    toast.success("Publication added successfully");

    // Reset ke halaman 1 agar data baru terlihat
    setCurrentPage(1);

    // Reset form
    setFormData({
      title: "",
      authors: "",
      journal: "",
      year: new Date().getFullYear().toString(),
      researchTopic: "",
      type: "Journal Paper",
      url: "",
      summary: "",
    });
  };

  const handleDelete = (id: number) => {
    const updatedPubs = publications.filter((p) => p.id !== id);
    setPublications(updatedPubs);
    toast.success("Publication deleted");

    // Jika halaman saat ini jadi kosong setelah dihapus, mundur 1 halaman
    if (
      currentPage > 1 &&
      updatedPubs.length <= (currentPage - 1) * itemsPerPage
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Publications</h2>
          <p className="text-zinc-500">
            Manage research papers, journals, and articles.
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> Add Publication
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Publication</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  placeholder="Paper title..."
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">Summary</label>
                <Textarea
                  placeholder="Brief description..."
                  className="min-h-[100px]"
                  value={formData.summary}
                  onChange={(e) =>
                    setFormData({ ...formData, summary: e.target.value })
                  }
                />
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">Authors</label>
                <Input
                  placeholder="e.g. Dr. Sarah Chen, Prof. Wilson..."
                  value={formData.authors}
                  onChange={(e) =>
                    setFormData({ ...formData, authors: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Journal / Conference
                </label>
                <Input
                  value={formData.journal}
                  onChange={(e) =>
                    setFormData({ ...formData, journal: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Year</label>
                <Input
                  type="number"
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Research Topic</label>
                <Select
                  onValueChange={(val) =>
                    setFormData({ ...formData, researchTopic: val })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Solar Energy">Solar Energy</SelectItem>
                    <SelectItem value="Wind Power">Wind Power</SelectItem>
                    <SelectItem value="Energy Storage">
                      Energy Storage
                    </SelectItem>
                    <SelectItem value="Smart Grid">Smart Grid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <Select
                  defaultValue="Journal Paper"
                  onValueChange={(val) =>
                    setFormData({ ...formData, type: val })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Journal Paper">Journal Paper</SelectItem>
                    <SelectItem value="Conference Paper">
                      Conference Paper
                    </SelectItem>
                    <SelectItem value="Patent">Patent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">Link URL</label>
                <Input
                  placeholder="https://doi.org/..."
                  value={formData.url}
                  onChange={(e) =>
                    setFormData({ ...formData, url: e.target.value })
                  }
                />
              </div>

              <div className="col-span-2 pt-4">
                <Button onClick={handleSave} className="w-full">
                  Save Publication
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* LIST PUBLICATIONS */}
      <div className="space-y-4">
        {/* Render data hasil slice (currentData) bukan semua data */}
        {currentData.map((pub) => (
          <Card
            key={pub.id}
            className="hover:border-zinc-300 transition-colors group"
          >
            <CardContent className="p-5 flex items-start gap-4">
              <div className="h-12 w-12 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <FileText className="h-6 w-6 text-zinc-400 group-hover:text-green-600 transition-colors" />
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="text-xs font-normal text-zinc-600"
                  >
                    {pub.year}
                  </Badge>
                  <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">
                    {pub.researchTopic}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-zinc-900 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1 italic">
                    {pub.authors}
                  </p>
                </div>

                {pub.summary && (
                  <div className="bg-zinc-50 p-3 rounded-md border border-zinc-100">
                    <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                      {pub.summary}
                    </p>
                  </div>
                )}

                <p className="text-xs text-zinc-400 font-medium">
                  {pub.journal}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-zinc-400 hover:text-blue-600" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-red-600 hover:bg-red-50"
                  onClick={() => handleDelete(pub.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* --- PAGINATION CONTROLS --- */}
        {publications.length > 0 && (
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            <p className="text-sm text-zinc-500">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, publications.length)} of {publications.length}{" "}
              results
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <div className="text-sm font-medium px-2">
                Page {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
