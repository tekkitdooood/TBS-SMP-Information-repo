ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "M": {"item": "immersiveengineering:circuit_board"},
            "S": {"tag": "c:circuits/basic"},
            "C": {"tag": "c:gems/quartz"},
            "V": {"item": "immersiveengineering:component_electronic"}
        },
        "pattern": [
            "CVC",
            "SMS",
            "CVC"],
        "result": {
            "count": 1,
            "id": "electrodynamics:circuitadvanced"}
        }
    )
})