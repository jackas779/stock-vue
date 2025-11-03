import pg from 'pg';

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'stock',
  password: '123456789',
  port: "5432",
}

const pool = new pg.Pool(dbConfig)

// Opcional: Manejo de errores globales para el Pool
pool.on('error', (err, client) => {
  console.error('Error inesperado en el Pool de BD', err);
  // No hay pool.end() aquí, ya que el pool debe permanecer abierto
});


export default pool;