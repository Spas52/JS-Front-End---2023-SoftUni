function registerForHeroes(info) {
    let heroes = [];
    for (el of info) {
        let hero = el.split('/');
        let name = hero[0];
        let level = parseInt(hero[1]);
        let items = hero[2];
        hero = {
            name: name,
            level: level,
            items
        }
        heroes.push(hero)

    }
    heroes.sort(function (a, b) {
        return a.level - b.level;
    });
    heroes.forEach(function (hero) {
        console.log(`Hero: ${hero.name.trim()}\nlevel => ${hero.level}\nitems => ${hero.items.split(',').map(item => item.trim()).join(', ')}`);
    });
}

registerForHeroes([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])