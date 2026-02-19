-- Run this SQL in your Supabase project's SQL Editor
-- Go to: https://app.supabase.com → Your Project → SQL Editor

-- Create contacts table for form submissions
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Only allow authenticated users to read (for you to view submissions)
CREATE POLICY "Allow authenticated reads" ON contacts
  FOR SELECT
  USING (auth.role() = 'authenticated');
