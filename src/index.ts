// Las importaciones directas de rxjs son funciones para crear observables o algún tipo de tipado para observables
import { Observer, interval, timer } from 'rxjs';  

/** 06 - Funciones interval y timer */

// Objeto que se va a utilizar para las subscripciones
const observer: Observer<number>= {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Fin de la secuencia.')
}

/**
 * La función interval permite crear observables que emiten una sencuencia de números en un 
 * intervalo de tiempo especificado. Es asíncrona.
 */
const obs$ = interval(5000); // 5s

// Subscripción al observable
// obs$.subscribe(observer);


/**
 * La función timer emite un valor después de un tiempo especifico, completandose la secuencia después.
 */
const obs2$ = timer(1000); 

// Subscripción al observable
obs2$.subscribe(observer); 



