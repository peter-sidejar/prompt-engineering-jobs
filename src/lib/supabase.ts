import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string
          title: string
          description: string
          company_name: string
          company_description?: string
          company_website?: string
          location_city: string
          location_state: string
          location_country: string
          employment_type: string
          salary_min?: number
          salary_max?: number
          salary_currency: string
          salary_period: string
          requirements: string[]
          benefits: string[]
          category: string
          remote: boolean
          experience_level: string
          apply_url?: string
          apply_email?: string
          featured: boolean
          approved: boolean
          created_at: string
          updated_at: string
          published_at?: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          company_name: string
          company_description?: string
          company_website?: string
          location_city: string
          location_state: string
          location_country: string
          employment_type: string
          salary_min?: number
          salary_max?: number
          salary_currency?: string
          salary_period?: string
          requirements?: string[]
          benefits?: string[]
          category: string
          remote?: boolean
          experience_level: string
          apply_url?: string
          apply_email?: string
          featured?: boolean
          approved?: boolean
          created_at?: string
          updated_at?: string
          published_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          company_name?: string
          company_description?: string
          company_website?: string
          location_city?: string
          location_state?: string
          location_country?: string
          employment_type?: string
          salary_min?: number
          salary_max?: number
          salary_currency?: string
          salary_period?: string
          requirements?: string[]
          benefits?: string[]
          category?: string
          remote?: boolean
          experience_level?: string
          apply_url?: string
          apply_email?: string
          featured?: boolean
          approved?: boolean
          created_at?: string
          updated_at?: string
          published_at?: string
        }
      }
      companies: {
        Row: {
          id: string
          name: string
          description?: string
          website?: string
          logo_url?: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string
          website?: string
          logo_url?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          website?: string
          logo_url?: string
          created_at?: string
        }
      }
    }
  }
}