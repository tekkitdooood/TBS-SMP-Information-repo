ServerEvents.recipes(event => {
    event.remove({id: 'supplementaries:ash_brick'})
    event.remove({id: 'supplementaries:integration/lumisene_mixing'})
    event.remove({id: 'supplementaries:lumisene_bucket'})
    event.remove({id: 'supplementaries:lumisene_bottle'})
})