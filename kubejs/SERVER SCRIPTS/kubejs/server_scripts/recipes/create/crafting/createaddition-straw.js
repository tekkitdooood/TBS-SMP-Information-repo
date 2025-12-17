ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "sticks",
        "key": {
            "#": 
                {"item": "immersiveengineering:plate_duroplast"}
            },
        "pattern": [
            "  #",
            " # ",
            "#  "
        ],
        "result": 
            {"count": 1,
            "id": "createaddition:straw"}
    })
})