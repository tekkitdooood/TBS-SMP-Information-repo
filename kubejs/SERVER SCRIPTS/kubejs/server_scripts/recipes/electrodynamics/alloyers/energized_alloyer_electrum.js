ServerEvents.recipes(event => { 
    event.custom({
        type: 'electrodynamics:energized_alloyer_recipe',
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
                count: 1,
                ingredient: {
                    tag: 'c:ingots/gold'
                }
            },
            {
                count: 1,
                ingredient: {
                    tag: 'c:ingots/silver'
                }
            }
        ],
        output: {
            count: 2,
            id: 'immersiveengineering:ingot_electrum'
        },
        ticks: 180,
        usagepertick: 40
    })
})