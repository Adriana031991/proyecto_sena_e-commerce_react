
/**
 * 
 * @param {*} promise 
 * @returns 
 * Esta es una forma de obtener data, utilizando fetch. 
 * donde la idea es que la funcion fetchData sin utilizar async ni await devuelva lo que retorne la funcion fetSuspended en su metodo read.
 * metodo tomado de https://www.youtube.com/watch?v=6u1RHUoXIPI&t=993s.
 * 
 */

function fetSuspended(promise) {
    let status = "Pending";
    let response;

    //verifica que retorna de la promesa si la respuesta o error y los guarda en las variables
    const suspender = promise.then(
        (res) => {
            status = "Success";
            response = res;
        },
        (error) => {
            status = "Error";
            response = error;
        }
    )

    //segun el status, read devolverá la respuesta que se obtenga
    const read = () => {
        switch (status) {
            case "Pending":
                throw suspender;
            case "Error":
                throw suspender;
            default:
                return response;
        }
    }
    console.log({ read });
    return { read }
}

export function fetchData(url) {
    const promise = fetch(url)
        // .then((response) => response.json())
        .then((data) => data)
    return fetSuspended(promise);
}