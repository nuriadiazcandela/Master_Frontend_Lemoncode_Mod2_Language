// 1. Array operations
const arr = ['pizza', 'paella', 'hamburguesa', 'sopa', 'pasta', 'verduras'];

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([first]) => first;
console.log(head(arr));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...others]) => others;
console.log(tail(arr));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => arr.slice(0, -1);
console.log(init(arr));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arr) => arr.slice(-1);
console.log(last(arr));
