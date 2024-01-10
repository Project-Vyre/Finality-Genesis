// requires: grimoireofgaia

ItemEvents.modification(event => {
    let weaponBooks = [
        'weapon_book',
        'weapon_book_freezing',
        'weapon_book_nightmare',
        'weapon_book_metal',
        'weapon_book_ender',
        'weapon_book_hunger',
        'weapon_book_battle',
        'weapon_book_nature',
        'weapon_book_wither'
    ]
    for (let i = 0; i < weaponBooks.length; i++) {
        let book = weaponBooks[i];
        event.modify(`grimoireofgaia:${book}`, item => {
            item.maxDamage = 1024
            item.fireResistant = true
        })
    }
})