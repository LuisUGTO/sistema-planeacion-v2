// js/admin.js

async function cargarMunicipios() {
    const tabla = document.getElementById('tabla-municipios');
    
    try {
        // Pedimos todos los datos de la tabla cat_municipios ordenados por ID
        const { data, error } = await supabase
            .from('cat_municipios')
            .select('*')
            .order('id_municipio', { ascending: true });

        if (error) throw error;

        // Limpiamos el mensaje de "Cargando..."
        tabla.innerHTML = '';

        // Recorremos los datos que llegaron y armamos las filas HTML
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

// Que la función se ejecute solita al abrir la página
document.addEventListener('DOMContentLoaded', cargarMunicipios);