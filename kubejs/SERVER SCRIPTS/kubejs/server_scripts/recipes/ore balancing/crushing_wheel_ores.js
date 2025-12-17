ServerEvents.recipes(event => {
    
    event.remove({id:`create:crushing/obsidian`})
    event.remove({id:`create:crushing/nether_gold_ore`})
    for (const material in ore_list) {
        let info = ore_list[material]
        event.remove({id:`create:crushing/${material}_ore`})
        event.remove({id:`create:crushing/raw_${material}`})
        event.remove({id:`create:crushing/deepslate_${material}_ore`})
        
        
        if (material != "netherite_scrap" && material != "molybdenum") {
            crushing_wheel(`c:ores/${material}`, info.output, event)
            crushing_wheel(`c:raw_materials/${material}`, info.output, event)
        } else if (material === "netherite_scrap") {
            crushing_wheel(`c:ores/${material}`, info.output, event)
        } else {
            crushing_wheel(`c:ores/${material}`, info.output, event)
        }
    }

})