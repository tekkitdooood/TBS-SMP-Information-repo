ServerEvents.recipes(event => {
    event.shaped(
        Item.of("codmod:hologram_projector", 1),
        [
            "IGI",
            "IDI",
            "ICI"
        ],
        {
            I: "minecraft:iron_ingot",
            D: "minecraft:diamond",
            G: "minecraft:tinted_glass",
            C: "minecrafT:redstone_dust"
        }
    )
})