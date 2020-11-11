const randomString = require('../index');

describe('Probar funcionalidades', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof (randomString())).toBe('string')
  })
  test('Comprobar que no existe esta ciudad', () => {
    expect(randomString()).not.toBe(/Cordoba/)
  })
})
