ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "III",
            "DRD",
            "III"
        ],
        "key": {
            "D": {
            "item": "minecraft:hopper"
            },
            "I": {
            "tag": "c:ingots/iron"
            },
            "R": {
            "tag": "c:dusts/redstone"
            }
        },
        "result": {
            "id": "pipez:item_pipe",
            "count": 6
        }
    } 
)

})