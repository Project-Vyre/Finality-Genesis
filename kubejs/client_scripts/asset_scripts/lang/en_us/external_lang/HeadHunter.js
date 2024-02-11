// priority: 0
// requires: headhunter_mod

ClientEvents.lang('en_us', event => {
  if (Platform.isLoaded('enchdesc')) {
    event.add(
      'headhunter_mod',
      'enchantment.headhunter_mod.hunters_brand_enchantment.desc',
      'Information is not clear but here is an attempt to summarize the information provided... Critical hits apply a mark to the target, and damage gets stored for 5 seconds. Every hit also applies a random debuff.'
    )
  }
})