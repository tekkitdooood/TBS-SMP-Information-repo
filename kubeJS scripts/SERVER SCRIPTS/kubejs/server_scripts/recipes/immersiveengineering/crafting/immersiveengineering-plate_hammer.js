ServerEvents.recipes(event => {
    const metal_list = ["iron", "silver", "aluminum", "gold", "steel", "electrum", "uranium", "copper", "nickel", "lead", "constantan"];

    function plate_hammer (metal) { 
        event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "sticks",
        "key": {
            "H": 
                {"item": "immersiveengineering:hammer"},
            "I": 
                {"tag": `c:ingots/${metal}`}
            },
        "pattern": [
            " I ",
            " I ",
            " H "
        ],
        "result": 
            {"count": 1,
            "id": `immersiveengineering:plate_${metal}`}
        })
    }
    metal_list.forEach(metal => plate_hammer(metal));
})