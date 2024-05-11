// priority: 0
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

let hhSpawnItems = [
  'headhunter_mod:hh_vanilla_difficulty',
  'headhunter_mod:hh_hard_difficulty',
  'headhunter_mod:hhv_hard_difficulty',
  'headhunter_mod:hh_true_difficulty'
]

ItemEvents.firstRightClicked(event => {
  for (let i = 0; i < hhSpawnItems.length; i++) {
    let element = hhSpawnItems[i];
    if (event.item.getId() == element) {
      event.player.inventory.clear(hhSpawnItems)
    }
  }
})

LootJS.modifiers(event => {
  event.addEntityLootModifier('headhunter_mod:head_hunter')
    .entityPredicate(entity => {
      if (
        entity.hasCustomName() &&
        entity.getCustomName().getString() === 'HeadHunter EX'
      ) {
        return true
      } else {
        return false
      }
    })
    .randomChance(0.05).addLoot('kubejs:unstable_entropy_particles')
    .randomChanceWithLooting(0.15, 3).addLoot('3x kubejs:unstable_entropy_particles')
  if (Platform.isLoaded('apotheosis')) {
    event.addEntityLootModifier('headhunter_mod:head_hunter')
      .entityPredicate(entity => {
        if (
          entity.hasCustomName() &&
          entity.getCustomName().getString() === 'HeadHunter EX'
        ) {
          return true
        } else {
          return false
        }
      })
      .randomChance(0.10).addLoot(Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"common"}').weakNBT())
  }
})

/**
 * WORK IN PROGRESS! DO NOT UN-IGNORE!
 */

let damageCapping = false

EntityEvents.hurt('headhunter_mod:head_hunter', event => {
  if (!event.source.player) { event.cancel() }

  if (damageCapping) {
    // if damage is not from player, cancel it (this works)
    if (!event.player) { event.cancel() }
    //if (event.entity.hasCustomName() && event.entity.getCustomName().getString() === 'HeadHunter EX' && !event.source.player) { event.cancel() }
    // None of these fire off in log
    if (event.player) {
      console.log('Null check passed')
      if (
        // if player punches with empty hand deal 1 damage via Forge damage override event in startup
        event.entity.hasCustomName() && event.entity.getCustomName().getString() === 'HeadHunter EX' &&
        event.getDamage() > 20 && !event.player.getMainHandItem().getId() === 'kubejs:crystal_lance'
      ) {
        global.onHurtApply1d
        console.log('1 damage')
      } else if (
        // if player is using the crystal lance, deal 5 damage via Forge damage override event in startup
        event.entity.hasCustomName() && event.entity.getCustomName().getString() === 'HeadHunter EX' &&
        event.getDamage() > 20 && event.player.getMainHandItem().getId() === 'kubejs:crystal_lance'
      ) {
        global.onHurtApply5d
        console.log('5 damage')
      }
      // if player is using items tagged final_tools, deal 20 damage via Forge damage override event in startup
      if (event.player.getMainHandItem().hasTag('kubejs:final_tools')) {
        global.onHurtApply20d
        console.log('20 damage')
      }
    }
  }
})

/*
            //event.entity.potionEffects.add('minecraft:regeneration', 10, 2, false, false)
            //event.entity.potionEffects.add('minecraft:resistance', 10, 10, false, false)
*/
/*
{Brain: {
    memories: {}
}, 
HurtByTimestamp: 2522, 
ForgeData: {
    pistolscaleddamage: 1.1d, 
    moveended: 0b, 
    previousmove1: "dodgeback", 
    previousmove3: "dodgeback", 
    previousmove2: "dodgeback", 
    mobpistolscaleddamage: 1.4d, 
    chargecontinuefirstcycle: "yes", 
    slamaftershockmaxhploss: 0.85d, 
    ComboProgress: 5.0d, 
    "apoth.affix_cooldown.apotheosis:sword/mob_effect/weakening": 84047L, 
    pistolsupershottimer: 0.0d, 
    defaultcooldown: 1.0d, 
    loopanimation: 0b, 
    movecooldown: 22.0d, 
    previoushealth: 450.0d, 
    distancefromtargetflat: 0.15040770731181044d, 
    mobslamaftershockscaleddamage: 1.4d, 
    mobpistolmaxhploss: 0.8d, 
    kickknockback: 0.5d, 
    headhuntercurrentmove: "none", 
    previoustickhealth: 450.0d, 
    rotationlockyaw: -49.473758697509766d, 
    movementtimescalled: 1.0d, 
    notmaxhpimmune: 1b, 
    headhunteranimationlock: 0b, 
    timer: 0.0d, 
    headhunterdifficulty: "true", 
    pistolmaxhploss: 0.9d, 
    alliedteam: "headhunter", 
    truedefaultcooldown: 0.8d, 
    followuplowhp: 1b, 
    chargefinisherzcoord: -0.8094665905412484d, 
    chargefinisheryes: "false", 
    upperrangedesireddistance: 17.0d, 
    changetargetlikeliness: -6.0d, 
    positionlocky: 69.0d, 
    positionlockx: 312.7601512367455d, 
    positionlockz: 73.35047846487024d, 
    counterholdstacks: 0.0d, 
    chargingstacks: 0.0d, 
    mobslamaftershockmaxhploss: 0.8d, 
    slamaftershockscaleddamage: 1.1d, 
    lowerrangedesireddistance: 10.0d, 
    yaw: 179.65463256835938d, 
    cooldownscaled: 1.0d, 
    HHMusicType: "ConcertoLowDef", 
    currentcombo: "hhdefencepro2", 
    nearestplayeruuid: "9f1a1123-452e-442f-8741-4b2434abaf74", 
    allmovescaledcooldowns: 1.0d, 
    maxhpimmunetick: 0.0d, 
    chargefinisherxcoord: -0.08562953888343827d, 
    rotationlockpitch: 73.89392852783203d
}, Attributes: [
    {Base: 0.0d, Name: "obscure_api:resilience"}, 
    {Base: 0.0d, Name: "obscure_api:magic_resistance"}, 
    {Base: 2.0d, Name: "obscure_api:critical_damage"}, 
    {Base: 0.0d, Name: "obscure_api:regeneration"}, 
    {Base: 0.0d, Name: "obscure_api:accuracy"}, 
    {Base: 0.0d, Name: "minecraft:generic.armor_toughness"}, 
    {Base: 0.7d, Name: "minecraft:generic.knockback_resistance"}, 
    {Base: 10.0d, Name: "minecraft:generic.armor"}, 
    {Base: 0.0d, Name: "obscure_api:parry"}, 
    {Base: 450.0d, Name: "minecraft:generic.max_health"}, 
    {Base: 0.08d, Name: "forge:entity_gravity"}, 
    {Base: 80.0d, Modifiers: [
        {Amount: 0.08100036716180926d, Operation: 1, UUID: [I; 1891860633, 1901479022, -1246688377, 223260124], Name: "Random spawn bonus"}
    ], Name: "minecraft:generic.follow_range"},
    {Base: 0.0d, Name: "lodestone:magic_damage"}, 
    {Base: 0.0d, Name: "obscure_api:magic_damage"}, 
    {Base: 1.5d, Name: "forge:step_height_addition"}, 
    {Base: 0.0d, Name: "obscure_api:critical_hit"}, 
    {Base: 0.0d, Name: "obscure_api:dodge"}, 
    {Base: 0.0d, Modifiers: [
        {Amount: -4000.0d, Operation: 0, UUID: [I; 577059721, 292440540, -1687447183, 1218141157], Name: "effect.minecraft.weakness 999"}], Name: "minecraft:generic.attack_damage"}, 
        {Base: -49.473758697509766d, Name: "headhunter_mod:rotation_locked_yaw"}, 
        {Base: 0.25d, Name: "minecraft:generic.movement_speed"}, 
        {Base: 0.0d, Name: "obscure_api:penetration"}, 
        {Base: 0.0d, Name: "lodestone:magic_resistance"}, 
        {Base: 73.89392852783203d, Name: "headhunter_mod:rotation_locked_pitch"}], Invulnerable: 0b, FallFlying: 0b, PortalCooldown: 0, AbsorptionAmount: 0.0f, BlueprintTrackedData: [{Id: "savage_and_ravage:invisible_due_to_mask", Boolean: 0b}], 
        FallDistance: 0.0f, 
        CanUpdate: 1b, 
        DeathTime: 0s, 
        currentTexture: "headhunterdifflook1", 
        ForgeCaps: {"cataclysm:hook_cap": {hasHook: 0b}, 
        "mutantmore:mutantshulkershieldshoottimer": {ShootTime: 0}, 
        "structure_gel:gel_entity": {portal: "structure_gel:empty"}, 
        "cataclysm:charge_cap": {timer: 0, dx: 0.0f, ChargeDamage: 0.0f, KnockbackSpeed: 0.0f, dz: 0.0f, ChargeTime: 0, isCharge: 0b}, 
        "lodestone:entity_data": {}, 
        "cataclysm:hold_attack_cap": {PosZ: 0.0d, PosX: 0.0d, PosY: 0.0d, Hold: 0b}, 
        "malum:living_data": {
            darknessAfflictionData: {
                currentAffliction: 0.0f, expectedAffliction: 0, rejection: 0, timeSpentInGoop: 0, afflictionDuration: 0
            }, 
            soulData: {
                spawnerSpawned: 0b, soulless: 0b
            }
        }, 
        "mutantmore:entityheat": {CoolDelay: 0, HeatAmount: -0.05d}}, 
        HandDropChances: [0.085f, 0.085f], 
        PersistenceRequired: 1b, 
        UUID: [I; -1349981619, 907627639, -1650658284, -1879724998], 
        Motion: [0.0d, -0.0784000015258789d, 0.0d], 
        Health: 450.0f, 
        LeftHanded: 0b, 
        Air: 300s, 
        OnGround: 1b, 
        CitadelData: {}, 
        Rotation: [-49.47376f, 0.0f], 
        HandItems: [
            {id: "minecraft:iron_axe", Count: 1b, tag: {Damage: 0, Enchantments: [{lvl: 1s, id: "minecraft:vanishing_curse"}
        ]}}, 
        {id: "minecraft:iron_axe", Count: 1b, tag: {Damage: 0, Enchantments: [{lvl: 1s, id: "minecraft:vanishing_curse"}]}}], 
        ArmorDropChances: [0.085f, 0.085f, 0.085f, 0.085f], 
        CustomName: '{"text":"HeadHunter EX"}', 
        Pos: [323.1593477634489d, 64.0d, 86.1633268955528d], 
        Fire: -1s, ArmorItems: [
            {id: "minecraft:leather_boots", Count: 1b, tag: {Damage: 0, Enchantments: [
                {lvl: 2s, id: "minecraft:projectile_protection"}, {lvl: 2s, id: "minecraft:protection"}, {lvl: 1s, id: "minecraft:vanishing_curse"}]}}, {id: "minecraft:leather_leggings", Count: 1b, tag: {Damage: 0, Enchantments: [{lvl: 2s, id: "minecraft:projectile_protection"}, {lvl: 2s, id: "minecraft:protection"}, {lvl: 1s, id: "minecraft:vanishing_curse"}]}}, {id: "minecraft:leather_chestplate", Count: 1b, tag: {Damage: 0, Enchantments: [{lvl: 2s, id: "minecraft:projectile_protection"}, {lvl: 2s, id: "minecraft:protection"}, {lvl: 1s, id: "minecraft:vanishing_curse"}]}}, {id: "minecraft:leather_helmet", Count: 1b, tag: {Damage: 0, Enchantments: [{lvl: 2s, id: "minecraft:projectile_protection"}, {lvl: 2s, id: "minecraft:protection"}, {lvl: 1s, id: "minecraft:vanishing_curse"}]}}], CanPickUpLoot: 0b, HurtTime: 0s, ActiveEffects: [{"forge:id": "minecraft:regeneration", Ambient: 0b, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1b}], ShowIcon: 0b, ShowParticles: 0b, Duration: 998544, Id: 10, Amplifier: 3b}, {"forge:id": "minecraft:weakness", Ambient: 0b, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1b}], ShowIcon: 1b, ShowParticles: 1b, Duration: 99996123, Id: 18, Amplifier: -25b}, {"forge:id": "minecraft:resistance", Ambient: 0b, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1b}], ShowIcon: 0b, ShowParticles: 0b, Duration: 998544, Id: 11, Amplifier: 5b}], "forge:spawn_type": "MOB_SUMMONED", CustomNameVisible: 1b}
*/
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