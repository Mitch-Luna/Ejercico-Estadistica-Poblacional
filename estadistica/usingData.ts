import { object } from './data';

class Journal {



    Mostrar() {
        console.log(`\n\n`, "----***ARREGLO ORIGINAL***----", `\n\n`)
        object.resultados.forEach(objetos => {
            console.log(objetos)
        });

        {
            console.log(`\n\n`, "------ELEMENTOS ORDENADOS ALFABETICAMENTE-----", `\n\n`);
            for (var i = 0; i < object.resultados.length; i++) {
                object.resultados.sort((a, b) =>
                    a.name.localeCompare(b.name)),
                    console.log(object.resultados[i]);
            }
        }
        {
            console.log(`\n\n`, "----CUIDAD CON MAYOR POBLACIÓN----- ", `\n`)
            const resultadosOrdenado = object.resultados.sort((a, b) => {
                return Number(b[2022]) - Number(a[2022])
            })

            console.log(' La ciudad con mayor población es: ', resultadosOrdenado[0], `\n\n`)
        }
        {
            console.log(`\n\n`, "----CUIDAD CON MENOR POBLACIÓN----- ", `\n`)
            const resultadosOrdenado = object.resultados.sort((a, b) => {
                return Number(a[2022]) - Number(b[2022])
            })

            console.log(' La ciudad con menor población es: ', resultadosOrdenado[0])
        }
        {
            console.log(`\n\n`, "------ELEMENTOS ORDENADOS ASCENDENTEMENTE-----", `\n\n`);
            for (var i = 0; i < object.resultados.length; i++) {
                object.resultados.sort((a, b) =>
                    b[2022] - a[2022]);
                console.log(object.resultados[i]);
            }
        }


    }


}



export {
    Journal
}





