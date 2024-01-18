
/**
 * @file Applies emotional damage when an entity is hit with any of the items below.
 * @
 */

EntityEvents.hurt(event => {
    const { entity, source: { actual, player } } = event
    switch (actual && actual.isPlayer() && player && player.getMainHandItem()) {
        case 'kubejs:final_sword':
            entity.setHealth(0)
            break;
        case 'kubejs:final_pickaxe':
            entity.setHealth(0)
            break;
        case 'kubejs:final_axe':
            entity.setHealth(0)
            break;
        case 'kubejs:final_shovel':
            entity.setHealth(0)
            break;
        case 'kubejs:final_hoe':
            entity.setHealth(0)
            break;
        case 'kubejs:final_scythe':
            entity.setHealth(0)
            break;
        case 'kubejs:final_katana':
            entity.setHealth(0)
            break;
        case 'kubejs:final_lance':
            entity.setHealth(0)
            break;
        case 'kubejs:high_entropy_alloy':
            entity.setHealth(0)
            break;
        case 'kubejs:crystal_lance':
            entity.health -= Math.max((entity.getHealth() * 0.05).toFixed(2), 46)
            break;
        default:
            break;
    }
})

/*
console.log(Math.max((entity.getHealth() * 0.05).toFixed(2), 6))
*/