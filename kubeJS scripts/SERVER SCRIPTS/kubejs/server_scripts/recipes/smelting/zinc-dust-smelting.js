ServerEvents.recipes(event => {
    event.smelting('create:zinc_ingot', 'kubejs:zinc_dust')
    event.blasting('create:zinc_ingot', 'kubejs:zinc_dust')
})