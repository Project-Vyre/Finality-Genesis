// requires: wares
// requires: lootjs
// requires: morejs
// ignored: true

let netherite_agr = Item.of('wares:delivery_agreement', "{buyerAddress:'{\"obfuscated\":true,\"text\":\"12 Side Road, Vibrant Plains Village\"}',buyerName:'{\"color\":\"#333333\",\"text\":\"Greg the Blacksmith\"}',experience:12,expireTimestamp:59187238L,id:\"example_agreement\",message:'{\"text\":\"Lorem ipsum dolor sit amet consectetur adipiscing aliqua et consectetur id amet duis magna amet nostrud commodo elit\\\\nsed sint tempor et et ad exercitation nulla ipsum eiusmod nostrud tempor quis occaecat nulla magna sint aute nisi velit elit\\\\nsed duis Lorem nostrud et consequat quis cupidatat\\\\nnon eiusmod magna velit minim\\\\nveniam, enim\"}',ordered:5,paymentItems:[{Count:2,id:\"minecraft:emerald\"}],requestedItems:[{Count:4,id:\"minecraft:baked_potato\"},{Count:2,id:\"minecraft:pumpkin_pie\"},{Count:2,id:\"#minecraft:flowers\"}],title:'{\"color\":\"#922706\",\"text\":\"Example Agreement\"}'}")
let netherite_sl_agr = Item.of('wares:sealed_delivery_agreement', "{backsideMessage:'{\"text\":\"Looks like I need to \\\\nsed dolor aliqua tempor in esse eiusmod nulla excepteur ea ex est quis aliqua incididunt duis nulla laboris est reprehenderit labore eu culpa laboris nostrud ullamco ut sint incididunt\"}',buyerAddress:'{\"text\":\"59 Side Road, Vibrant Plains Village\"}',buyerName:[{component:'{\"color\":\"dark_gray\",\"text\":\"Greg the Blacksmith\"}'},{component:'{\"color\":\"dark_red\",\"text\":\"Arnold the Butcher\"}'}],deliveryTime:100,experience:{max:40,min:10,step:10},expiresInSeconds:300,id:\"example_agreement_sealed\",message:'{\"text\":\"Lorem ipsum dolor sit amet consectetur adipiscing dolore ex elit\\\\nsed reprehenderit incididunt ut esse nulla eiusmod qui labore anim ipsum\"}',ordered:{max:64,min:12,step:8},payment:\"minecraft:chests/buried_treasure\",requested:\"minecraft:chests/village/village_butcher\",sealTooltip:'{\"text\":\"Wares Inc.\"}',title:'{\"text\":\"Example Agreement\"}'}")

MoreJSEvents.villagerTrades(event => {
    event.addTrade('minecraft:weaponsmith', 1, [
        '1x minecraft:paper',
    ], netherite_sl_agr)
})