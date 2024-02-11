// ignored: true

/**
 * @file WORK IN PROGRESS AND EXPERIMENTAL! PROTOTYPE CLASS FOR HANDLING TIPS. DO NOT USE!
 */

/**
 * 
 * @param {string} tipId 
 * @returns 
 */

function tip(/** @type {string} */ tipId) {
  return new tipBuilder(tipId)
}

function tipBuilder(tipId) {
  this.tipId = tipId
  this.tipTxt = ""
  this.tipType = ""
}
tipBuilder.prototype = {
  tipId: function (/** @type {string} */ id) {
    this.id = id
    return this
  },
  addBehaviour: function (/** @type {string[]} */ conditionAndBehaviour
  ) {
    this.conditions.push(conditionAndBehaviour[0])
    this.behaviours.push(conditionAndBehaviour[1])
    return this
  },
  addAction: function (/** @type {string[]} */ controlsAndActions) {
    this.controls.push(controlsAndActions[0])
    this.actions.push(controlsAndActions[1])
    return this
  },
  setPalette: function (/** @type {Internal.TooltipHelper$Palette} */ palette) {
    this.palette = palette
    return this
  },
  build: function () {
    $TooltipModifier.REGISTRY.registerDeferred(this.itemId, (item) => new $ItemDescription(item, this.palette))
    let map = Utils.newMap()
    map.putIfAbsent(this.descriptionId + ".tooltip", this.itemId.path.toUpperCase())
    if (this.summary != "") {
      map.putIfAbsent(this.descriptionId + ".tooltip.summary", this.summary)
    }
    for (let index = 0; index < this.conditions.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.condition" + (index + 1), this.conditions[index])
    }
    for (let index = 0; index < this.behaviours.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.behaviour" + (index + 1), this.behaviours[index])
    }
    for (let index = 0; index < this.controls.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.control" + (index + 1), this.controls[index])
    }
    for (let index = 0; index < this.actions.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.action" + (index + 1), this.actions[index])
    }
    return map
  }
}
