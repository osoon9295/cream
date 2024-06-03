import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxbmuvbfvubkzdpogcyk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Ym11dmJmdnVia3pkcG9nY3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjU5NjcsImV4cCI6MjAzMjc0MTk2N30.m3GaJW2heYXWjt20qKX7VNhysJk7qM9vaahJcV1AI80 '; //import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
