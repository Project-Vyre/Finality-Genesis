// priority: 50
// ignored: false

/**
 * @file Responsible for loading models for blocks and items.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Artist of the crystal lance texture and lance model basis
 */

/*
[20Oct2023 09:47:21.441] [Render thread/WARN] [net.minecraftforge.client.model.SeparateTransformsModel/]: 
Model "kubejs:final_scythe#inventory" is using the deprecated loader "forge:separate-perspective" instead of "forge:separate_transforms".
This loader will be removed in 1.20.
*/

let handheldModelItems = [
  'final_sword',
  'final_scythe',
  'final_katana',
  'final_lance',
  'crystal_lance'
]

ClientEvents.highPriorityAssets(event => {
  // placeholder
  //if (!Platform.isLoaded('kubejs_create')) {
  //    let sequencedKubeJS = [
  //        ''
  //    ]
  //    event.add('kubejs:models/item')
  //}
  for (let i = 0; i < handheldModelItems.length; i++) {
    let item = handheldModelItems[i];
    // kubejs/models/final_sword.json
    event.add(`kubejs:models/item/${item}`, {
      "parent": "item/handheld",
      "loader": "forge:separate_transforms",
      "base": {
        "parent": `kubejs:item/${item}_handheld`
      },
      "perspectives": {
        "gui": {
          "parent": `kubejs:item/${item}_gui`
        },
        "fixed": {
          "parent": `kubejs:item/${item}_gui`
        }
      }
    })
    // kubejs/models/final_sword_gui.json
    event.add(`kubejs:models/item/${item}_gui`, {
      "parent": "item/handheld",
      "textures": {
        "layer0": `kubejs:item/${item}_gui`
      }
    })
  }
  // kubejs/models/final_sword_handheld.json
  event.add('kubejs:models/item/final_sword_handheld', {
    "credit": "Made with Blockbench",
    "parent": "item/handheld",
    "textures": {
      "layer0": "kubejs:item/final_sword_handheld"
    },
    "display": {
      "thirdperson_righthand": {
        "rotation": [14, -90, 55],
        "translation": [0, 13, 3],
        "scale": [1.7, 1.7, 0.85]
      },
      "thirdperson_lefthand": {
        "rotation": [104, -90, 55],
        "translation": [0, 13, 3],
        "scale": [1.7, 1.7, 0.85]
      },
      "firstperson_righthand": {
        "rotation": [0, 90, 25],
        "translation": [0, 10, 0],
        "scale": [1.3, 1.3, 0.65]
      },
      "firstperson_lefthand": {
        "rotation": [-100, 90, 25],
        "translation": [0, 10, 0],
        "scale": [1.3, 1.3, 0.65]
      },
      "ground": {
        "rotation": [0, 0, 45],
        "translation": [0, 17, 0],
        "scale": [1.5, 1.5, 1.5]
      },
      "gui": {
        "scale": [1.3, 1.3, 1]
      },
      "fixed": {
        "rotation": [0, 180, 0]
      }
    }
  })
  // kubejs/models/final_scythe_handheld.json
  event.add('kubejs:models/item/final_scythe_handheld', {
    "credit": "Made with Blockbench",
    "parent": "item/handheld",
    "textures": {
      "layer0": "kubejs:item/final_scythe_handheld"
    },
    "display": {
      "thirdperson_righthand": {
        "rotation": [6, -90, 55],
        "translation": [0, 11, 1],
        "scale": [1.7, 1.7, 0.85]
      },
      "thirdperson_lefthand": {
        "rotation": [6, 90, -55],
        "translation": [0, 11, 1],
        "scale": [1.7, 1.7, 0.85]
      },
      "firstperson_righthand": {
        "rotation": [0, -86.25, 90],
        "translation": [1.13, 8.7, -1.12],
        "scale": [1.36, 1.36, 0.68]
      },
      "firstperson_lefthand": {
        "rotation": [0, 86.25, -90],
        "translation": [1.13, 8.7, -1.12],
        "scale": [1.36, 1.36, 0.68]
      },
      "ground": {
        "rotation": [0, 0, 45],
        "translation": [0, 20, 0],
        "scale": [2, 2, 0.5]
      },
      "head": {
        "rotation": [-91.75, -90, 0],
        "translation": [0, 16, -18],
        "scale": [2.75, 2.75, 2.75]
      },
      "fixed": {
        "rotation": [0, 180, 0]
      }
    }
  })
  // kubejs/models/final_katana_handheld.json
  event.add('kubejs:models/item/final_katana_handheld', {
    "credit": "Made with Blockbench",
    "parent": "item/handheld",
    "textures": {
      "layer0": "kubejs:item/final_katana_handheld"
    },
    "display": {
      "thirdperson_righthand": {
        "rotation": [13, -90, 55],
        "translation": [0, 13, 3.25],
        "scale": [1.7, 1.7, 0.85]
      },
      "thirdperson_lefthand": {
        "translation": [0, 13, 3.25],
        "scale": [1.7, 1.7, 0.85]
      },
      "firstperson_righthand": {
        "rotation": [0, -86.25, 90],
        "translation": [1.13, 8.7, -1.12],
        "scale": [1.36, 1.36, 0.68]
      },
      "firstperson_lefthand": {
        "rotation": [0, 86.25, -95.5],
        "translation": [1.13, 8.7, -1.12],
        "scale": [1.36, 1.36, 0.68]
      },
      "ground": {
        "rotation": [0, 0, 45],
        "translation": [0, 20, 0],
        "scale": [2, 2, 1]
      },
      "head": {
        "rotation": [-91.75, -90, 0],
        "translation": [0, 16, -18],
        "scale": [2.75, 2.75, 2.75]
      },
      "fixed": {
        "rotation": [0, 180, 0]
      }
    }
  })
  // kubejs/models/final_lance_handheld.json
  event.add('kubejs:models/item/final_lance_handheld', {
    "credit": "Made with Blockbench",
    "parent": "item/handheld",
    "textures": {
      "layer0": "kubejs:item/final_lance_handheld"
    },
    "display": {
      "thirdperson_righthand": {
        "rotation": [0, -90, 55],
        "translation": [0, 4, 0.5],
        "scale": [1.7, 1.7, 0.85]
      },
      "thirdperson_lefthand": {
        "rotation": [0, 90, -55],
        "translation": [0, 4, 0.5],
        "scale": [1.7, 1.7, 0.85]
      },
      "firstperson_righthand": {
        "rotation": [0, 90, 25],
        "translation": [1.13, 3.2, 1.13],
        "scale": [1.3, 1.3, 0.65]
      },
      "firstperson_lefthand": {
        "rotation": [0, 90, -25],
        "translation": [1.13, 3.2, 1.13],
        "scale": [1.3, 1.3, 0.65]
      },
      "ground": {
        "translation": [0, 3, 0],
        "scale": [0.8, 0.8, 0.5]
      },
      "gui": {
        "scale": [1.3, 1.3, 1]
      },
      "fixed": {
        "rotation": [0, 180, 0],
        "scale": [1.7, 1.7, 1]
      }
    }
  })
  // kubejs/models/crystal_lance_handheld.json
  event.add('kubejs:models/item/crystal_lance_handheld', {
    "credit": "Made with Blockbench",
    "parent": "item/handheld",
    "textures": {
      "layer0": "kubejs:item/crystal_lance_handheld"
    },
    "display": {
      "thirdperson_righthand": {
        "rotation": [0, -90, 55],
        "translation": [0, 8.75, 0.25],
        "scale": [1.7, 1.7, 0.85]
      },
      "thirdperson_lefthand": {
        "rotation": [-55, 90, 0],
        "translation": [0, 8.75, 0.25],
        "scale": [1.7, 1.7, 0.85]
      },
      "firstperson_righthand": {
        "rotation": [0, -86.25, 90],
        "translation": [1.13, 8.7, -1.12],
        "scale": [1.36, 1.36, 0.68]
      },
      "firstperson_lefthand": {
        "rotation": [0, 86.25, -95.5],
        "translation": [1.13, 8.7, -1.12],
        "scale": [1.36, 1.36, 0.68]
      },
      "ground": {
        "translation": [0, 3.5, 0],
        "scale": [1, 1, 0.5]
      },
      "head": {
        "rotation": [-91.75, -90, 0],
        "translation": [0, 16, -18],
        "scale": [2.75, 2.75, 2.75]
      },
      "fixed": {
        "translation": [5.5, 5.5, 0],
        "scale": [2, 2, 2]
      }
    }
  })
  event.add('kubejs:models/item/shimmer_bucket', {
    "parent": "item/generated",
    "textures": {
      "layer0": "kubejs:item/shimmer_bucket"
    }
  })
  let coreSingularities = [
    'blaze_cake',
    'potion_base'
  ]
  for (let i = 0; i < coreSingularities.length; i++) {
    let element = coreSingularities[i];
    event.add(`kubejs:models/item/${element}_singularity`, {
      "parent": "item/generated",
      "textures": {
        "layer0": `kubejs:item/${element}_singularity`,
        "layer1": `kubejs:item/${element}_singularity_overlay`
      }
    })
  }
  if (Platform.isLoaded('apotheosis') && Platform.isLoaded('gateways')) {
    event.add('apotheosis:models/item/ancient_material', {
      "parent": "item/generated",
      "textures": {
        "layer0": "apotheosis:item/ancient_material"
      }
    })
    event.add('apotheosis:models/item/gems/eversor', {
      "parent": "item/generated",
      "textures": {
        "layer0": "kubejs:item/gems/eversor"
      }
    })
    event.add('apotheosis:models/item/gems/acuti_ora', {
      "parent": "item/generated",
      "textures": {
        "layer0": "kubejs:item/gems/acuti_ora"
      }
    })
  }
  if (Platform.isLoaded('create_bic_bit')) {
    let bicBitSingularities = [
      'speculaas_singularity',
      'stroopwafel_singularity',
      'oliebollen_singularity',
      'kroket_singularity',
      'bitterballen_singularity',
      'frikandel_singularity',
      'fries_singularity',
      'churros_singularity',
      'stamppot_singularity',
      'bic_bit_singularity'
    ]
    for (let i = 0; i < bicBitSingularities.length; i++) {
      let l0 = bicBitSingularities[i];
      event.add(`kubejs:models/item/${l0}`, {
        "parent": "item/generated",
        "textures": {
          "layer0": `kubejs:item/${l0}`,
          "layer1": `kubejs:item/${l0}_overlay`
        }
      })
    }
  }
  if (!Platform.isLoaded('kubejs_create')) {
    let transitionalSeqItems = {
      entropy_mechanism: '<rainb>Entropy Mechanism</rainb>'
    }
    for (const [key, name] of Object.entries(transitionalSeqItems)) {
      event.addLang(`item.kubejs.${key}`, name)
      event.addModel('item', `kubejs:${key}`, model => {
        model.parent('item/generated')
        model.textures({ 'layer0': `kubejs:item/${key}` })
      })
    }
  }
})