const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, user) {
  await pool.query(
    'INSERT INTO messages ("text", "user", added) Values ($1, $2, now())',
    [text, user],
  );
}

module.exports = { getAllMessages, insertMessage };
