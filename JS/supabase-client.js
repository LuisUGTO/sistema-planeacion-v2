// js/supabase-client.js

// 1. URL del proyecto y Llave Pública (Anon/Publishable key)
const supabaseUrl = 'https://pcrukixlooulranpzpsm.supabase.co';
const supabaseKey = 'sb_publishable_rpAqa2vKCUrtyg3Ay1aXvg_Xf6Ja_qp';

// 2. Inicializamos la conexión
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
console.log("Conexión a Supabase inicializada correctamente.");