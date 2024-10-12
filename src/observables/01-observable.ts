import { Observable, Observer, Subscriber } from 'rxjs';

/** 01 - Declaración de un observable */

/**
 * Objeto observable que va a emitir strings. 
 * El método next() emite el valor pasado por parámetro a los subscribers
 */
const obs$ = new Observable<string>(subscriber => { // subs -> subscriber
    subscriber.next('Hola'); 
    subscriber.next('Mundo');
    // forceError(subs);
    subscriber.complete();
});

// Subscripción al observable
obs$.subscribe({
    next: value => console.log('next: ', value),
    error: error => console.warn('error:', error),
    complete: () => console.log('complete') 
});

// Otra forma de hacer la subscripción
const observer: Observer<any>= {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}
obs$.subscribe(observer);

/**
 * Función para forzar un error
 * @param subs 
 */
function forceError(subscriber: Subscriber<string>){
    const a = undefined;
    a.name = 'Antonio';
    subscriber.next(a);
}