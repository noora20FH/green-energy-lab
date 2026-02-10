"use client";

import React, { useState } from "react";
import { Plus, Trash2, Save, Pencil } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Import data awal (simulasi database)
import { researchAreas as initialAreas, publicationTypes as initialTypes } from "@/data/mock-data";

export default function AdminSettingsPage() {
  // State untuk Research Areas
  const [areas, setAreas] = useState(initialAreas);
  const [isAreaDialogOpen, setIsAreaDialogOpen] = useState(false);
  const [newArea, setNewArea] = useState({ id: "", title: "" }); // Simplifikasi: hanya ID dan Title dulu untuk master data

  // State untuk Publication Types
  const [types, setTypes] = useState(initialTypes);
  const [isTypeDialogOpen, setIsTypeDialogOpen] = useState(false);
  const [newType, setNewType] = useState({ name: "", color: "bg-gray-100 text-gray-800" });

  // --- HANDLERS: RESEARCH AREAS ---
  const handleAddArea = () => {
    if (!newArea.id || !newArea.title) {
      toast.error("ID and Title are required");
      return;
    }
    
    setAreas([...areas, { ...newArea, id: newArea.id as any, iconName: "Circle", gradient: "", image: "", description: "", overview: "", teamImages: [], keyAreas: [] }]);
    setNewArea({ id: "", title: "" });
    setIsAreaDialogOpen(false);
    toast.success("Research Area added");
  };

  const handleDeleteArea = (id: string) => {
    setAreas(areas.filter((a) => a.id !== id));
    toast.success("Research Area deleted");
  };

  // --- HANDLERS: PUBLICATION TYPES ---
  const handleAddType = () => {
    if (!newType.name) {
      toast.error("Name is required");
      return;
    }
    const newId = types.length > 0 ? Math.max(...types.map(t => t.id)) + 1 : 1;
    setTypes([...types, { id: newId, ...newType }]);
    setNewType({ name: "", color: "bg-gray-100 text-gray-800" });
    setIsTypeDialogOpen(false);
    toast.success("Publication Type added");
  };

  const handleDeleteType = (id: number) => {
    setTypes(types.filter((t) => t.id !== id));
    toast.success("Publication Type deleted");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Master Data Settings</h2>
        <p className="text-zinc-500">Manage research topics and publication categories.</p>
      </div>

      <Tabs defaultValue="areas" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="areas">Research Areas</TabsTrigger>
          <TabsTrigger value="types">Publication Types</TabsTrigger>
        </TabsList>

        {/* --- TAB 1: RESEARCH AREAS --- */}
        <TabsContent value="areas">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Research Areas</CardTitle>
                <CardDescription>
                  Categories used to group projects and publications (e.g., Solar, Wind).
                </CardDescription>
              </div>
              <Dialog open={isAreaDialogOpen} onOpenChange={setIsAreaDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="mr-2 h-4 w-4" /> Add Area
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Research Area</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">ID (Unique Key)</label>
                      <Input 
                        placeholder="e.g. solar" 
                        value={newArea.id}
                        onChange={(e) => setNewArea({ ...newArea, id: e.target.value.toLowerCase().replace(/\s/g, '-') })}
                      />
                      <p className="text-xs text-zinc-500">Used in URLs and database relations (lowercase, no spaces).</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Display Title</label>
                      <Input 
                        placeholder="e.g. Solar Energy Systems" 
                        value={newArea.title}
                        onChange={(e) => setNewArea({ ...newArea, title: e.target.value })}
                      />
                    </div>
                    <Button onClick={handleAddArea} className="w-full">Save Area</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {areas.map((area) => (
                    <TableRow key={area.id}>
                      <TableCell className="font-mono text-xs font-medium">{area.id}</TableCell>
                      <TableCell>{area.title}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteArea(area.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- TAB 2: PUBLICATION TYPES --- */}
        <TabsContent value="types">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Publication Types</CardTitle>
                <CardDescription>
                  Categories for publications (e.g., Journal, Patent, Prototype).
                </CardDescription>
              </div>
              <Dialog open={isTypeDialogOpen} onOpenChange={setIsTypeDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="mr-2 h-4 w-4" /> Add Type
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Publication Type</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Type Name</label>
                      <Input 
                        placeholder="e.g. Technical Report" 
                        value={newType.name}
                        onChange={(e) => setNewType({ ...newType, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Badge Color Class (Tailwind)</label>
                      <Input 
                        placeholder="e.g. bg-blue-100 text-blue-700" 
                        value={newType.color}
                        onChange={(e) => setNewType({ ...newType, color: e.target.value })}
                      />
                    </div>
                    <Button onClick={handleAddType} className="w-full">Save Type</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Color Preview</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {types.map((type) => (
                    <TableRow key={type.id}>
                      <TableCell className="font-medium">{type.id}</TableCell>
                      <TableCell>{type.name}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${type.color}`}>
                          {type.name}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteType(type.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}