-- =========================================================================
-- 02_CATALOGS.SQL - Tablas de Referencia (Catálogos)
-- =========================================================================

-- 1. Catálogo de Municipios
CREATE TABLE cat_municipios (
    id_municipio SERIAL PRIMARY KEY,
    municipio VARCHAR(100) UNIQUE NOT NULL
);

-- 2. Catálogo de Comunidades (Con sus Zonas de Atención Prioritaria)
CREATE TABLE cat_comunidades (
    id_comunidad SERIAL PRIMARY KEY,
    municipio VARCHAR(100), 
    comunidad VARCHAR(150) NOT NULL,
    zap_nuevo_comienzo BOOLEAN DEFAULT FALSE,
    zap_ssyp BOOLEAN DEFAULT FALSE
);

-- 3. Catálogo de Disciplinas (Relación Padre-Hijo)
CREATE TABLE cat_disciplinas (
    id_disciplina SERIAL PRIMARY KEY,
    disciplina VARCHAR(100) NOT NULL,
    subdisciplina VARCHAR(100),
    tipo_actividad VARCHAR(100),
    proceso_institucional VARCHAR(100)
);

-- 4. Catálogos Simples (Formatos, Espacios, etc.)
CREATE TABLE cat_formatos (
    id_formato SERIAL PRIMARY KEY,
    formato VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE cat_tipo_espacio (
    id_tipo_espacio SERIAL PRIMARY KEY,
    tipo_espacio VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE cat_tipo_asentamiento (
    id_tipo_asentamiento SERIAL PRIMARY KEY,
    tipo_asentamiento VARCHAR(100) UNIQUE NOT NULL
);