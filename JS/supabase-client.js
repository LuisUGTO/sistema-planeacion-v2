// JS/supabase-client.js

const supabaseUrl = 'https://pcrukixlooulranpzpsm.supabase.co';
const supabaseKey = 'sb_publishable_rpAqa2vKCUrtyg3Ay1aXvg_Xf6Ja_qp';

// Inicializamos la conexión global una sola vez
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);