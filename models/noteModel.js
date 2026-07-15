const pool = require('../db');

const noteModel = {
    getAllNotes: async () => {
        let sql = 'select * from notes';

        const [rows] = await pool.execute(sql);

        return rows;
    },
    createNote: async (title, description, tag) => {
        let sql = 'insert into notes (title, description, tag) values (?, ?, ?)';

        const [result] = await pool.execute(sql, [title, description, tag]);

        return result;
    },
    getNoteById: async (id) => {
        let sql = `select * from notes where id= ?`;

        const [rows] = await pool.execute(sql, [id]);

        return rows[0];
    },
    updateNote: async (id, title, description, tag) => {
        let sql = `update notes set`;

        const fields = [];
        const values = [];

        if (title) {
            fields.push('title = ?');
            values.push(title);
        }

        if (description) {
            fields.push('description = ?');
            values.push(description);
        }

        if (tag) {
            fields.push('tag = ?');
            values.push(tag);
        }

        sql += ` ${fields.join(', ')} where id = ?`;
        values.push(id);

        const [result] = await pool.execute(sql, values);

        return result;
    },
    deleteNote: async (id) => {
        let sql = 'delete from notes where id = ?';

        const [result] = await pool.execute(sql, [id]);

        return result;
    }
}

module.exports = noteModel;