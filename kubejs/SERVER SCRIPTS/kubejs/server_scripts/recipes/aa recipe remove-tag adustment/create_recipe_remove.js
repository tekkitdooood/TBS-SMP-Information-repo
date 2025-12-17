ServerEvents.recipes(event => {
    event.remove({id: 'create:rolling/paper'})
    event.remove({id: 'create:rolling/bamboo'})
    event.remove({output: 'create:tree_fertilizer'})
    event.remove({output: 'create:belt_connector'})
})