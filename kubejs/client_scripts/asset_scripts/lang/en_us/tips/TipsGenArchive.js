// ignored: true

/**
 * @file Original tip generation for archival purposes.
 */

ClientEvents.highPriorityAssets(event => {
  /**
   * @summary Finality tip factory
   * @param {ResourceLocation_} fileName The JSON file name
   * @param {string} tipText The tip text itself
   */
  function finTip(fileName, tipText) {
    event.add(`kubejs:tips/tip_${fileName}`, {
      "title": {
        "text": "Finality Tip",
        "bold": true,
        "color": "light_purple"
      },
      "tip": {
        "text": tipText
      }
    })
  }
  /**
   * @summary The not so serious Finality tip factory
   * @param {ResourceLocation_} fileName The JSON file name
   * @param {string} tipText The tip text itself
   */
  function finJokeTip(fileName, tipText) {
    event.add(`kubejs:tips/joke_tips/${fileName}`, {
      "title": {
        "text": "Finality Tip",
        "bold": true,
        "color": "red"
      },
      "tip": { "text": tipText }
    })
  }
  /**
   * @summary Create tip factory, uses gold color in tip title.
   * @param {ResourceLocation_} fileName 
   * @param {string} tipText 
   */
  function createTip(fileName, tipText) {
    event.add(`kubejs:tips/create_${fileName}`, {
      "title": {
        "text": "Create Tip",
        "bold": true,
        "color": "gold"
      },
      "tip": { "text": tipText }
    })
  }
  /**
   * 
   * @param {ResourceLocation_} fileName 
   * @param {string} tipText 
   */
  function specialCreateTip(fileName, tipText) {
    event.add(`kubejs:tips/create_${fileName}`, {
      "title": {
        "text": "<rainb>Create Tip</rainb>",
        "bold": true,
        "color": "gold"
      },
      "tip": { "text": tipText }
    })
  }
  /**
   * @summary REI tip factory
   * @param {ResourceLocation_} fileName The JSON file name
   * @param {string} tipText The tip text itself
   */
  function reiTips(fileName, tipText) {
    event.add(`kubejs:tips/rei_${fileName}`, {
      "title": {
        "text": "REI Tip",
        "bold": true,
        "color": "light_gray"
      },
      "tip": { "text": tipText }
    })
  }
  /**
   * @summary JEI tip factory
   * @param {ResourceLocation_} fileName The JSON file name
   * @param {string} tipText The tip text itself
   */
  function jeiTips(fileName, tipText) {
    event.add(`kubejs:tips/jei_${fileName}`, {
      "title": {
        "text": "JEI Tip",
        "bold": true,
        "color": "dark_green"
      },
      "tip": { "text": tipText }
    })
  }
})