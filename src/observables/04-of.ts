import { Observer, of } from 'rxjs';

/** 04 - Función of */

/**
 * La función of emite los valores uno por uno en secuencia síncrona.
 * Tras emitir el último valor, se completa el observable.
 */
const obs$ = of(1,2,3,4,5,6);


// Objeto que se va a utilizar para las subscripción
const observer: Observer<number>= {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Fin de la secuencia.')
}


// Subscripción al observable
obs$.subscribe(observer);

