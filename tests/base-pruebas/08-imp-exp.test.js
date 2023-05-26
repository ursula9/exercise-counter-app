import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe( 'Pruebas en 08-imp-exp', () => {
    
    test( 'getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );

        console.log( hero );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC'} );
    });

    test( 'getHeroeById debe de retornar UNDEFINED si un héroe no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );

        console.log( hero );

        expect( hero ).toBeFalsy();
    });

    // Tarea 
    // Debe retornar un arreglo con los héroes de DC
    // lenght === 3
    // lo Equal al arreglo filtrado

    // debe de retornar un arreglo con los hérores de Marvel

    test( 'getHeroesByOwner debe regresar heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

    });

    test( 'getHeroesByOwner debe regresar heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

}); 