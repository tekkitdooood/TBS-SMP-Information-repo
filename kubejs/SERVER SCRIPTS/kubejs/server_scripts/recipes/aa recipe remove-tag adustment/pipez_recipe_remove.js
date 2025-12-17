ServerEvents.recipes(event => {
    event.remove({output:'pipez:item_pipe'})
    event.remove({output:'pipez:fluid_pipe'})
    event.remove({output:'pipez:energy_pipe'})

})