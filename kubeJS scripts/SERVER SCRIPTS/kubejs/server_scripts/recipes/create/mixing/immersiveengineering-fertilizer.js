ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {"tag": "c:dusts/saltpeter"},{"tag": "c:slag"},
            {"tag": "c:dusts/sulfur"},
            {"amount": 750,"fluid": "minecraft:water","type": "fluid_stack"}
            ],
        "results": [
            {"count": 4,
            "id": "immersiveengineering:fertilizer"}
            ]
        }
    )
})