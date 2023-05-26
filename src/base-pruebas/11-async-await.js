

export const getImagen = async() => {

    try {

        const apiKey = 'qAX7v3L09e7pe4p41OJ68q8yMc58OdxF';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;


    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontró la imagen'
    }
    
    
    
}

 getImagen();



