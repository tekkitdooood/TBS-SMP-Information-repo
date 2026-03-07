ServerEvents.recipes(event => {
    event.remove({id:'immersiveengineering:crusher/raw_ore_uranium'})
    event.remove({id:'immersiveengineering:crusher/raw_ore_tin'})
    event.remove({id:'immersiveengineering:crusher/ore_uranium'})

    for (const material in ore_list) {
        let info = ore_list[material]
        let id = info.output[0].id
        
        if (material != "netherite_scrap" && material != "molybdenum") {
            crusher(`c:ores/${material}`, id, event)
            crusher(`c:raw_materials/${material}`, id, event)
        } else if (material === "netherite_scrap") {
            crusher(`c:ores/${material}`, id, event)
        } else {
            crusher(`c:ores/${material}`, id, event)
        }
    }
})