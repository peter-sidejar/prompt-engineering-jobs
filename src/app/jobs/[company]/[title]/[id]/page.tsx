import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BeigeBg from '@/components/beige-bg';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink, MapPin, Clock, DollarSign, Globe } from 'lucide-react';
import { jobs } from '@/features/jobs/hooks/use-jobs';
import { slugify } from '@/lib/url-utils';

interface JobPageProps {
  params: Promise<{
    company: string;
    title: string;
    id: string;
  }>;
}

function getJobByParams(company: string, title: string, id: string) {
  const job = jobs.find(j => j.id === id);
  if (!job) return null;
  
  const companySlug = slugify(job.company.name);
  const titleSlug = slugify(job.title);
  
  if (companySlug !== company || titleSlug !== title) {
    return null;
  }
  
  return job;
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const job = getJobByParams(resolvedParams.company, resolvedParams.title, resolvedParams.id);
  
  if (!job) {
    return {
      title: 'Job Not Found | Prompt Engineering Jobs',
      description: 'The job you are looking for could not be found.'
    };
  }
  
  const currencySymbol = job.salary.currency === 'USD' ? '$' : job.salary.currency;
  
  return {
    title: `${job.title} at ${job.company.name} | Prompt Engineering Jobs`,
    description: `Join ${job.company.name} as a ${job.title} in ${job.location.city}, ${job.location.state}. ${job.employmentType} position offering ${currencySymbol}${job.salary.min}-${currencySymbol}${job.salary.max}/${job.salary.period}. Apply now for this ${job.category} role.`,
    openGraph: {
      title: `${job.title} at ${job.company.name}`,
      description: `${job.employmentType} position in ${job.location.city}, ${job.location.state}. ${currencySymbol}${job.salary.min}-${currencySymbol}${job.salary.max}/${job.salary.period}`,
      type: 'website',
    },
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const resolvedParams = await params;
  const job = getJobByParams(resolvedParams.company, resolvedParams.title, resolvedParams.id);
  
  if (!job) {
    notFound();
  }
  
  const formattedPostedAt = formatDistanceToNow(new Date(job.posted_at), {
    addSuffix: true,
  });
  
  const currencySymbol = job.salary.currency === 'USD' ? '$' : job.salary.currency;
  
  return (
    <div className="w-full h-full">
      <BeigeBg />
      <div className="container mt-4 md:mt-16 flex flex-col gap-8 md:gap-12 pb-16">
        
        {/* Job Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="size-20 md:size-24">
              <AvatarFallback className="text-xl font-semibold">
                {job.company.name[0]}
                {job.company.name[1]}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg font-medium">
                  {job.company.name}
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {job.title}
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  <span>{job.location.city}, {job.location.state}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  <span>{job.employmentType}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="size-4" />
                  <span>{currencySymbol}{job.salary.min}-{currencySymbol}{job.salary.max}/{job.salary.period}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{job.category}</Badge>
                <span className="text-sm text-muted-foreground">Posted {formattedPostedAt}</span>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto">
                <ExternalLink className="size-4 mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Job Content */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            
            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We are seeking a skilled {job.title} to join our growing team at {job.company.name}. 
                    This is an excellent opportunity for a motivated professional to work on exciting projects 
                    in a dynamic environment.
                  </p>
                  <p>
                    As a {job.title}, you will be responsible for executing high-quality work while maintaining 
                    safety standards and collaborating with team members. You&apos;ll have the opportunity to work 
                    on diverse projects and develop your skills in a supportive environment.
                  </p>
                  <p>
                    This {job.employmentType.toLowerCase()} position offers competitive compensation and the 
                    chance to work with industry-leading professionals in {job.location.city}, {job.location.state}.
                  </p>
                  
                  <div className="pt-4">
                    <p className="font-medium text-foreground mb-2">Requirements:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 2+ years of experience in {job.category} work</li>
                      <li>• Valid driver&apos;s license and reliable transportation</li>
                      <li>• Strong attention to detail and safety protocols</li>
                      <li>• Ability to work independently and as part of a team</li>
                      <li>• Physical ability to perform job requirements</li>
                      <li>• Excellent communication and problem-solving skills</li>
                      <li>• Professional appearance and demeanor</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <p className="font-medium text-foreground mb-2">Benefits & Perks:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Competitive hourly rate: {currencySymbol}{job.salary.min}-{currencySymbol}{job.salary.max}/{job.salary.period}</li>
                      <li>• Health insurance coverage</li>
                      <li>• Paid time off and holidays</li>
                      <li>• Professional development opportunities</li>
                      <li>• Company-provided tools and equipment</li>
                      <li>• Performance bonuses</li>
                      <li>• Flexible scheduling options</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Company Info */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarFallback>
                      {job.company.name[0]}
                      {job.company.name[1]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{job.company.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {job.location.city}, {job.location.state}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.company.description || `${job.company.name} is a leading company in the ${job.category} industry, committed to delivering high-quality services and maintaining the highest standards of safety and professionalism.`}
                </p>
                {job.company.website && (
                  <div className="pt-2">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={job.company.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="size-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Employment Type</span>
                  <span className="text-sm text-muted-foreground">{job.employmentType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Category</span>
                  <span className="text-sm text-muted-foreground capitalize">{job.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Location</span>
                  <span className="text-sm text-muted-foreground">{job.location.city}, {job.location.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Salary Range</span>
                  <span className="text-sm text-muted-foreground">
                    {currencySymbol}{job.salary.min}-{currencySymbol}{job.salary.max}/{job.salary.period}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Posted</span>
                  <span className="text-sm text-muted-foreground">{formattedPostedAt}</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Apply Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Ready to join {job.company.name}?
                  </p>
                  <Button size="lg" className="w-full">
                    <ExternalLink className="size-4 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </div>
  );
}