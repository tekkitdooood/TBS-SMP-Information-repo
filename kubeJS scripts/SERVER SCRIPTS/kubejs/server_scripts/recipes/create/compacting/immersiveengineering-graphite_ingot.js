ServerEvents.recipes(event => {
    event.custom({
         "type": "create:compacting",
         "heat_requirement": "superheated",
         "ingredients": 
            [{"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "minecraft:slime_ball"},
            {"item": "minecraft:slime_ball"}],
         "results": 
            [{"id": "immersiveengineering:ingot_hop_graphite"}]
    })
    
    event.custom({
         "type": "create:compacting",
         "heat_requirement": "superheated",
         "ingredients": 
            [{"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "immersiveengineering:dust_hop_graphite"},
            {"item": "immersiveengineering:dust_hop_graphite"},
            {"type": "fluid_stack", "amount": 500, "fluid": "immersiveengineering:creosote"}],
         "results": 
            [{"id": "immersiveengineering:ingot_hop_graphite"}]
    })
})