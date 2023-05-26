import PropTypes from 'prop-types';
 
// export const FirstApp = () => {
//     return(
//         <div>
//             <h2>Monky Bebé</h2>
//             <p>guapito</p>
//         </div>
//      );
// }

// import { Fragment } from "react";

// export const FirstApp = () => {
//     return(
//         <Fragment>
//             <h2>Monky Bebé</h2>
//             <p>guapito</p>
//         </Fragment>
//      );
// }

//const newMessage = [1,2,3,4,5,6,7,8,9];
const newMessage = {
    message: 'holi',
    title: 'Ursula'
};

const mensajeFuncion = () => {
    return (
        'monkitos como tu'
    );
};

// export const FirstApp = ( props ) => {

 export const FirstApp = ( {
     title, 
     subTitle = 'La tierra explota!',
     name
 } ) => {
// console.log( props );

    if ( !title ) {
        throw new Error('El title no existe');
    }

    return(
        <>
            {/* <h1>{ mensajeFuncion() }</h1>  */}
            {/* <h1> { title } </h1> */}
            <h1 data-testid="test-title">{ title }</h1>
            <h2>Monky Bebé { 1+1 }  </h2>
            <p>guapito </p>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
            {/* <code>{ JSON.stringify( newMessage )}</code> */}
        </>
     );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Ursula Palacios'
}