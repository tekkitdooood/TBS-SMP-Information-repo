ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "III",
            "BRB",
            "III"
        ],
        "key": {
            "B": {
            "tag": "c:wires/copper"
            },
            "I": {
            "tag": "c:ingots/iron"
            },
            "R": {
            "tag": "c:dusts/redstone"
            }
        },
        "result": {
            "id": "pipez:energy_pipe",
            "count": 6
        }

        }
    )
})