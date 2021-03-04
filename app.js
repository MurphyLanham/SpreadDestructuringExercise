
const mcuShows = ["The Falcon and The Winter Soldier", "Wandavision"]
const starWars = ["The Mandalorian", "The Clone Wars"]
const disneyPlusShows = [...mcuShows, ...starWars, "Muppets Now"]
console.log(disneyPlusShows);
const netfixMovies={
    action: `Extraction`,
    drama: `The Irishman`
}
const disneyPlusMovies={
    musical: `Hamilton`,
    drama: `Togo`
}
const streamingMovies ={
    ...disneyPlusMovies,
    ...netfixMovies,
    comedy: `Shazam`
}
console.log(streamingMovies);
const disneyJunior = ["PJ Masks", "Jake and the Neverland Pirates"]
const [pj, jake] = disneyJunior
console.log(pj, jake);
const avengers = ["Steve Rogers", "Bruce Banner"]
const [captainAmerica, theHulk] = avengers
console.log(avengers);
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`,
}
const {blackWidow:nat, ...others} = moreAvengers
console.log(moreAvengers);