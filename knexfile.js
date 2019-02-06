module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/reminders_db2'
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
  

};
