import request from 'supertest';
import app from '../../../src/app';
import truncate from '../../util/truncate';

describe('-----------  User  --------------', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Deve ser possivel fazer um cadastro', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'kleyson',
        email: 'kleyoncastro99@gmail.com',
        password_hash: '12345',
      });
    expect(response.body).toHaveProperty('id');
  });

  it('Não pode ser possivel cadastral email duplicado', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'kleyson',
        email: 'kleyoncastro99@gmail.com',
        password_hash: '12345',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'kleyson',
        email: 'kleyoncastro99@gmail.com',
        password_hash: '54321',
      });

    expect(response.status).toBe(400);
  });
});
