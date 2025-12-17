ServerEvents.recipes(event => {
    event.shaped(
        Item.of("codmod:server", 1),
        [
            "ICI",
            "ICI",
            "ICI"
        ],
        {
            I: "minecraft:iron_ingot",
            C: "computercraft:cable"
        }
    )
})