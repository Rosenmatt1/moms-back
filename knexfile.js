module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/howlr'
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
  

};
