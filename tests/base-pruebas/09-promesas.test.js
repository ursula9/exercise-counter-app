import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe( 'Pruebas en 09-promesas', () => {

    test('getHeroeByAsync debe de retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })

    });

    test('getHeroeByAsync debe de retornar un error si heroe no existe', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {

                console.log(error);
                
                done();
            });
                


    });

});