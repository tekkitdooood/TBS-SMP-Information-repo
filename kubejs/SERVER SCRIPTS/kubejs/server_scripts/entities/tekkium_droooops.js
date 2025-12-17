EntityEvents.death(event => {
    if (event.entity.isPlayer()) {
        const player_name = event.entity.username;
        if (player_name === 'tekkitdooood') {
            event.entity.block.popItem('kubejs:tekkium_doooodgot')
        }
    }
})
