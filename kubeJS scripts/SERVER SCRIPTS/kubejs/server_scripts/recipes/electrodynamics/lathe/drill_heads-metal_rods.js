ServerEvents.recipes(event => {
    const stick_list = ["steel", "iron", "aluminum", "netherite"]; 
	const drillhead_list = {
		hslasteel: {mod: "electrodynamics"},
		stainlesssteel: {mod: "electrodynamics"}, 
		titanium: {mod: "electrodynamics"}, 
		titaniumcarbide: {mod: "electrodynamics"}
	}

	function stick_lathe (stick_material) {
		event.custom(
			{"type": "electrodynamics:lathe_recipe",
			"experience": 0.1,
			"group": "electrodynamics",
			"iteminputs": 
				[{"count": 1,
			"ingredient": 
				{"tag": `c:ingots/${stick_material}`}}],
			"output": 
				{"count": 2,
				"id": `immersiveengineering:stick_${stick_material}`},
			"ticks": 120,
			"usagepertick": 450.0});
			}

	function drillhead_lathe (drillhead_material, mod) {
		event.custom(
			{"type": "electrodynamics:lathe_recipe",
			"experience": 0.1,
			"group": "electrodynamics",
			"iteminputs": 
				[{"count": 5,
			"ingredient": 
				{"tag": `c:ingots/${drillhead_material}`}}],
			"output": 
				{"count": 1,
				"id": `${mod}:drillhead${drillhead_material}`},
			"ticks": 240,
			"usagepertick": 550.0});
			}
	stick_list.forEach(stick_material => stick_lathe(stick_material)); 

	for (const material in drillhead_list) {
		let data = drillhead_list[material];
		drillhead_lathe(material, data.mod)
	}
})