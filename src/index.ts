import express from 'express';
import cors from 'cors';
import { connectionDb } from './database/conection';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (request, response) => {
  console.log('Requisição recebida'); // Log de quando a requisição chega
  try {
    console.log('Conectando ao banco de dados...'); // Log antes da consulta
    const result = await connectionDb('paciente').select('*');
    console.log('Consulta bem-sucedida'); // Log após a consulta ser realizada
    response.status(200).json(result);
  } catch (error) {
    console.error('Erro ao consultar banco de dados:', error); // Log do erro
    response.status(500).json({ message: 'Erro ao acessar o banco de dados' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});