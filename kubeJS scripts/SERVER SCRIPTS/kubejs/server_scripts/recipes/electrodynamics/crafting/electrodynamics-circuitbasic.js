ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "M": {"item": "immersiveengineering:circuit_board"},
            "S": {"tag": "c:dusts/redstone"},
            "C": {"tag": "c:wires/insulated_copper"},
            "V": {"item": "immersiveengineering:component_electronic"}
            },
        "pattern": [
            "CVC",
            "SMS",
            "CVC"],
        "result": 
            {"count": 1,
            "id": "electrodynamics:circuitbasic"}
        }
    )
})