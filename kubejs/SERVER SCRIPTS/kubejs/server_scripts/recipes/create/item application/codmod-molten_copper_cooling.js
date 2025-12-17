BlockEvents.rightClicked("codmod:molten_copper", (event) => {
    if (event.item.id === "minecraft:water_bucket") {
        
        event.block.set("minecraft:copper_block")

        if (!event.player.creative) {
            event.item.count--;
            event.player.give("minecraft:bucket")
        }
        
        event.level.playSound(event.block.pos, "minecraft:block.fire.extinguish", "blocks", 1.0, 1.0)
        event.cancel()
    }
})