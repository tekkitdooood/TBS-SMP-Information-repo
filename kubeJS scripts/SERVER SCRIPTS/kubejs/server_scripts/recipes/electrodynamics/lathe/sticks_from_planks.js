ServerEvents.recipes(event => {
    event.custom(
        {
        "type": "electrodynamics:lathe_recipe",
        "experience": 0.10000000149011612,
        "group": "electrodynamics",
        "itembi": [
            {
            "chance": 1.0,
            "item": {
                "count": 1,
                "id": "immersiveengineering:dust_wood"
            }
            }
        ],
        "iteminputs": [
            {
            "count": 1,
            "ingredient": {
                "tag": "minecraft:planks"
            }
            }
        ],
        "output": {
            "count": 4,
            "id": "minecraft:stick"
        },
        "ticks": 80,
        "usagepertick": 220.0
        }
    )
})