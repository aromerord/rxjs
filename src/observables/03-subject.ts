import { Observable, Observer, Subject, Subscription } from 'rxjs';

/** 03 - Observable Subject */

// Objeto observable que emite números aleatorios
const interval$ = new Observable<number>(subs =>{
    const nums = setInterval(()=> subs.next(Math.random()), 4000);
    return () => { // Este método se ejecuta al cancelar la subscripción
        console.log('Intervalo destruido');
        clearInterval(nums);
    } 
});


// Subscripciones al observable. Se observa que en cada subscripción los valores emitidos son diferentes 
const subs1: Subscription = interval$.subscribe(res => console.log('subs 1: ', res));
const subs2: Subscription = interval$.subscribe(res => console.log('subs 2: ', res));


/**
 * Un Subject es un tipo especial de observable que:
 * 1 - Permite el casteo múltiple. Envía la misma información a todos sus subscriptores.
 * 2 - También es un observer. Se puede enviar como argumento al subscribe.
 * 3 - Permite manejar el next, error y complete.
 */
const subject$ = new Subject<number>();


// Subscripción al interval$ utilizando el Subject
const subs3: Subscription = interval$.subscribe(subject$); 


// Subscripción al subject$. Se observa que en cada subscripción los valores son iguales
const subs4: Subscription = subject$.subscribe(res => console.log('subs 3: ', res)); 
const subs5: Subscription = subject$.subscribe(res => console.log('subs 4: ', res));


// El Subject también es un observable. Subs3 y subs4 ahora emiten el valor 10
setTimeout(() => {
    subject$.next(10); 
    subject$.complete();

    // Cancelación de las subscripciones al interval$
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

}, 3500);


