ServerEvents.recipes(event => {
    event.custom({
  		"type": "electrodynamics:lathe_recipe",
  		"experience": 0.10000000149011612,
  		"group": "electrodynamics",
  		"iteminputs":
			[{"count": 1,
      	"ingredient": 
			{"item": "immersiveengineering:ingot_hop_graphite"}}],
  		"output": 
			{"count": 1,
    		"id": "immersiveengineering:graphite_electrode"},
  		"ticks": 200,
  		"usagepertick": 350.0
})
})