import { getRoles, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe( 'Pruebas en <FirstApp />', () => {

    // test('debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Goku';
    //     const { container } = render( <FirstApp title={title} /> );

    //     expect( container ).toMatchSnapshot();
        
    // });

    test( 'debe de mostrar el título en un h1', () => {

        const title = 'monkitos como tu';
        const { container, getByText, getByTestId } = render( <FirstApp title={title}/> );

        expect( getByText(title) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });
     
    test('debe de mostrar el subtitulo enviado por props', () =>{
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText, getByText } = render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( getByText(title) ).toBeTruthy();
        expect( getAllByText(subTitle).length ).toBe(2);
    });

});