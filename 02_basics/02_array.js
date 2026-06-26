const marvel_heros = ["thor", "ironman", "hulk", "spiderman"];
const dc_heros=["superman", "wonderwoman", "flash"];
marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ankita"))
console.log(Array.from("Ankita"))
console.log(Array.from({name: "Ankita"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));