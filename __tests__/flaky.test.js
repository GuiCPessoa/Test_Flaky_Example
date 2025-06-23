describe('Flaky Test Example', () => {
  test('should sometimes pass and sometimes fail', () => {
    // Gerar um número aleatório entre 0 e 1.
    // Se o número for menor que 0.5, o teste falha.
    // Isso simula um comportamento não determinístico.
    const randomNumber = Math.random();

    console.log(`Generated number: ${randomNumber}`); // Para depuração

    if (randomNumber < 0.5) {
      // Intencionalmente fazer o teste falhar
      expect(true).toBe(false); // Esta asserção sempre falhará
    } else {
      // O teste passará
      expect(true).toBe(true); // Esta asserção sempre passará
    }
  });
});