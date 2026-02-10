"use client";

import React, { useState } from "react";
import { Save, Plus, Trash2, GraduationCap, Award } from "lucide-react";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Import Data
import { professorProfile } from "@/data/mock-data";

export default function AdminProfile() {
  // --- STATE MANAGEMENT ---
  const [basicInfo, setBasicInfo] = useState({
    name: professorProfile.name,
    role: professorProfile.role,
    image: professorProfile.image,
  });
  
  const [bio, setBio] = useState(professorProfile.biography);
  const [education, setEducation] = useState(professorProfile.education);
  const [awards, setAwards] = useState(professorProfile.awards);

  // --- HANDLERS: EDUCATION ---
  const handleEduChange = (index: number, field: string, value: string) => {
    const newEdu = [...education];
   
    newEdu[index] = { ...newEdu[index], [field]: value };
    setEducation(newEdu);
  };

  const addEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "" }]);
  };

  const removeEducation = (index: number) => {
    const newEdu = education.filter((_, i) => i !== index);
    setEducation(newEdu);
  };

  // --- HANDLERS: AWARDS ---
  const handleAwardChange = (index: number, field: string, value: string) => {
    const newAwards = [...awards];
    
    newAwards[index] = { ...newAwards[index], [field]: value };
    setAwards(newAwards);
  };

  const addAward = () => {
    setAwards([...awards, { title: "", year: "" }]);
  };

  const removeAward = (index: number) => {
    const newAwards = awards.filter((_, i) => i !== index);
    setAwards(newAwards);
  };

  // --- SAVE ALL ---
  const handleSave = () => {
    console.log({ basicInfo, bio, education, awards });
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl space-y-8 pb-10">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Professor Profile</h2>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="mr-2 h-4 w-4" /> Save All Changes
        </Button>
      </div>

      {/* 1. BASIC INFO */}
      <Card>
        <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input 
                value={basicInfo.name} 
                onChange={(e) => setBasicInfo({...basicInfo, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Role</label>
              <Input 
                value={basicInfo.role} 
                onChange={(e) => setBasicInfo({...basicInfo, role: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium">Profile Image URL</label>
             <Input 
                value={basicInfo.image} 
                onChange={(e) => setBasicInfo({...basicInfo, image: e.target.value})}
             />
          </div>
        </CardContent>
      </Card>

      {/* 2. BIOGRAPHY */}
      <Card>
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <label className="text-sm text-zinc-500">
              Enter the full biography here. Use <strong>double enter</strong> to create new paragraphs.
            </label>
            <Textarea 
              className="min-h-[200px] text-base leading-relaxed p-4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Start typing biography..."
            />
          </div>
        </CardContent>
      </Card>

      {/* 3. EDUCATION HISTORY (NEW) */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-green-600" />
            Education History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 items-start md:items-end p-4 bg-zinc-50 rounded-lg border border-zinc-100 group relative">
               
               {/* Degree */}
               <div className="w-full md:w-5/12 space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Degree</label>
                  <Input 
                    placeholder="e.g. PhD in Electrical Engineering" 
                    value={edu.degree}
                    onChange={(e) => handleEduChange(idx, 'degree', e.target.value)}
                    className="bg-white"
                  />
               </div>

               {/* Institution */}
               <div className="w-full md:w-5/12 space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Institution</label>
                  <Input 
                    placeholder="e.g. MIT" 
                    value={edu.institution}
                    onChange={(e) => handleEduChange(idx, 'institution', e.target.value)}
                    className="bg-white"
                  />
               </div>

               {/* Year */}
               <div className="w-full md:w-2/12 space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Year</label>
                  <Input 
                    placeholder="2008" 
                    value={edu.year}
                    onChange={(e) => handleEduChange(idx, 'year', e.target.value)}
                    className="bg-white"
                  />
               </div>

               {/* Delete Button */}
               <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeEducation(idx)}
                className="text-zinc-400 hover:text-red-500 hover:bg-red-50 md:mb-0.5"
               >
                 <Trash2 className="h-4 w-4" />
               </Button>
            </div>
          ))}

          <Button variant="outline" onClick={addEducation} className="w-full border-dashed text-zinc-500 hover:text-green-700 hover:border-green-200">
            <Plus className="mr-2 h-4 w-4" /> Add Education
          </Button>
        </CardContent>
      </Card>

      {/* 4. HONORS & AWARDS (NEW) */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-green-600" />
            Honors & Awards
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {awards.map((award, idx) => (
            <div key={idx} className="flex gap-4 items-end">
               {/* Title */}
               <div className="flex-grow space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Award Title</label>
                  <Input 
                    placeholder="e.g. IEEE Medal for Environmental Excellence" 
                    value={award.title}
                    onChange={(e) => handleAwardChange(idx, 'title', e.target.value)}
                  />
               </div>

               {/* Year */}
               <div className="w-24 space-y-2 shrink-0">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Year</label>
                  <Input 
                    placeholder="2022" 
                    value={award.year}
                    onChange={(e) => handleAwardChange(idx, 'year', e.target.value)}
                  />
               </div>

               {/* Delete Button */}
               <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeAward(idx)}
                className="text-zinc-400 hover:text-red-500 hover:bg-red-50 mb-0.5"
               >
                 <Trash2 className="h-4 w-4" />
               </Button>
            </div>
          ))}

          <Button variant="outline" onClick={addAward} className="w-full border-dashed text-zinc-500 hover:text-green-700 hover:border-green-200">
            <Plus className="mr-2 h-4 w-4" /> Add Award
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}