-- =========================================================================
-- 01_CORE_SCHEMA.SQL - Sistema de Inteligencia Cultural
-- =========================================================================

-- 1. Tabla Principal: Actividades (Cortada hasta la columna BN)
CREATE TABLE registro_actividades (
    id_actividad UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    folio VARCHAR(50) UNIQUE NOT NULL,
    fecha_captura TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Metas y Clasificación Institucional
    clave_proceso VARCHAR(50),
    meta_anual INT,
    nombre_actividad TEXT NOT NULL,
    descripcion_breve TEXT,
    
    -- Fechas y Tiempos
    fecha_inicio DATE,
    fecha_fin DATE,
    total_sesiones INT DEFAULT 1,
    
    -- Catálogos (Estas serán llaves foráneas a tus tablas de catálogos)
    disciplina VARCHAR(100),
    formato VARCHAR(100),
    tipo_espacio VARCHAR(100),
    
    -- Presupuesto e Ingresos
    genera_ingresos BOOLEAN DEFAULT FALSE,
    monto_total_contratado DECIMAL(10,2),
    costo_minimo DECIMAL(10,2),
    costo_maximo DECIMAL(10,2),
    
    -- Columna BN: Límite establecido
    tipo_vinculacion VARCHAR(100),
    
    -- Auditoría
    usuario_registra UUID -- Se enlazará con el sistema de usuarios
);

-- 2. Tabla Hija: Territorio (Cortada hasta la columna L)
CREATE TABLE registro_territorio (
    id_territorio UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_actividad UUID REFERENCES registro_actividades(id_actividad) ON DELETE CASCADE,
    
    municipio VARCHAR(100) NOT NULL,
    tipo_asentamiento VARCHAR(100),
    comunidad VARCHAR(150),
    zap_nuevo_comienzo BOOLEAN DEFAULT FALSE,
    zap_ssyp BOOLEAN DEFAULT FALSE,
    
    -- Columna L: Límite establecido
    cantidad_acceso INT DEFAULT 0
);

-- 3. Tabla Hija: Población (Completa)
CREATE TABLE registro_poblacion (
    id_poblacion UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_actividad UUID REFERENCES registro_actividades(id_actividad) ON DELETE CASCADE,
    
    grupo_etario VARCHAR(100),
    genero VARCHAR(50),
    grupo_prioritario VARCHAR(100),
    cantidad_participacion INT DEFAULT 0,
    cantidad_acceso INT DEFAULT 0,
    cantidad_poblacion INT DEFAULT 0
);

-- 4. Tabla Hija: Evidencias (Completa)
CREATE TABLE registro_evidencia (
    id_evidencia UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_actividad UUID REFERENCES registro_actividades(id_actividad) ON DELETE CASCADE,
    
    archivo_evidencia TEXT NOT NULL, -- Aquí guardaremos la URL del archivo (ej. bucket de Supabase)
    tipo_evidencia VARCHAR(50),
    descripcion TEXT
);