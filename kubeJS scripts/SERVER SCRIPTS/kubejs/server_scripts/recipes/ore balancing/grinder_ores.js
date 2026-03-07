ServerEvents.recipes(event => {
    for (const material in ore_list) {
	    let info = ore_list[material]
	    let id = info.output[0].id
	    
        if (material != "netherite_scrap" && material != "molybdenum") {
            grinder(`c:ores/${material}`, id, info.itembi, event)
            grinder(`c:raw_materials/${material}`, id, info.itembi, event)
        } else {
            grinder(`c:ores/${material}`, id, info.itembi, event)
        }
    }
})