import { Observer, fromEvent } from 'rxjs';

/** 05 - Función frontEvent */

/**
 * La función fromEvent permite crear observables que emiten eventos en base a un event target.
 * En este caso se escuchan todos los eventos del DOM
 */
const obs1$ = fromEvent<MouseEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');


// Objeto que se va a utilizar para las subscripciones
const observer: Observer<MouseEvent | KeyboardEvent>= {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Fin de la secuencia.')
}


// Subscripción a los observables
obs1$.subscribe(observer);
obs2$.subscribe(observer);
