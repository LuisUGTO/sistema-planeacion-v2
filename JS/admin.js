// JS/admin.js
async function cargarMunicipios() {
    const tabla = document.getElementById('tabla-municipios');
    
    try {
        // Usamos 'db' en lugar de 'supabase'
        const { data, error } = await db
            .from('cat_municipios')
            .select('*')
            .order('id_municipio', { ascending: true });

        if (error) throw error;

        tabla.innerHTML = '';

        data.forEach(muni => {
            tabla.innerHTML += `
                <tr>
                    <td>${muni.id_municipio}</td>
                    <td>${muni.municipio}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error("Error detectado:", error.message);
        tabla.innerHTML = `<tr><td colspan="2" style="color: red;">Error al cargar datos. Revisa la consola.</td></tr>`;
    }
}

document.addEventListener('DOMContentLoaded', cargarMunicipios);