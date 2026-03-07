ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:mangrove_propagule"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:mangrove_propagule"
            },
            "results": [
                {
                "count": 10,
                "id": "mangrove_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:mangrove_propagule"
                }
                },
                {
                "chance": 0.1,
                "output": {
                    "id": "minecraft:mangrove_roots"
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