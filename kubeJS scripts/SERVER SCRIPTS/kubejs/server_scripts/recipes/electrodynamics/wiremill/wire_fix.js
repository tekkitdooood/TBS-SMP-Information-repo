ServerEvents.recipes(event => {
    event.remove({output: '#c:wires',type: "immersiveengineering:metal_press",});
    event.remove({output: '#c:wires',type:"create:cutting"});
    event.remove({not:{output:'electrodynamics:titaniumheatcoil'}, type:'electrodynamics:wire_mill_recipe'});

   function edWire(edMetal) {
        event.custom({
            "type": "electrodynamics:wire_mill_recipe",
            "experience": 0.1,
            "group": "electrodynamics",
            "iteminputs": [{
                "count": 1,
                "ingredient": 
                    {"tag": `c:ingots/${edMetal}`}}],
            "output": 
                {"count": 2,
                "id": `electrodynamics:wire${edMetal}`},
            "ticks": 200,
            "usagepertick": 125.0});
            }
	
	const edMetals = [
	    "copper",
	    "iron",
	    "tin",
	    "silver",
	    "gold",
        "superconductive"
    ];
		
    edMetals.forEach(edMetal => edWire(edMetal));

    function ieWire(ieMetal) {
        event.custom({
            "type": "electrodynamics:wire_mill_recipe",
            "experience": 0.1,
            "group": "electrodynamics",
            "iteminputs": [{
                "count": 1,
                "ingredient": 
                    {"tag": `c:ingots/${ieMetal}`}}],
                "output": {
                    "count": 2,
                    "id": `immersiveengineering:wire_${ieMetal}`},
                "ticks": 200,
                "usagepertick": 125.0});
                }
	
    const ieMetals = [
		"electrum", 
		"lead", 
		"steel", 
		"aluminum"];
		
	ieMetals.forEach(ieMetal => ieWire(ieMetal));

    function edCraftWire(edMetal) {
        if (["tin", "superconductive"].includes(edMetal)) return;
        event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": 
                [{"tag": `c:plates/${edMetal}`},
                {"item": "immersiveengineering:wirecutter"}],
            "result": 
                {"count": 1,
                "id": `electrodynamics:wire${edMetal}`}});
            }  
    edMetals.forEach(edMetal => edCraftWire(edMetal))   
    event.remove({id:'electrodynamics:wire_copper'});
    event.replaceInput(
        {input: 'immersiveengineering:wire_copper'},
        'immersiveengineering:wire_copper',
        'electrodynamics:wirecopper') 

    event.remove({output:'immersiveengineering:wire_copper'});

    event.custom({
            "type": "electrodynamics:wire_mill_recipe",
            "experience": 0.1,
            "group": "electrodynamics",
            "itembi": [{
                "chance": 1.0,
                "item": {
                    "count": 1,
                    "id": "minecraft:iron_ingot"
                }
            }],
            "iteminputs": [{
                "count": 1,
                "ingredient": 
                    {"item": `createaddition:festive_spool`}}],
                "output": {
                    "count": 4,
                    "id": `electrodynamics:wirecopper`},
                "ticks": 200,
                "usagepertick": 125.0
    });
});