ServerEvents.recipes(event => {
    event.smelting("codmod:molten_copper", "minecraft:copper_block")
    event.smelting("codmod:molten_copper", "minecraft:waxed_copper_block")
    event.blasting("codmod:molten_copper", "minecraft:copper_block")
    event.blasting("codmod:molten_copper", "minecraft:waxed_copper_block")
})