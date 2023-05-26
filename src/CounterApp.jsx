import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    // function handleAdd( event ) { 
    //     console.log(event) 
    // }

    // function handleAdd( event, newValue ) { 
    //     console.log(newValue) 
    // }

    console.log('render');

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { 
    //const handleAdd = ( event, newValue ) => { 
        //console.log(newValue) 
        //setCounter( counter + 1 );
        //setCounter(1000);
        setCounter( (c) => c + 1 );
    };

    const handleMinus = () => {
        setCounter( (c) => c - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }



    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ ( event ) => handleAdd(event, 'hola') }>  +1 </button>
            <button onClick={ ( event ) => handleMinus(event, 'minus')}> -1 </button>
            <button arial-label="btn-reset" onClick={ ( event ) => handleReset(event, 'Reseteado') }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}
