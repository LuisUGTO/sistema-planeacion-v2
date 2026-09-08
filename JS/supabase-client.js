// JS/supabase-client.js
const supabaseUrl = 'https://pcrukixlooulranpzpsm.supabase.co';
const supabaseKey = 'sb_publishable_rpAqa2vKCUrtyg3Ay1aXvg_Xf6Ja_qp';

// Usamos 'db' para evitar cualquier conflicto de nombres
const db = window.supabase.createClient(supabaseUrl, supabaseKey);