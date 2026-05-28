const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]


// marvel_heros.push(dc)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

const all_newheros = [...marvel_heros, dc]

console.log(all_newheros)
