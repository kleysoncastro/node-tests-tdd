import request from 'supertest';
import app from '../../../src/app';

describe('-----------  User  --------------', () => {
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
});
