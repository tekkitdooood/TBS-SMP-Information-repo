ServerEvents.recipes(event => {
    event.custom({
         "type": "create:compacting",
         "ingredients": 
            [{"item": "supplementaries:ash"},
            {"type": "fluid_stack", "amount": 250, "fluid": "minecraft:water"}],
         "results": 
            [{"id": "supplementaries:ash_brick"}]
    })
})