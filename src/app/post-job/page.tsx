"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import BeigeBg from "@/components/beige-bg";
import { supabase } from "@/lib/supabase";

interface JobFormData {
  title: string;
  description: string;
  company_name: string;
  company_description: string;
  company_website: string;
  location_city: string;
  location_state: string;
  location_country: string;
  employment_type: string;
  salary_min: string;
  salary_max: string;
  salary_currency: string;
  salary_period: string;
  requirements: string;
  benefits: string;
  remote: boolean;
  experience_level: string;
  apply_url: string;
  apply_email: string;
}

const initialFormData: JobFormData = {
  title: "",
  description: "",
  company_name: "",
  company_description: "",
  company_website: "",
  location_city: "",
  location_state: "",
  location_country: "United States",
  employment_type: "",
  salary_min: "",
  salary_max: "",
  salary_currency: "USD",
  salary_period: "year",
  requirements: "",
  benefits: "",
  remote: false,
  experience_level: "",
  apply_url: "",
  apply_email: "",
};

export default function PostJobPage() {
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (field: keyof JobFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Convert form data to database format
      const jobData = {
        title: formData.title,
        description: formData.description,
        company_name: formData.company_name,
        company_description: formData.company_description || null,
        company_website: formData.company_website || null,
        location_city: formData.remote ? "Remote" : formData.location_city,
        location_state: formData.remote ? "Remote" : formData.location_state,
        location_country: formData.remote ? "Remote" : formData.location_country,
        employment_type: formData.employment_type,
        salary_min: formData.salary_min ? parseInt(formData.salary_min) : null,
        salary_max: formData.salary_max ? parseInt(formData.salary_max) : null,
        salary_currency: formData.salary_currency,
        salary_period: formData.salary_period,
        requirements: formData.requirements ? formData.requirements.split('\n').filter(r => r.trim()) : [],
        benefits: formData.benefits ? formData.benefits.split('\n').filter(b => b.trim()) : [],
        category: 'AI/ML', // Default category for all jobs
        remote: formData.remote,
        experience_level: formData.experience_level,
        apply_url: formData.apply_url || null,
        apply_email: formData.apply_email || null,
        approved: false, // Jobs need approval by default
        featured: false,
      };

      const { data, error } = await supabase
        .from('jobs')
        .insert([jobData])
        .select();

      if (error) {
        throw error;
      }

      setSubmitStatus({
        type: 'success',
        message: 'Job posted successfully! It will be reviewed and published within 24 hours.'
      });
      setFormData(initialFormData);
      
    } catch (error) {
      console.error('Error submitting job:', error);
      setSubmitStatus({
        type: 'error',
        message: `Failed to submit job: ${error instanceof Error ? error.message : 'Unknown error'}. Please check the console and try again.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full">
      <BeigeBg />
      
      {/* Header section */}
      <div className="container mt-4 md:mt-16 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-beige-12 mb-4">
            Post a Job
          </h1>
          <p className="text-xl text-beige-11 leading-relaxed">
            Connect with top AI talent and prompt engineering professionals. 
            Your job will be reviewed and published within 24 hours.
          </p>
        </div>
      </div>
      
      {/* Form section */}
      <div className="bg-background">
        <div className="container py-16">
          <div className="max-w-2xl mx-auto">
            
            {submitStatus.type && (
              <div className={`p-4 rounded-lg mb-8 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Job Details Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Job Details</h2>
                
                <div>
                  <Label htmlFor="title" className="mb-2 block">Job Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g. Senior Prompt Engineer"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="mb-2 block">Job Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="experience_level" className="mb-2 block">Experience Level *</Label>
                  <Select value={formData.experience_level} onValueChange={(value) => handleInputChange('experience_level', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entry-level">Entry-level</SelectItem>
                      <SelectItem value="Mid-level">Mid-level</SelectItem>
                      <SelectItem value="Senior">Senior</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="employment_type" className="mb-2 block">Employment Type *</Label>
                  <Select value={formData.employment_type} onValueChange={(value) => handleInputChange('employment_type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </section>

              {/* Company Details Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Company Details</h2>
                
                <div>
                  <Label htmlFor="company_name" className="mb-2 block">Company Name *</Label>
                  <Input
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) => handleInputChange('company_name', e.target.value)}
                    placeholder="e.g. OpenAI"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company_description" className="mb-2 block">Company Description</Label>
                  <Textarea
                    id="company_description"
                    value={formData.company_description}
                    onChange={(e) => handleInputChange('company_description', e.target.value)}
                    placeholder="Brief description of your company..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="company_website" className="mb-2 block">Company Website</Label>
                  <Input
                    id="company_website"
                    type="url"
                    value={formData.company_website}
                    onChange={(e) => handleInputChange('company_website', e.target.value)}
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </section>

              {/* Location Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Location</h2>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id="remote"
                    checked={formData.remote}
                    onCheckedChange={(checked) => handleInputChange('remote', !!checked)}
                  />
                  <Label htmlFor="remote" className="mb-2">This is a remote position</Label>
                </div>

                {!formData.remote && (
                  <>
                    <div>
                      <Label htmlFor="location_country" className="mb-2 block">Country *</Label>
                      <Select value={formData.location_country} onValueChange={(value) => handleInputChange('location_country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Germany">Germany</SelectItem>
                          <SelectItem value="France">France</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                          <SelectItem value="Netherlands">Netherlands</SelectItem>
                          <SelectItem value="Sweden">Sweden</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location_city" className="mb-2 block">City *</Label>
                        <Input
                          id="location_city"
                          value={formData.location_city}
                          onChange={(e) => handleInputChange('location_city', e.target.value)}
                          placeholder="e.g. San Francisco"
                          required={!formData.remote}
                        />
                      </div>

                      <div>
                        <Label htmlFor="location_state" className="mb-2 block">State/Province *</Label>
                        <Input
                          id="location_state"
                          value={formData.location_state}
                          onChange={(e) => handleInputChange('location_state', e.target.value)}
                          placeholder="e.g. CA"
                          required={!formData.remote}
                        />
                      </div>
                    </div>
                  </>
                )}
                
                {formData.remote && (
                  <p className="text-muted-foreground text-sm">
                    Location fields are disabled for remote positions.
                  </p>
                )}
              </section>

              {/* Salary Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Compensation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="salary_min" className="mb-2 block">Min Salary</Label>
                    <Input
                      id="salary_min"
                      type="number"
                      value={formData.salary_min}
                      onChange={(e) => handleInputChange('salary_min', e.target.value)}
                      placeholder="80000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="salary_max" className="mb-2 block">Max Salary</Label>
                    <Input
                      id="salary_max"
                      type="number"
                      value={formData.salary_max}
                      onChange={(e) => handleInputChange('salary_max', e.target.value)}
                      placeholder="120000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="salary_currency" className="mb-2 block">Currency</Label>
                    <Select value={formData.salary_currency} onValueChange={(value) => handleInputChange('salary_currency', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="CAD">CAD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="salary_period" className="mb-2 block">Period</Label>
                    <Select value={formData.salary_period} onValueChange={(value) => handleInputChange('salary_period', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hour">Hour</SelectItem>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="week">Week</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              {/* Requirements & Benefits */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Requirements & Benefits</h2>
                
                <div>
                  <Label htmlFor="requirements" className="mb-2 block">Requirements (one per line)</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    placeholder="3+ years of experience with LLMs&#10;Strong understanding of prompt engineering&#10;Python programming skills"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="benefits" className="mb-2 block">Benefits (one per line)</Label>
                  <Textarea
                    id="benefits"
                    value={formData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                    placeholder="Competitive salary&#10;Health insurance&#10;401(k) with company match&#10;Flexible work arrangements"
                    rows={4}
                  />
                </div>
              </section>

              {/* Application Details */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">How to Apply</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Provide either an application URL or email address (or both).
                </p>
                
                <div>
                  <Label htmlFor="apply_url" className="mb-2 block">Application URL</Label>
                  <Input
                    id="apply_url"
                    type="url"
                    value={formData.apply_url}
                    onChange={(e) => handleInputChange('apply_url', e.target.value)}
                    placeholder="https://yourcompany.com/careers/job-123"
                  />
                </div>

                <div>
                  <Label htmlFor="apply_email" className="mb-2 block">Application Email</Label>
                  <Input
                    id="apply_email"
                    type="email"
                    value={formData.apply_email}
                    onChange={(e) => handleInputChange('apply_email', e.target.value)}
                    placeholder="careers@yourcompany.com"
                  />
                </div>
              </section>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Job for Review'}
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Your job posting will be reviewed and published within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}