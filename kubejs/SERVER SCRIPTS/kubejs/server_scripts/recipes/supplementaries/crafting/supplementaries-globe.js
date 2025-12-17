ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "sticks",
        "key": {
            "R": {"tag": "c:rods/iron"},
            "C": {"item": "create:cardboard"},
            "G": {"tag": "c:ingots/gold"},
            "M": {"item": "minecraft:filled_map"}
            },
        "pattern": [
            "  R",
            "MCG",
            "RGG"
        ],
        "result": 
            {"count": 1,
            "id": "supplementaries:globe"}
        }
    )
})