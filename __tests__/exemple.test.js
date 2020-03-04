function soma(a, b) {
  return a + b;
}

test('Soma de 4 + 4 deve me retornar 8', () => {
  const result = soma(4, 4);

  expect(result).toBe(8);
});
