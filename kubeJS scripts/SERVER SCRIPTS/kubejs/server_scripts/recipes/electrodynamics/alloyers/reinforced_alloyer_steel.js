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
                    tag: 'c:ingots/iron'
                }
            },
            {
                ingredient: {
                    tag: 'c:coal_coke'
                },
                count: 1
            }
        ],
        output: {
            count: 2,
            id: 'immersiveengineering:ingot_steel'
        },
        ticks: 240,
        usagepertick: 75
    })
})