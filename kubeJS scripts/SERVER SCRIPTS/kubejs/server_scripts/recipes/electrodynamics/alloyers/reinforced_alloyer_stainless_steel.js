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
                count: 1,
                ingredient: {
                    tag: 'c:ingots/chromium'
                }
            },
            {
                count: 12,
                ingredient: {
                    tag: 'c:ingots/steel'
                }
            }
        ],
        output: {
            count: 12,
            id: 'electrodynamics:ingotstainlesssteel'
        },
        ticks: 200,
        usagepertick: 75
    })
})