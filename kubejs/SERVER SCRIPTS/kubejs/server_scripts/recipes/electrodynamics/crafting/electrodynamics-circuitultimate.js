ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "M": {"item": "immersiveengineering:circuit_board"},
            "S": {"tag": "c:circuits/elite"},
            "C": {"tag": "c:dusts/obsidian"},
            "V": {"item": "immersiveengineering:component_electronic_adv"}
        },
        "pattern": [
            "CVC",
            "SMS",
            "CVC"],
        "result": 
            {"count": 1,
            "id": "electrodynamics:circuitultimate"}
        }
    )
})