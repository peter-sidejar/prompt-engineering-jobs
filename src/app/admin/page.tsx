"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import AdminProtection from "@/components/admin-protection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase";
import { Check, Eye, Trash2, RefreshCw, ArrowDown } from "lucide-react";

interface Job {
  id: string;
  title: string;
  description: string;
  company_name: string;
  company_description?: string;
  company_website?: string;
  location_city: string;
  location_state: string;
  location_country: string;
  employment_type: string;
  salary_min?: number;
  salary_max?: number;
  salary_currency: string;
  salary_period: string;
  requirements: string[];
  benefits: string[];
  category: string;
  remote: boolean;
  experience_level: string;
  apply_url?: string;
  apply_email?: string;
  featured: boolean;
  approved: boolean;
  created_at: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "featured">("pending");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchJobs = useCallback(async () => {
    if (!mounted) return;
    
    setLoading(true);
    try {
      let query = supabase.from('jobs').select('*').order('created_at', { ascending: false });
      
      if (filter === "pending") {
        query = query.eq('approved', false);
      } else if (filter === "approved") {
        query = query.eq('approved', true);
      } else if (filter === "featured") {
        query = query.eq('featured', true);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  }, [filter, mounted]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleApprove = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .update({ 
          approved: true,
          published_at: new Date().toISOString()
        })
        .eq('id', jobId);
      
      if (error) throw error;
      fetchJobs();
    } catch (error) {
      console.error('Error approving job:', error);
    }
  };

  const handleUnpublish = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .update({ 
          approved: false,
          published_at: null
        })
        .eq('id', jobId);
      
      if (error) throw error;
      fetchJobs();
    } catch (error) {
      console.error('Error unpublishing job:', error);
    }
  };

  const handleReject = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', jobId);
      
      if (error) throw error;
      fetchJobs();
    } catch (error) {
      console.error('Error rejecting job:', error);
    }
  };

  const handleToggleFeatured = async (jobId: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .update({ featured: !currentFeatured })
        .eq('id', jobId);
      
      if (error) throw error;
      fetchJobs();
    } catch (error) {
      console.error('Error updating featured status:', error);
    }
  };

  const formatSalary = (min?: number, max?: number, currency = "USD", period = "year") => {
    if (!min && !max) return "Not specified";
    const formatAmount = (amount: number) => `${currency === "USD" ? "$" : currency}${amount.toLocaleString()}`;
    if (min && max) return `${formatAmount(min)} - ${formatAmount(max)}/${period}`;
    if (min) return `${formatAmount(min)}+/${period}`;
    if (max) return `Up to ${formatAmount(max)}/${period}`;
    return "Not specified";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <AdminProtection>
      <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage job submissions and approvals
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="search" className="mb-2 block">Search Jobs</Label>
          <Input
            id="search"
            placeholder="Search by title, company, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="min-w-[200px]">
          <Label htmlFor="filter" className="mb-2 block">Filter</Label>
          <Select value={filter} onValueChange={(value: "all" | "pending" | "approved" | "featured") => setFilter(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              <SelectItem value="pending">Pending Approval</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button onClick={fetchJobs} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-neutral-2 p-4 rounded-lg">
          <div className="text-2xl font-bold text-foreground">{jobs.filter(j => !j.approved).length}</div>
          <div className="text-sm text-muted-foreground">Pending Approval</div>
        </div>
        <div className="bg-neutral-2 p-4 rounded-lg">
          <div className="text-2xl font-bold text-foreground">{jobs.filter(j => j.approved).length}</div>
          <div className="text-sm text-muted-foreground">Approved</div>
        </div>
        <div className="bg-neutral-2 p-4 rounded-lg">
          <div className="text-2xl font-bold text-foreground">{jobs.filter(j => j.featured).length}</div>
          <div className="text-sm text-muted-foreground">Featured</div>
        </div>
        <div className="bg-neutral-2 p-4 rounded-lg">
          <div className="text-2xl font-bold text-foreground">{jobs.length}</div>
          <div className="text-sm text-muted-foreground">Total Jobs</div>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-background border rounded-lg overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading jobs...</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No jobs found
                  </TableCell>
                </TableRow>
              ) : (
                filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold">{job.title}</div>
                        <div className="text-sm text-muted-foreground">{job.experience_level}</div>
                      </div>
                    </TableCell>
                    <TableCell>{job.company_name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{job.category}</Badge>
                    </TableCell>
                    <TableCell>
                      {job.remote ? "Remote" : `${job.location_city}, ${job.location_state}`}
                    </TableCell>
                    <TableCell className="text-sm">
                      {formatSalary(job.salary_min, job.salary_max, job.salary_currency, job.salary_period)}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {job.approved ? (
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            Approved
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            Pending
                          </Badge>
                        )}
                        {job.featured && (
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {formatDate(job.created_at)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-1 justify-end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedJob(job)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{selectedJob?.title}</DialogTitle>
                              <DialogDescription>{selectedJob?.company_name}</DialogDescription>
                            </DialogHeader>
                            {selectedJob && (
                              <div className="space-y-6">
                                <div>
                                  <h3 className="font-semibold mb-2">Job Details</h3>
                                  <div className="bg-neutral-2 p-4 rounded">
                                    <p className="whitespace-pre-wrap">{selectedJob.description}</p>
                                  </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h3 className="font-semibold mb-2">Requirements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                      {selectedJob.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h3 className="font-semibold mb-2">Benefits</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                      {selectedJob.benefits.map((benefit, idx) => (
                                        <li key={idx}>{benefit}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">Application</h3>
                                  <div className="space-y-2 text-sm">
                                    {selectedJob.apply_url && (
                                      <p><strong>URL:</strong> <a href={selectedJob.apply_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{selectedJob.apply_url}</a></p>
                                    )}
                                    {selectedJob.apply_email && (
                                      <p><strong>Email:</strong> <a href={`mailto:${selectedJob.apply_email}`} className="text-blue-600 hover:underline">{selectedJob.apply_email}</a></p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>

                        {!job.approved ? (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleApprove(job.id)}
                            className="text-green-600 hover:text-green-700"
                            title="Approve job"
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleUnpublish(job.id)}
                            className="text-orange-600 hover:text-orange-700"
                            title="Unpublish job"
                          >
                            <ArrowDown className="w-4 h-4" />
                          </Button>
                        )}

                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleToggleFeatured(job.id, job.featured)}
                          className={job.featured ? "text-yellow-600" : "text-gray-400"}
                        >
                          ⭐
                        </Button>

                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleReject(job.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>
      </div>
    </AdminProtection>
  );
}