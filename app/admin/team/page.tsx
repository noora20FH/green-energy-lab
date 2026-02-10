"use client";

import React, { useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// Tambahkan Import Select
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import data awal dan Research Areas untuk dropdown
import { teamMembers as initialData, researchAreas } from "@/data/mock-data";

export default function AdminTeamPage() {
  const [members, setMembers] = useState(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // UPDATE 1: Sesuaikan state awal dengan struktur data baru
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    expertise: "",
    image: "",
    researchAreaId: "" // Field wajib baru
  });

  const handleAddMember = () => {
    // Validasi sederhana
    if (!newMember.name || !newMember.role || !newMember.researchAreaId) {
      toast.error("Name, Role, and Research Area are required");
      return;
    }

    // UPDATE 2: Buat objek lengkap dengan ID
    const memberToAdd = {
      id: Date.now(), // Generate ID unik sementara (timestamp)
      name: newMember.name,
      role: newMember.role,
      expertise: newMember.expertise,
      image: newMember.image,
      researchAreaId: newMember.researchAreaId
    };

    setMembers([memberToAdd, ...members]); // Tambahkan ke paling atas
    
    // Reset form
    setNewMember({ name: "", role: "", expertise: "", image: "", researchAreaId: "" });
    setIsDialogOpen(false);
    toast.success("Team member added!");
  };

  const handleDelete = (id: number) => {
    const updated = members.filter((m) => m.id !== id);
    setMembers(updated);
    toast.success("Member removed");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Team Management</h2>
          <p className="text-zinc-500">Manage your research team members.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> Add Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Team Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input 
                  placeholder="e.g. Dr. Sarah Chen" 
                  value={newMember.name}
                  onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <Input 
                  placeholder="e.g. Senior Researcher" 
                  value={newMember.role}
                  onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                />
              </div>

              {/* UPDATE 3: Input Research Area (Wajib untuk relasi) */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Research Area</label>
                <Select 
                  value={newMember.researchAreaId} 
                  onValueChange={(val) => setNewMember({...newMember, researchAreaId: val})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Area" />
                  </SelectTrigger>
                  <SelectContent>
                    {researchAreas.map((area) => (
                      <SelectItem key={area.id} value={area.id}>
                        {area.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Expertise (Specific)</label>
                <Input 
                  placeholder="e.g. Perovskite Cells" 
                  value={newMember.expertise}
                  onChange={(e) => setNewMember({...newMember, expertise: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Photo URL</label>
                <Input 
                  placeholder="https://..." 
                  value={newMember.image}
                  onChange={(e) => setNewMember({...newMember, image: e.target.value})}
                />
              </div>
              
              <Button onClick={handleAddMember} className="w-full">Save Member</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="relative group overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-square w-full relative bg-zinc-100 overflow-hidden">
               <ImageWithFallback 
                 src={member.image || `https://ui-avatars.com/api/?name=${member.name}`} 
                 alt={member.name}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
               
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                 <Button variant="secondary" size="icon"><Edit className="h-4 w-4" /></Button>
                 {/* Gunakan ID untuk delete */}
                 <Button variant="destructive" size="icon" onClick={() => handleDelete(member.id)}><Trash2 className="h-4 w-4" /></Button>
               </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-bold text-lg truncate" title={member.name}>{member.name}</h3>
              <p className="text-sm text-zinc-500 truncate">{member.role}</p>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-100 px-2 py-1 rounded-full inline-block">
                  {member.expertise}
                </span>
                {/* Tampilkan Badge Area Riset */}
                <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded-full inline-block uppercase">
                  {member.researchAreaId}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}