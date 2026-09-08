// JS/admin.js

async function cargarMunicipios() {
    const tabla = document.getElementById('tabla-municipios');
    
    tabla.innerHTML = '<tr><td colspan="2">Conectando con Supabase...</td></tr>';
    
    try {
        const { data, error } = await db
            .from('cat_municipios')
            .select('*')
            .order('id_municipio', { ascending: true });

        if (error) throw error;

        tabla.innerHTML = '';

        if (!data || data.length === 0) {
            tabla.innerHTML = '<tr><td colspan="2">No se encontraron registros en la tabla.</td></tr>';
            return;
        }

        // Recorremos los municipios usando los nombres exactos de tus columnas
        data.forEach(muni => {
            tabla.innerHTML += `
                <tr>
                    <td>${muni.id_municipio}</td>
                    <td>${muni.municipio}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error("Error detallado:", error.message);
        tabla.innerHTML = `<tr><td colspan="2" style="color: red;">Error al cargar: ${error.message}</td></tr>`;
    }
}

document.addEventListener('DOMContentLoaded', cargarMunicipios);