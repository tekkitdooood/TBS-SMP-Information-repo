ServerEvents.recipes(event => {
    event.custom({ 
        "type": "minecraft:crafting_shapeless",
        "category": "building",
        "ingredients": [
            {"item": "electrodynamics:sheetplastic"},
            {"tag": "c:foods/cooked_meat"},
            {"tag": "c:foods/cooked_meat"},
            {"tag": "c:raw_materials/uranium"},
            {"tag": "c:raw_materials/uranium"},
            {"item": "immersiveengineering:dust_wood"},
            {"item": "immersiveengineering:ethanol_bucket"}
        ],
        "result": 
            {"count": 1,
            "id": "codmod:mre"}
        }
    )
})