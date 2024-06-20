// ignored: true

/**
 * @file Applies emotional damage when an entity is hit with any of the items below.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 * @author ChiefArug <https://github.com/ChiefArug> For helping with fixes
 * @author LLytho <https://github.com/LLytho> For helping with fixes
 * @author OE-KT <https://github.com/OE-KT> For writing the math
 */

let dmgScriptDebug = false
// NOTE TO SLEEPY SELF FIX MATH

EntityEvents.hurt(event => {
  const {
    entity,
    source: { actual, player }
  } = event
  if (!(actual && actual.isPlayer() && player)) {
    return;
  }

  function finPercentScaling(percentage) {
    entity.attack(entity.getHealth() * percentage)
    console.log(entity.attack(entity.getHealth() * percentage))
  }
  //let final_atk_scaling = entity.health -= Math.max((entity.getHealth() * 0.25).toFixed(0))
  switch (player.getMainHandItem()) {
    case 'kubejs:final_sword':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_pickaxe':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_axe':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_shovel':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_hoe':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_scythe':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_katana':
      finPercentScaling(0.25)
      break;
    case 'kubejs:final_lance':
      finPercentScaling(0.25)
      break;
    case 'kubejs:high_entropy_alloy':
      // Get slapped by ingot that breaks reality
      entity.health -= Math.max((entity.getHealth() * 0.02).toFixed(2))
      break;
    // Cataclysm weapon checks
    case 'cataclysm:infernal_forge':
      event.damage - 24
      break;
    case 'cataclysm:the_incinerator':
      entity.secondsOnFire = 10
      event.damage - 32
    case 'cataclysm:meat_shredder':
      // subtract one percent per tick from an entity's max health
      // Warden HP (500) - 100 (1/100) * 100
      // So it would be subtracting 1% per tick from the Warden's health
      let shredderDmg = Number.parseFloat(event.damage).toFixed(2) = Number.parseFloat(entity.getMaxHealth() * 0.1).toFixed(2)
      shredderDmg
      if (dmgScriptDebug) { console.log('Meat Shredder:' + shredderDmg) }
      break;
    default:
      //if (dmgScriptDebug) { console.log("hurt DEFAULT") }
      break;
  }

  if (!entity.isAlive() && entity.getLastDamageSource() == player) {
    entity.die(event.source)
    //if (dmgScriptDebug) { console.log(event.source) }
  }
})

/*
//entity.dead()
event.server.tell([
    Component.translate(`entity.${entity.name}.${entity.path}`), // entity.${entity.namespace}.${entity.path}
    Component.translate(` already died. Stop poking!`)
])
//(entity.health -= (entity.getMaxHealth() * 0.01)).toFixed(2)
// this works...
//entity.health -= Math.min((entity.getMaxHealth() * 0.01).toFixed(2), 8)
//event.server.tell(entity.health -= Math.min((entity.getMaxHealth() * 0.01).toFixed(2), 8))
entity.health -= Math.max((entity.getHealth() * 0.02).toFixed(2), 46)
console.log(Math.max((entity.getHealth() * 0.05).toFixed(2), 6))
*/

/*
EntityEvents.hurt(event => {
    // In an attempt to make the Meat Shredder scale better.
    if (event.source.player?.mainHandItem?.id == 'cataclysm:meat_shredder') {
        event.player.attack(event.entity.health -= Math.max((event.entity.getHealth() * 0.05).toFixed(2), 8))
        if (!event.entity.isAlive()) {
            event.entity.die(event.source.player)
        }
    }
})
EntityEvents.hurt(event => {
    if (event.source.player?.mainHandItem?.id == 'cataclysm:meat_shredder') event.entity.attack(100)
    // const { entity, source: { actual, player } } = event
    if (event.source.actual.isPlayer() && event.player.getMainHandItem() === 'cataclysm:meat_shredder') {
        event.entity.attack -= Math.max((event.entity.getHealth() * 0.05).toFixed(2), 46)
    } else return
})
Odin the Shiny has the following entity data: {
    Brain: {memories: {}}, 
    HurtByTimestamp: 0, 
    ForgeData: {apoth.rarity: "rare", notmaxhpimmune: 1b, maxhpimmunetick: 0.0d, apoth.boss: 1b}, 
    CanJoinRaid: 0b, Attributes: [{Base: 0.08d, Name: "forge:entity_gravity"}, 
    {Base: 1.0d, Name: "irons_spellbooks:cast_time_reduction"}, 
    {Base: 1.0d, Name: "apotheosis:mining_speed"}, 
    {Base: 0.0d, Name: "apotheosis:life_steal"}, 
    {Base: 1.0d, Name: "apotheosis:arrow_damage"}, 
    {Base: 0.0d, Name: "obscure_api:magic_resistance"}, 
    {Base: 2.0d, Name: "obscure_api:critical_damage"}, 
    {Base: 0.0d, Name: "malum:arcane_resonance"}, 
    {Base: 0.0d, Modifiers: [
        {Amount: 0.4000000059604645d, Operation: 0, UUID: [
            I; -1652037694, 749729290, -553663182, 619821879
        ], 
        Name: "placebo_random_modifier_attribute.name.generic.knockback_resistance"}
    ], 
    Name: "minecraft:generic.knockback_resistance"}, 
    {Base: 1.0d, Name: "irons_spellbooks:spell_resist"}, 
    {Base: 0.0d, Name: "minecraft:generic.attack_knockback"}, 
    {Base: 0.3499999940395355d, Modifiers: [
        {Amount: 0.14000000059604645d, Operation: 1, UUID: [I; 1840284930, 3726074, 1999585772, 1931459135], Name: "placebo_random_modifier_attribute.name.generic.movement_speed"}
    ], Name: "minecraft:generic.movement_speed"}, 
    {Base: 1.0d, Name: "irons_spellbooks:ice_spell_power"}, 
    {Base: 100.0d, Name: "irons_spellbooks:max_mana"}, 
    {Base: 1.0d, Name: "irons_spellbooks:fire_magic_resist"}, 
    {Base: 0.0d, Name: "apotheosis:armor_shred"}, 
    {Base: 0.0d, Name: "apotheosis:ghost_health"}, 
    {Base: 0.0d, Name: "malum:soul_ward_capacity"}, 
    {Base: 1.0d, Name: "obscure_api:healing_power"}, 
    {Base: 64.0d, Name: "forge:nametag_distance"}, 
    {Base: 1.0d, Name: "malum:soul_ward_strength"}, 
    {Base: 0.0d, Name: "obscure_api:parry"}, 
    {Base: 1.0d, Name: "irons_spellbooks:blood_spell_power"}, 
    {Base: 0.0d, Name: "obscure_api:dodge"}, 
    {Base: 1.0d, Name: "apotheosis:healing_received"}, 
    {Base: 0.0d, Name: "lodestone:magic_damage"}, 
    {Base: 1.0d, Name: "irons_spellbooks:nature_magic_resist"}, 
    {Base: 0.0d, Name: "obscure_api:critical_hit"}, 
    {Base: 0.05d, Name: "apotheosis:crit_chance"}, 
    {Base: 0.0d, Name: "lodestone:magic_proficiency"}, 
    {Base: 0.0d, Name: "apotheosis:current_hp_damage"}, 
    {Base: 1.0d, Name: "irons_spellbooks:fire_spell_power"}, 
    {Base: 1.0d, Name: "irons_spellbooks:evocation_magic_resist"}, 
    {Base: 0.0d, Name: "obscure_api:penetration"}, 
    {Base: 1.0d, Name: "apotheosis:draw_speed"}, 
    {Base: 0.0d, Name: "apotheosis:cold_damage"}, 
    {Base: 0.0d, Name: "apotheosis:armor_pierce"}, 
    {Base: 1.5d, Name: "apotheosis:crit_damage"}, 
    {Base: 0.0d, Name: "minecraft:generic.armor"}, 
    {Base: 1.0d, Name: "irons_spellbooks:cooldown_reduction"}, 
    {Base: 1.0d, Name: "irons_spellbooks:blood_magic_resist"}, 
    {Base: 0.0d, Name: "apotheosis:fire_damage"}, 
    {Base: 1.0d, Name: "irons_spellbooks:holy_magic_resist"}, 
    {Base: 0.0d, Name: "malum:spirit_spoils"}, 
    {Base: 1.0d, Name: "irons_spellbooks:summon_damage"}, 
    {Base: 0.0d, Name: "apotheosis:dodge_chance"}, 
    {Base: 1.0d, Name: "irons_spellbooks:ender_magic_resist"}, 
    {Base: 0.0d, Name: "malum:soul_ward_recovery_speed"}, 
    {Base: 1.0d, Name: "irons_spellbooks:spell_power"}, 
    {Base: 1.0d, Name: "irons_spellbooks:lightning_spell_power"}, 
    {Base: 0.0d, Name: "minecraft:generic.armor_toughness"}, 
    {Base: 5.0d, Modifiers: [
        {Amount: 0.47999998927116394d, Operation: 1, UUID: [
            I; -2005878805, -2105689137, 612955399, -2036035999
        ], 
        Name: "placebo_random_modifier_attribute.name.generic.attack_damage"}
    ], Name: "minecraft:generic.attack_damage"}, 
    {Base: 1.0d, Name: "irons_spellbooks:holy_spell_power"}, 
    {Base: 1.0d, Name: "irons_spellbooks:lightning_magic_resist"}, 
    {Base: 0.0d, Name: "apotheosis:prot_pierce"}, 
    {Base: 0.0d, Name: "malum:scythe_proficiency"}, 
    {Base: 0.0d, Name: "lodestone:magic_resistance"}, 
    {Base: 0.0d, Name: "apotheosis:overheal"}, 
    {Base: 0.0d, Name: "obscure_api:magic_damage"}, 
    {Base: 24.0d, Modifiers: [
        {Amount: 42.0d, Operation: 0, UUID: [I; 1583457330, 505877308, -1267145656, -1031585996
        ], Name: "placebo_random_modifier_attribute.name.generic.max_health"}
    ], Name: "minecraft:generic.max_health"}, 
    {Base: 0.0d, Name: "obscure_api:resilience"}, 
    {Base: 0.0d, Name: "obscure_api:accuracy"}, 
    {Base: 1.0d, Name: "irons_spellbooks:ice_magic_resist"}, 
    {Base: 1.0d, Name: "irons_spellbooks:ender_spell_power"}, 
    {Base: 1.0d, Name: "irons_spellbooks:nature_spell_power"}, 
    {Base: 1.0d, Name: "apotheosis:arrow_velocity"}, 
    {Base: 0.0d, Name: "caelus:fall_flying"}, 
    {Base: 1.0d, Name: "forge:swim_speed"}, 
    {Base: 0.0d, Name: "forge:step_height_addition"}, 
    {Base: 12.0d, Name: "minecraft:generic.follow_range"}, 
    {Base: 1.0d, Name: "irons_spellbooks:evocation_spell_power"}, 
    {Base: 0.0d, Name: "obscure_api:regeneration"}, 
    {Base: 1.0d, Name: "apotheosis:experience_gained"}, 
    {Base: 1.0d, Name: "irons_spellbooks:mana_regen"}, 
    {Base: 0.0d, Name: "apotheosis:prot_shred"}
], PatrolLeader: 0b, 
Invulnerable: 0b, 
FallFlying: 0b, 
PortalCooldown: 0, 
AbsorptionAmount: 0.0f, 
BlueprintTrackedData: [
    {Id: "savage_and_ravage:invisible_due_to_mask", Boolean: 0b}
], 
FallDistance: 0.0f, 
CanUpdate: 1b, 
DeathTime: 0s,
ForgeCaps: {"cataclysm:hook_cap": {hasHook: 0b}, 
"mutantmore:mutantshulkershieldshoottimer": {ShootTime: 0}, 
"structure_gel:gel_entity": {portal: "structure_gel:empty"}, 
"cataclysm:charge_cap": {timer: 0, dx: 0.0f, ChargeDamage: 0.0f, KnockbackSpeed: 0.0f, dz: 0.0f, ChargeTime: 0, isCharge: 0b}, 
"lodestone:entity_data": {}, 
"cataclysm:hold_attack_cap": {PosZ: 0.0d, PosX: 0.0d, PosY: 0.0d, Hold: 0b}, 
"malum:living_data": {darknessAfflictionData: {currentAffliction: 0.0f, expectedAffliction: 0, rejection: 0, timeSpentInGoop: 0, afflictionDuration: 0}, soulData: {spawnerSpawned: 0b, soulless: 0b}}, "mutantmore:entityheat": {CoolDelay: 0, HeatAmount: -0.025d}}, HandDropChances: [0.085f, 0.085f], PersistenceRequired: 0b, UUID: [I; -1829663069, -975945285, -2097434997, 1676639044], Patrolling: 0b, Motion: [0.0d, -0.0784000015258789d, 0.0d], Health: 66.0f, LeftHanded: 0b, Air: 300s, OnGround: 1b, CitadelData: {}, Rotation: [218.29347f, -11.101737f], HandItems: [{id: "minecraft:wooden_sword", Count: 1b, tag: {Damage: 0}}, {}], Wave: 0, ArmorDropChances: [0.085f, 0.085f, 0.085f, 2.0f], CustomName: '{"color":"#5555FF","text":"Odin the Shiny"}', Pos: [-5.5d, -47.0d, 23.5d], Fire: -1s, ArmorItems: [{id: "minecraft:leather_boots", Count: 1b, tag: {Damage: 0}}, {id: "minecraft:leather_leggings", Count: 1b, tag: {Damage: 0}}, {id: "minecraft:leather_chestplate", Count: 1b, tag: {Damage: 0, Enchantments: [{lvl: 3s, id: "minecraft:unbreaking"}]}}, {id: "minecraft:leather_helmet", Count: 1b, tag: {apoth_boss: 1b, Damage: 0, affix_data: {name: '{"italic":false,"color":"#5555FF","translate":"misc.apotheosis.affix_name.four","with":[{"translate":"%s\'s","with":[{"text":"Odin"}]},{"translate":"affix.apotheosis:armor/attribute/steel_touched"},"",{"translate":"affix.apotheosis:armor/mob_effect/blinding.suffix"}]}', affixes: {"irons_spellbooks:armor/attribute/cooldown": 0.50574243f, "apotheosis:armor/mob_effect/blinding": 0.1393925f, "apotheosis:armor/attribute/ironforged": 0.9282299f, "apotheosis:durable": 0.15f, "apotheosis:armor/attribute/steel_touched": 0.12596226f, "apotheosis:socket": 2.0f}, rarity: "rare", uuids: [[I; 1035716347, 582764619, -1600437745, 1668320134]]}, Enchantments: [{lvl: 4s, id: "minecraft:protection"}], display: {Name: '{"extra":[{"text":"Close Helm"}],"text":"Leather "}'}}}], CanPickUpLoot: 0b, HurtTime: 0s, ActiveEffects: [{"forge:id": "minecraft:fire_resistance", Ambient: 1b, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1b}], ShowIcon: 0b, ShowParticles: 0b, Duration: 2147483084, Id: 12, Amplifier: 0b}, {"forge:id": "minecraft:glowing", Ambient: 0b, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1b}], ShowIcon: 1b, ShowParticles: 1b, Duration: 3037, Id: 24, Amplifier: 0b}], CustomNameVisible: 1b}
*/