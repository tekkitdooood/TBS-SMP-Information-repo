ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {"item": "create:cinder_flour"}
            ],
        "results": [
            {"chance": 0.4,
            "count": 1,
            "id": "immersiveengineering:dust_sulfur"},
            {
                "chance": 0.4,
                "count": 1,
                "id": "minecraft:redstone"
            },
            {
                "chance": 0.05,
                "count": 1,
                "id": "electrodynamics:dustgold"
            }
        ]
    })
})