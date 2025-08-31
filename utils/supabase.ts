// src/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Your Supabase project URL
const supabaseUrl = 'https://mjscghouedoubnuedaig.supabase.co'

// Your public anon key (safe to use in frontend)
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qc2NnaG91ZWRvdWJudWVkYWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1ODMxNzgsImV4cCI6MjA3MjE1OTE3OH0.RzoQWOG6PIXcz9nu0oZlvMpt4DRRwCxyFqXvXolLsWA'

// Create a single Supabase client for your project
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
