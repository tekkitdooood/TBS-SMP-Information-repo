ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "sticks",
        "key": {
            "#": 
                {"item": "codmod:public_static_void"}
            },
        "pattern": [
            "   ",
            "###",
            "   "
        ],
        "result": 
            {"count": 6,
            "id": "codmod:public_static_void_slab"}
    })
})