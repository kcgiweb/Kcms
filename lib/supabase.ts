import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bsfmqpzuzpmolhhoowhh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZm1xcHp1enBtb2xoaG9vd2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NDM4OTMsImV4cCI6MjA5MjMxOTg5M30.FzTuqwqbp3617b385MGsDYtslX_gHl2eUANYLSqzif8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
