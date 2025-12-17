ServerEvents.recipes(event => {
    const plateTypes = ["hslasteel", "titanium", "titaniumcarbide", "stainlesssteel", "vanadiumsteel", "lithium", "bronze"]
    
    function plateAdd(plateType) {
        event.custom({
            "type":"immersiveengineering:metal_press",
            "energy":2400,
            "input":
                {"tag": `c:ingots/${plateType}`},
                "mold": "immersiveengineering:mold_plate",
            "result": {
                "id": `electrodynamics:plate${plateType}`
                }
            }
        )
    }
    plateTypes.forEach(plateType => plateAdd(plateType))
})