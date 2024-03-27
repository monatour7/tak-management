const { Pool } = require('pg');

const pool = new Pool({
  user: 'nodedb2',
  host: 'localhost',
  database: 'nodedb2',
  password: 'root',
  port: 5434,
});

async function query(text, params) {
  try {
    const result = await pool.query(text, params);
    return result.rows;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
}

module.exports = {
  query,
};
