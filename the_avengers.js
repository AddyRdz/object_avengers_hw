// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }

// // 1. Log Iron Man's third ability
// console.log(ironMan.abilities[2]);

// 1. Log all of Iron Man's abilities by looping through the array
// for(let i =0; i < ironMan.abilities.length;i++){
//     console.log(ironMan.abilities[i]);
// }

// 1. Log whether or not Iron Man appeared in `spiderManHomecoming`
// const marvelMovieAppearances = ['ironMan','theHulk','ironManTwo','thor','captainAmerica','theAvengers','ironManThree','thorTwo','captainAmericaTwo','guardiansOfTheGalaxy','avengersTwo','antMan','captainAmericaThree','doctorStrange','guardiansOfTheGalaxyTwo','spiderManHomecoming','thorThree','blackPanther','avengersThree' ];
// const found = marvelMovieAppearances.find(ironMan => 'spiderManHomecoming' > false)
// console.log(found)

// 1. Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed
// 1. Check if jarvis is there by calling on the `jarvisAreYouThere` function
 console.log(ironMan.jarvisAreYouThere());

// ## Assembling other Avengers 

// Create an object for `captainAmerica` such that...

// const captainAmerica = {
//     aliases: 'Captain America',
//     abilities: ['Slowed Aging', 'Accelerated Healing', 'Peak Human Strengh'],
//     phrases: ('i can do this all day')

// }
// console.log(captainAmerica.aliases)
// console.log(captainAmerica.abilities[2]);
// console.log(captainAmerica.phrases);

// 1. The following code logs `Captain America`

// console.log(captainAmerica.aliases)

//     ```javascript
//     console.log(captainAmerica.aliases.superheroName)
//     ```

// 1. The following  code logs `peak human strength`
// console.log(captainAmerica.abilities[2]);
//     ```javascript
//     console.log(captainAmerica.abilities[2])
//     ```

// 1. The following code logs `i can do this all day`
// console.log(captainAmerica.phrases);
//     ```javascript
//     console.log(captainAmerica.sayPhrase()
//     ```

// Create a data structure for `blackWidow` such that... 
// const blackWidow ={
//     regularName: 'Natalia Alianovna Romanova',
//     aliases: ['Nat', 'Natalie Rushman'],
// }
    // console.log(blackWidow.regularName);
    // console.log(blackWidow.aliases[1]);
// 1. The following code logs `Natalia Alianovna Romanova` 
    
//     ```javascript
//     console.log(blackWidow.aliases.realName)
//     ```
    // console.log(blackWidow.regularName);
// 1. The following code logs `Natalie Rushman` 
    // console.log(blackWidow.aliases[1]);
//      ```javascript
//     console.log(blackWidow.aliases.otherNotableAliases[1])
//     ```

// ## Avengers Nested 

// Given the following array, loop through it and log just their name. 

// ```javascript
// const theAvengers = [
//   { name: 'Tony Stark', superheroName: 'Iron Man'},
//   { name: 'Steve Rogers', superheroName: 'Captain America' },
//   { name: 'Bruce Banner', superheroName: 'The Hulk'},
//   { name: 'Thor' },
//   { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//   { name: 'Clint Barton', superheroName: 'Hawkeye' }
// ]
// // ```
// for(let i = 0; i < theAvengers; i++){
//     console.log(theAvengers[i]);
// }
// ## MCU Movies 

// Given the following array of arrays, use two loops to loop over each inner array and list all the mcu movies.

// ```javascript
// const mcuMovies = [
//   ['ant-man', 'ant-man and the wasp'],
//   ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
//   ['black panther'],
//   ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
//   ['doctor strange'],
//   ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
//   ['the hulk'],
//   ['iron man', 'iron man 2', 'iron man 3'],
//   ['spiderman: homecoming'],
//   ['thor', 'thor: the dark world', 'thor: ragnarok']
// ]
// ```

// ## Other Objects - Instruments 

// Switching gears, let's look at some instrument data! 

// ```javascript 
// const instruments = {
//   banjo: ["1920 gibson", "deering", "washburn"],
//   guitar: {
//     acoustic: ["martin", "taylor", "santa cruz", "gibson"],
//     electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
//     nylon: ["baldwin", "cordoba"]
//   },
//   mandolin: ["eastman", "weber", "collings"]
// }
//     console.log(instruments.electric[0]);
// ```
 
// Given the above object...

// 1.  Log all of the following: 

//     - `telecaster`
   
//     - `santa cruz`
//     - `washburn`
//     - `weber`

// 1. Loop through all the _electric_ guitars and log them

// 1. Add a `vocals` property to the object that includes a list of your favorite singers 

// ## Hungry For More? - Garmonbozia 

// In early 2017, digital archaeologists discovered a strangest, nonsensical combined data structure. Like in Raiders of the Lost Ark, they refused to look at it directly for fear of melting their faces off.

// They called it "Garmonbozia" after the Twin Peaks substance that represents suffering. That substance is creamed corn.

// Your mission is to console.log 'creamed corn' from deep within the bizarre structure:

// ```javascript
// const garmonbozia = {
//   meltedFace: true,
//   wobblyArms: true,
//   mysteryMeats: [
//     'Schlimmbinooks',
//     'blangs',
//     { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
//     { type: 'Yuck-tops', deliverables: [
//       'Nevermind',
//       { zone: 'safety-zone' },
//       { zone: false, true: true },
//       () => {
//         return () => {
//           return () => {
//             return () => {
//               return () => {
//                 return { website: 'Gossipcop.com', what: {
//                   offering: 'creamed corn', location: 'dark'
//                 }
//                 }
//               }
//             }
//           }
//         }
//       }
//      ]
//     }
//   ]
// }

// ```

// ## Hungry for More? - Modeling Wakanda 

// 1. Model census data for Wakanda, for example, total number of inhabitants, schools, parks, residents, and make up addresses for whatever necessary. 

// It's up to you how you model this data and what data structures you use, there's no 'right' answer, but try and think about what makes the most sense to you. Should it all be inside one object or split it into many objects? Try and list all the pross and cons you can think of for using one object versus creating some normalization by splitting it into many objects. 

// ## Hungry for More? - Extra  

// 1. Practice your HTML and CSS by trying to recreate the [google homepage](https://www.google.com/)
//     - Try recreating the [search view](https://www.google.com/search?ei=htwXXNXTKs6C_wSxm6rgBA&q=hello+world&oq=hello+world) as well! 
// 1. Sign up for [CodeWars](https://www.codewars.com/) or [HackerRank](https://www.hackerrank.com/) if you haven't already and try out some javascript challenges there! 

// ---

// *Copyright 2021, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
