// requires: wares
// requires: create
// requires: lootjs
// requires: morejs
// ignored: true

Java.loadClass('c')

function waresAgreement() {
    return new waresAgreementBuilder()
}

function waresAgreementBuilder() {
    this.waresAgreement = []
    this.requestedItems = []
    this.paymentItems = []
    this.orderCount = number
    this.sealTexture = []
    this.waresTitle = ""
    this.waresMessage = ""
}
waresAgreementBuilder.prototype = {
    
}

let example_sealed_agr = Item.of('wares:sealed_delivery_agreement', "{backsideMessage:'{\"text\":\"Lorem ipsum dolor sit amet consectetur adipiscing labore ipsum nisi nisi enim dolore sint deserunt ipsum anim proident, nisi occaecat aliqua id ut aute ut in enim excepteur minim\\\\nveniam, cillum nulla deserunt dolor minim\\\\nveniam, incididunt amet eu laborum\\\\n ex nostrud quis commodo enim consequat cupidatat\\\\nnon\"}',buyerAddress:'{\"text\":\"59 Side Road, Vibrant Plains Village\"}',buyerName:[{component:'{\"color\":\"dark_gray\",\"text\":\"Greg the Blacksmith\"}'},{component:'{\"color\":\"dark_red\",\"text\":\"Arnold the Butcher\"}'}],deliveryTime:100,experience:{max:40,min:10,step:10},expiresInSeconds:300,id:\"example_agreement_sealed\",message:'{\"text\":\"Lorem ipsum dolor sit amet consectetur adipiscing officia pariatur, ex duis ut cillum duis dolore nostrud esse ipsum commodo in\"}',ordered:{max:64,min:12,step:8},payment:\"minecraft:chests/buried_treasure\",requested:\"minecraft:chests/village/village_butcher\",sealTooltip:'{\"text\":\"Wares Inc.\"}',title:'{\"text\":\"Example Agreement\"}'}")
let sturdy_sheet_sealed_agreement = Item.of('wares:sealed_delivery_agreement', "{backsideMessage:'{\"text\":\"Lorem ipsum dolor sit amet consectetur adipiscing labore ipsum nisi nisi enim dolore sint deserunt ipsum anim proident, nisi occaecat aliqua id ut aute ut in enim excepteur minim\\\\nveniam, cillum nulla deserunt dolor minim\\\\nveniam, incididunt amet eu laborum\\\\n ex nostrud quis commodo enim consequat cupidatat\\\\nnon\"}',buyerAddress:'{\"text\":\"128 Side Road, Vibrant Plains Village\"}',buyerName:[{component:'{\"color\":\"dark_gray\",\"text\":\"Anderson the Blacksmith\"}'},{component:'{\"color\":\"dark_red\",\"text\":\"Anyone\"}'}],deliveryTime:100,experience:{max:2,min:1,step:1},expiresInSeconds:300,id:\"agreement_sealed\",message:'{\"text\":\"Whoever it may concern...\\\\I am urgently in need of some sturdy sheets for forging some armor. Would you happen to have any?You will be paid handsomely for your efforts.\"}',ordered:{max:6,min:1,step:1},payment:\"kubejs:agreement/rare_netherite_ware\",requested:\"kubejs:agreement/rare_netherite_price\",sealTooltip:'{\"text\":\"Wares Inc.\"}',title:'{\"text\":\"Blacksmith in Distress\"}'}")
let example_emerald_agr = Item.of('wares:sealed_delivery_agreement', "{title:'{\"text\":\"A Great Deal\"}',requested:[{id:\"minecraft:stick\",Count:{min:4,max:16,step:4}}],payment:[{id:\"minecraft:emerald\",Count:1}],ordered:10}")

//MoreJSEvents.villagerTrades(event => {
//    event.addTrade('minecraft:weaponsmith', 1, [
//        '1x minecraft:paper',
//    ], netherite_sl_agr)
//})

MoreJSEvents.wandererTrades(event => {
    event.addTrade(1, [
        '12x kubejs:gold_coin',
        '9x kubejs:iron_coin'
    ], sturdy_sheet_sealed_agreement).maxUses(1)
    if (Platform.isLoaded('createdeco')) {
        event.addTrade(1, [
            '24x createdeco:gold_coin'
        ], sturdy_sheet_sealed_agreement).maxUses(1)
    }
})

ServerEvents.recipes(event => {
    event.shapeless(example_emerald_agr, [
        'minecraft:paper'
    ]).id('kubejs:crafting/netherite_sealed_agreement_test')
})