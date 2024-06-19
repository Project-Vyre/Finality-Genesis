// ignored: true

/**
 * @file WORK IN PROGRESS! DO NOT USE!
 */

let compon = []
function tip(
  tipId,
  tipTitle,
  tipText,
  tipColor
) {
  compon.push({
    id: tipId,
    title: tipTitle,
    text: tipText,
    color: tipColor
  })
}

ClientEvents.lang("en_us", event => {
  // Tip Titles
  event.addAll("kubejs", {
    "kubejs.tip.finality_tip": "Finality Tip",
    "kubejs.tip.create_tip": "Create Tip",
    "kubejs.tip.rainb_create_tip": "<rainb>Create Tip</rainb>",
    "kubejs.tip.jei_tip": "JEI Tip",
    "kubejs.tip.rei_tip": "REI Tip"
  })
  // resourcelocation | translation key id | tip text string
  compon.forEach(tip => {
    event.add('kubejs', `kubejs.tip.${tip.id}`, tip.text)
  })
})
ClientEvents.highPriorityAssets(event => {
  compon.forEach(thing => {
    event.add(`kubejs:tips/${thing.path}/${thing.id}`, {
      "title": {
        "translate": "kubejs.tip.finality_tip",
        "bold": true,
        "color": thing.colors
      },
      // "translate": "kubejs.tip.${fileName}"
      "tip": { "translate": 'kubejs.tip.' + thing.id }
    })
  })
})

tip(
  "coal_renewal",
  "Coal can be renewed from compacting kelp blocks when given sufficient heat.",
)
