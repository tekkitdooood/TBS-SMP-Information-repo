ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
         "ingredients": 
            [{"tag": "c:sands"},{"tag": "c:sands"},
            {"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"},
            {"amount": 750,"fluid": "minecraft:water","type": "fluid_stack"}],
        "results": 
            [{"count": 4,"id": "electrodynamics:ceramicwet"}]
    });
})