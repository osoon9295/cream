import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ifzzsqrbvtphsikwxkms.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmenpzcXJidnRwaHNpa3d4a21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMzc4MzAsImV4cCI6MjAzMjkxMzgzMH0.kWiKh0Qlwtlr4zvN-jsPsItwTEjbDtjtN1OBMmI5jxI';
//import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
