// requires: headhunter_mod
// requires: lootjs
// ignored: false

/**
 * @file Server handler for everything HeadHunter related. Thank you to LiamsLiam for suggesting this mod.
 * 
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author DevDyna <https://github.com/DevDyna> Thank you for leading me in the right direction in the support thread
 * @author LLytho <https://github.com/LLytho> AlmostReliable team member. Thank you for resolving the if statement in the LootJS.modifiers listener ^-^
 */

bossDeathToast('headhunter_mod:head_hunter', 'minecraft:skeleton_skull', red, red, red, 0x001332, darkRed)

LootJS.modifiers(event => {
    event.addEntityLootModifier('headhunter_mod:head_hunter')
        .entityPredicate(entity => {
            if (
                entity.hasCustomName() &&
                entity.getCustomName().getString() == 'HeadHunter EX'
            ) {
                return true
            } else {
                return false
            }
        })
        .addLoot('27x kubejs:unstable_entropy_particles')
})

/*
EntityEvents.death('headhunter_mod:head_hunter', event => {
    if (event.entity.hasCustomName() && event.entity.getDisplayName() == 'HeadHunter EX') {

    } else if (event.entity.hasCustomName() && event.entity.getDisplayName() !== 'HeadHunter EX') {
        return
    }
})
event.entity.getDisplayName()
event.entity.hasCustomName()

if (event.entity.hasCustomName() && event.entity.getDisplayName() == 'name') {

}
*/