-- Create companies table
CREATE TABLE companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  website TEXT,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create jobs table
CREATE TABLE jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  company_name TEXT NOT NULL,
  company_description TEXT,
  company_website TEXT,
  location_city TEXT NOT NULL,
  location_state TEXT NOT NULL,
  location_country TEXT DEFAULT 'United States',
  employment_type TEXT NOT NULL CHECK (employment_type IN ('Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship')),
  salary_min INTEGER,
  salary_max INTEGER,
  salary_currency TEXT DEFAULT 'USD',
  salary_period TEXT DEFAULT 'year' CHECK (salary_period IN ('hour', 'day', 'week', 'month', 'year')),
  requirements TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  category TEXT NOT NULL,
  remote BOOLEAN DEFAULT false,
  experience_level TEXT NOT NULL CHECK (experience_level IN ('Entry-level', 'Mid-level', 'Senior', 'Executive')),
  apply_url TEXT,
  apply_email TEXT,
  featured BOOLEAN DEFAULT false,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  
  -- Constraints
  CONSTRAINT jobs_apply_method CHECK (apply_url IS NOT NULL OR apply_email IS NOT NULL),
  CONSTRAINT jobs_salary_range CHECK (salary_min <= salary_max OR (salary_min IS NULL OR salary_max IS NULL))
);

-- Create indexes for better performance
CREATE INDEX jobs_approved_published_idx ON jobs (approved, published_at DESC) WHERE approved = true;
CREATE INDEX jobs_category_idx ON jobs (category);
CREATE INDEX jobs_location_idx ON jobs (location_city, location_state);
CREATE INDEX jobs_employment_type_idx ON jobs (employment_type);
CREATE INDEX jobs_remote_idx ON jobs (remote);
CREATE INDEX jobs_featured_idx ON jobs (featured) WHERE featured = true;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_jobs_updated_at 
  BEFORE UPDATE ON jobs 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Create policies for jobs table
-- Allow anyone to read approved jobs
CREATE POLICY "Anyone can view approved jobs" ON jobs
  FOR SELECT USING (approved = true);

-- Allow anyone to insert new jobs (they'll be unapproved by default)
CREATE POLICY "Anyone can insert jobs" ON jobs
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can update/delete (for admin features)
CREATE POLICY "Only authenticated users can update jobs" ON jobs
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete jobs" ON jobs
  FOR DELETE USING (auth.role() = 'authenticated');

-- Companies policies
CREATE POLICY "Anyone can view companies" ON companies
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert companies" ON companies
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Only authenticated users can update companies" ON companies
  FOR UPDATE USING (auth.role() = 'authenticated');