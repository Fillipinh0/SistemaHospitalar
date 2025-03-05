import { knex } from 'knex';

export const connectionDb = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '*Flor8520',
    database: 'hospital'
  }
});

// Testar a conexão
connectionDb.raw('SELECT 1')
  .then(() => {
    console.log('Conexão bem-sucedida!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
