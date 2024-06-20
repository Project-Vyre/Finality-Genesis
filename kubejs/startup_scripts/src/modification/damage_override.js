/**
 * @file Forge damage value override *insert evil Furina laughter audio here*
 * @author LLytho <https://github.com/LLytho> Script author and KubeJS team
 */

// priority: 0
// ignored: true

/**
 * WORK IN PROGRESS! DO NOT UN-IGNORE!
 */

/*
global.onHurtApply1d = (event) => {
  event.setAmount(1)
}
global.onHurtApply5d = (event) => {
  event.setAmount(5)
}
global.onHurtApply20d = (event) => {
  event.setAmount(20)
}
global.onHurtApply25percent = (event) => {
  event.setAmount(event.entity.getMaxHealth() * 0.25)
}
*/

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  global.onEntityHurt(event)
})