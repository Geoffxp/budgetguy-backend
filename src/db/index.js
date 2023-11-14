import "dotenv/config.js"
import mysql from 'mysql2'
const { MYSQL_PASSWORD, MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE } = process.env

export const pool = mysql.createPool({
  connectionLimit : 5, 
  host            : MYSQL_HOST,
  user            : MYSQL_USER,
  password        : MYSQL_PASSWORD,
  port            : 3306,
  database        : MYSQL_DATABASE
})

export const query = async (queryString, args) => {
  const result = await new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      con.query(queryString, args, (err, rows) => {
        con.release()
        if (err) {
          console.error(err)
          return reject(err)
        }
        return resolve(rows)
      })
    })
  })
  return result
}