import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () =>{

    test('getImagen debe de retornar un error', async() => {

        const resp = await getImagen();
        //console.log(resp);

        expect( resp ).toBe('no se encontro la imagen');

    });

});