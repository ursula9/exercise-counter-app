import { getSaludo } from '../../src/base-pruebas/02-template-string'


describe( 'Pruebas en 02-template-string', () => {
    return (
        test('getSaludo debe de retornar "Hola Ursula"', () => {
            const name = 'Fernando';
            const message = getSaludo( name );

            expect( message ).toBe(`Hola ${ name }!!!`);
        })
    );

});