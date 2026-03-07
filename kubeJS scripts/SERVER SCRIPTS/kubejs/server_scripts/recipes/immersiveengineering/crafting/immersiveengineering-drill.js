ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "sticks",
        "key": {
            "S": {"item": "immersiveengineering:component_steel"},
            "H": {"item": "immersiveengineering:heavy_engineering"},
            "W": {"item": "immersiveengineering:wooden_grip"},
            "T": {"item": "electrodynamics:compressoraddontank"},
            "P": {"item": "electrodynamics:pressuregauge"}
            },
        "pattern": [
            " PT",
            "SHW",
            " HW"
        ],
        "result": 
            {"count": 1,
            "id": "immersiveengineering:drill"}
    })
})