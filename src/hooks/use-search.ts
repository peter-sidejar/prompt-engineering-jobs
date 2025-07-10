import { useMemo } from 'react';
import { Job } from '@/features/jobs/types';

export interface SearchFilters {
  query: string;
  category: string;
  location: string;
  jobType: string;
  minSalary?: number;
  maxSalary?: number;
}

export const useSearch = (jobs: Job[], filters: SearchFilters) => {
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Text search across multiple fields
      const searchText = filters.query.toLowerCase();
      const matchesQuery = searchText === '' || 
        job.title.toLowerCase().includes(searchText) ||
        job.company.name.toLowerCase().includes(searchText) ||
        `${job.location.city}, ${job.location.state}`.toLowerCase().includes(searchText) ||
        job.category?.toLowerCase().includes(searchText) ||
        job.description?.toLowerCase().includes(searchText);

      // Category filter
      const matchesCategory = filters.category === '' || filters.category === 'all' || 
        job.category === filters.category;

      // Location filter
      const matchesLocation = filters.location === '' || filters.location === 'all' ||
        `${job.location.city}, ${job.location.state}` === filters.location ||
        job.location.city === filters.location ||
        job.location.state === filters.location;

      // Job type filter
      const matchesJobType = filters.jobType === '' || filters.jobType === 'all' ||
        job.employmentType === filters.jobType;

      // Salary range filter
      const matchesSalary = (!filters.minSalary || job.salary.min >= filters.minSalary) &&
        (!filters.maxSalary || job.salary.max <= filters.maxSalary);

      return matchesQuery && matchesCategory && matchesLocation && matchesJobType && matchesSalary;
    });
  }, [jobs, filters]);

  return filteredJobs;
};

export const getUniqueCategories = (jobs: Job[]): string[] => {
  const categories = jobs
    .map(job => job.category)
    .filter((category): category is string => category !== undefined);
  return [...new Set(categories)];
};

export const getUniqueLocations = (jobs: Job[]): string[] => {
  const locations = jobs.map(job => `${job.location.city}, ${job.location.state}`);
  return [...new Set(locations)];
};

export const getUniqueJobTypes = (jobs: Job[]): string[] => {
  const jobTypes = jobs.map(job => job.employmentType);
  return [...new Set(jobTypes)];
};