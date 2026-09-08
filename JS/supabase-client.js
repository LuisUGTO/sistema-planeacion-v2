// JS/supabase-client.js
const supabaseUrl = 'https://pcrukixlooulranpzpsm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcnVraXhsb291bHJhbnB6cHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4MDA4NjcsImV4cCI6MjEwNDM3Njg2N30.Xf_J2_jPcx8h7XHyGoKLBIbcbIoS5FKku1ycuKs-J74';

const db = window.supabase.createClient(supabaseUrl, supabaseKey);