describe( 'Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe fallar', () => {


        // 1.- inicialización
        const message1 = 'Hola Mundo';

        // 2.- Estímulo
        const message2 = message1.trim();

        // 3.- Observar el comportamiento ... esperando

        expect( message1 ).toBe( message2 );

        // if( 1 === 0 ){
        //     throw new Error('No puede dividir entre 0');
        // }
        

    });
    
});
