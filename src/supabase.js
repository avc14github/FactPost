import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xnmygcqxflleajzpwrwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubXlnY3F4ZmxsZWFqenB3cndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDA1NjIsImV4cCI6MjAxNzYxNjU2Mn0.h2xlJPQeCKUjp24mp2Uhe-2aVxpFVh-N5UP5nywAeKk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
