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
                    tag: 'c:ingots/chromium'
                }   
            },
            {
                count: 1,
                ingredient: {
                    tag: 'c:ingots/steel'
                }
            }
        ],
        output: {
            count: 8,
            id: 'electrodynamics:ingotstainlesssteel'
        },
        ticks: 300,
        usagepertick: 50
    })
})