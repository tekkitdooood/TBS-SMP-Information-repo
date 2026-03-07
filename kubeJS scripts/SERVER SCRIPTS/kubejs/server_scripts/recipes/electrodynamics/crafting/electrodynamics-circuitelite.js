ServerEvents.recipes(event => {
     event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "M": {"item": "immersiveengineering:circuit_board"},
            "S": {"tag": "c:circuits/advanced"},
            "C": {"tag": "c:ingots/gold"},
            "V": {"item": "immersiveengineering:component_electronic_adv"}
        },
        "pattern": [
            "CVC",
            "SMS",
            "CVC"],
        "result": {
            "count": 1,
            "id": "electrodynamics:circuitelite"
        }
        }
    )
})