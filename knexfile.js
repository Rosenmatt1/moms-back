module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reminders_db2'
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
  

};
