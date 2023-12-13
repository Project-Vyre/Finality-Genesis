// requires: jmc
// requires: createaddition
// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
    /**
     * 
     * @param {string} output - Cake
     * @param {*} inputIcing - KubeJS fluid icing.
     */
    let spoutIcing = (output, inputIcing) => {
        event.recipes.create.filling(output, [
            'createaddition:cake_base_baked',
            Fluid.of(`kubejs:${inputIcing}`, 500)
        ]).id(`finality:jmc/filling/${inputIcing}_cake`)
    }
})