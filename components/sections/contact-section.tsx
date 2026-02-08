"use client";

import React from "react";
import { toast } from "sonner";
import { Mail, Lightbulb, AlertCircle } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
// Catatan: Pastikan Anda memiliki komponen Fieldset atau gunakan div biasa jika belum ada
// Jika fieldset.tsx belum ada, ganti <Fieldset> dengan <fieldset className="border p-4 rounded-md">

export function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-zinc-600">
          Interested in collaboration, joining our team, or learning more about
          our research?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent!", {
                  description: "We will get back to you soon.",
                });
              }}
            >
              {/* Fieldset Wrapper */}
              <fieldset className="space-y-4 border p-4 rounded-md">
                <legend className="text-sm font-semibold px-2">
                  Contact Details
                </legend>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" required placeholder="John Doe" />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Research Interest Select */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Research Interest
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solar">Solar Energy</SelectItem>
                        <SelectItem value="wind">Wind Power</SelectItem>
                        <SelectItem value="storage">Energy Storage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </fieldset>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                  placeholder="Tell us about your inquiry..."
                  required
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label htmlFor="file" className="text-sm font-medium">
                  Attach Document (Optional)
                </label>
                <Input
                  id="file"
                  type="file"
                  className="cursor-pointer pt-1.5" // pt-1.5 agar text file align tengah
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Right Column: Contact Info & Hours */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-zinc-500 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-zinc-600">
                    research@smartgreenenergy.edu
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-zinc-500 mt-0.5" />
                <div>
                  <p className="font-medium">Laboratory</p>
                  <p className="text-sm text-zinc-600">
                    Green Energy Research Center
                    <br />
                    Building 5, 3rd Floor
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900">Office Hours</AlertTitle>
            <AlertDescription className="text-blue-800">
              Monday - Friday: 9:00 AM - 5:00 PM EST
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
