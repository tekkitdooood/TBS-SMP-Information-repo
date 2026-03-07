ClientEvents.tick(event => {
    let player = event.player
    if (!player) return
    
    let mainHand = player.mainHandItem
    let offHand = player.offHandItem
    let holdingBlock = mainHand.id === "kubejs:clear_block" || offHand.id === "kubejs:clear_block"

    if (!holdingBlock) return

    let playerPos = player.blockPosition()
    let level = player.level
    let radius = 7

    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            for (let z = -radius; z <= radius; z++) {
                let checkPos = playerPos.offset(x, y, z)
                let block = level.getBlockState(checkPos)

                if (block.id ==="kubejs:clear_block") {
                    level.spawnParticles("minecraft:end_rod", true,
                        checkPos.x + 0.5,
                        checkPos.y + 0.5,
                        checkPos.z + 0.5,
                        0, 0, 0,
                        1,
                        {}
                    )
                }
            }
        }
    }
})