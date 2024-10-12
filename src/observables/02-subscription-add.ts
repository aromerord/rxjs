import { Observable, Subscription } from 'rxjs';

/** 02 - Concatenar subscripciones a un observable */

// Objeto observable que emite un número cada 2.5 segundos
const interval$ = new Observable<number>(subs => {
    let count = 0;
    const counter = setInterval(()=>{
        subs.next(count++);
    }, 1000);

    // En el return se indica el procedimiento a ejecutar cuando se hace el unsubscribe
    return () => {
        clearInterval(counter);
        console.log('Intervalo destruido');
    }
});


// Subscripciones al observable
const subs1: Subscription = interval$.subscribe(res => console.log('num', res));
const subs2: Subscription = interval$.subscribe(res => console.log('num', res));


// Se concatenan las subscripciones para facilitar el unsubscribe
subs1.add(subs2);


// Cancelación de las subscripciones
setTimeout(() => {
    subs1.unsubscribe();
}, 3000);

