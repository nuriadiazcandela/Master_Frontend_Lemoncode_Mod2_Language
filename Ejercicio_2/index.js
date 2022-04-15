const arr1 = ['uno', 'dos', 'tres'];
const arr2 = ['cuatro', 'cinco', 'seis'];
const arr3 = ['siete', 'ocho'];

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {
  return [...a, ...b];
};
console.log(concat(arr1, arr2));

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const concat2 = (...arg) => arg.reduce((acc, val) => [...acc, ...val], []);
console.log(concat2(arr1, arr2, arr3));
