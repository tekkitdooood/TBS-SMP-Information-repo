ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:spruce_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:spruce_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "spruce_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:spruce_sapling"
                }
                }
            ],
            "soil": {
                "item": "minecraft:dirt"
            },
            "time": 1600
            }
    )

})