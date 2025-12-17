ServerEvents.recipes(event => { 
    event.custom({
        type: 'electrodynamics:reinforced_alloyer_recipe',
        experience: 0.1,
        group: 'electrodynamics',
        itembi: [
            {
                chance: 1,
                item: {
                    count: 1,
                    id: 'electrodynamics:slag'
                }
            }
        ],
        iteminputs: [
            {
                count: 2,
                ingredient: {   
                    tag: 'c:ingots/gold'
                }
            },
            {
                count: 2,
                ingredient: {
                    tag: 'c:ingots/scrap'
                }
            }
        ],
        output: {
            count: 2,
            id: 'minecraft:netherite_ingot'
        },
        ticks: 180,
        usagepertick: 40
    })
})