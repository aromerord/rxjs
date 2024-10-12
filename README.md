# RxJs

## Cuándo usar RxJs
- Eventos en la interfaz de usuario.
- Cuando es necesario notificar sobre cambios en un objeto.
- Comunicaciones por sockets.
- Cuando necesitamos trabajar con flujos de información (Streams).

## Observables
- Un observable es una instancia de la clase Observable.
- Son una fuente de información que emite una secuencia de valores en el tiempo.
- Pueden emitir multiples valores, sólo uno o ninguno.
- Pueden emitir errores.
- Pueden ser infinitos o finitos (pueden completarse).
- Pueden ser síncronos o asíncronos.

## Subscribers (también llamados Observers) 
- Se suscriben a un observable, es decir, están pendientes de lo que realiza el observable. 
- Consumen/Observan la data del observable.
- Pueden recibir los errores y eventos del observable.
- Desconocen todo lo que se encuentra detrás del observable.

## Operadores
- Usados para transformar observables (map, group, scan...).
- Usados para filtrar observables (filter, distinct, skip, debounce...).
- Usados para combinar observables.
- Usados para crear nuevos observables. 

## Beneficios de la programación reactiva
- Evitar el Callback Hell.
- Trabajar de forma simple tareas síncronas y asíncronas.
- Uso de operadores para reducir y simplificar el trabajo.
- Es fácil transformar los flujos (streams) de información.
- Código más límpio y fácil de leer.
- Fácil de anexioar procedimientos sin alterar el producto final.

## Levantar el proyecto
- Ejecutar `npm install` para hacer las instalaciones.
- Levantar el proyecto con `npm start` -> `http://localhost:8081/`
- Si es necesario se puede cambiar el puerto en la instrucción `webpack serve --mode development --open --port=8081` del package.json.
