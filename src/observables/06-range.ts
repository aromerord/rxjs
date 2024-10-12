import { Observer, of, range } from 'rxjs';

/** 05 - Función range */

/**
 * La función range crea un observable que emite una frecuencia de números en base a un rango.
 * Por defecto es síncrona, pero puede transformar en asíncrona
 */

// Uso del of para mostrar un rango
const obs$ = of(1,2,3,4,5); // Puede ser un problema si el intervalo es largo


// Uso del range para mostrar un rango
const obs2$ = range(1,5); // Emisiones de 1 a 5
const obs3$ = range(5); // Emisiones de 0 a 4


// Objeto que se va a utlizar para las subscripciones
const observer: Observer<number>= {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Fin de la secuencia.')
}


// Subscripción a los observables
obs$.subscribe(observer);
obs2$.subscribe(observer);
obs3$.subscribe(observer);
