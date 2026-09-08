// JS/admin.js

async function cargarMunicipios() {
    const tabla = document.getElementById('tabla-municipios');
    
    // Ponemos un mensaje visual de carga
    tabla.innerHTML = '<tr><td colspan="2">Conectando con Supabase...</td></tr>';
    
    try {
        // Consultamos la tabla usando la variable 'db'
        const { data, error } = await db
            .from('cat_municipios')
            .select('*');

        if (error) throw error;

        // Limpiamos la tabla
        tabla.innerHTML = '';

        if (!data || data.length === 0) {
            tabla.innerHTML = '<tr><td colspan="2">La tabla está vacía.</td></tr>';
            return;
        }

        // Recorremos los municipios y los pintamos en el HTML
        data.forEach(muni => {
            // Nota: Usamos id_municipio y municipio (ajusta si tus columnas se llaman distinto)
            tabla.innerHTML += `
                <tr>
                    <td>${muni.id_municipio ?? muni.id}</td>
                    <td>${muni.municipio ?? muni.nombre}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error("Error detallado:", error.message);
        tabla.innerHTML = `<tr><td colspan="2" style="color: red;">Error al cargar: ${error.message}</td></tr>`;
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarMunicipios);