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
                    tag: 'c:ingots/copper'
                }
            },
            {
                count: 1,
                ingredient: {
                    tag: 'c:ingots/zinc'
                }
            }
        ],
        output: {
            count: 3,
            id: 'create:brass_ingot'
        },
        ticks: 180,
        usagepertick: 40
    })
})