ServerEvents.recipes(event => {
    event.shaped(
        
            Item.of('thebrokenscript:obsidian', 1),
            [
                'OCO',
                'CRC',
                'OCO'
            ],
            {
                O: 'minecraft:obsidian',
                C: 'minecraft:crying_obsidian',
                R: 'minecraft:redstone_block'
            }
        
    )
})