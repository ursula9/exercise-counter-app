import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from '@testing-library/react';

describe( 'Pruebas en el <CounterApp /> ', ()=> {

    const initialValue = 10;

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={ 10 }/>);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
        render( <CounterApp value={100}/> );
        expect( screen.getByText(-1)).toBeTruthy();
    });

    test('debe de incrementar con el botón +1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText( '+1') );
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('debe de DEcrementar con el botón -1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText( '-1') );
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('debe de funcionar el reset', () => {
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText( '+1') );
        fireEvent.click( screen.getByText( '+1') );
        fireEvent.click( screen.getByText( '+1') );
        // fireEvent.click( screen.getByText( 'Reset' ) );
        // screen.debug();
        //fireEvent.click(screen.getByRole('button', {name: 'btn-reset' }));
        // expect( screen.getByText( 35 ) ).toBeTruthy();
    });

});