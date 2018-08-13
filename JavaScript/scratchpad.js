import randomNumber from 'random-number'

let randomItem = (array) => {
    const randomIndex = randomNumber({
        min: 0,
        max: array.length-1,
        integer: true
    }) //?
    return array[randomIndex]
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async const makeDragon = () => {
    await sleep(1000)
    const dragonSizes = ['big', 'medium', 'tiny']
    const dragonAbilities = ['fire', 'ice', 'lighting']
    return randomItem(dragonSizes) + ' ' + randomItem(dragonAbilities) + ' ' + 'dragon'
}
    makeDragon() //?
