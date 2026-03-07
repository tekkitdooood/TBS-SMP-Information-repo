ServerEvents.recipes(event => {
    
    function crushing_wheel_crystals (input, output, event) {
            event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {"tag": input}
                    ],
                "processing_time": 250,
                "results": [
                    {"count": 1, "id": output}
                    ]
                }
            )
        }

        function crusher_crystals (input, output, event) {
            event.custom({
                "type": "immersiveengineering:crusher",
                "energy": 6400,
                "input": {"tag": input},
                "result": {
                    "basePredicate": {
                        "item": output
                    },
                    "count": 1
                    }
                }
            )
        }

        function grinder_crystals (input, output, event) {
            event.custom({
                "type": "electrodynamics:mineral_grinder_recipe",
                "experience": 0.5,
                "group": "electrodynamics",
                "iteminputs": [
                    {
                    "count": 1,
                    "ingredient": {
                        "tag": input
                        }
                    }
                ],
                "output": {
                    "count": 1,
                    "id": output
                    },
                "ticks": 80,
                "usagepertick": 300
                }
            )
        }
    
    
    
    const crystal_list = ["iron", "gold", "copper", "tin", "silver", "lead", "vanadium", "lithium", "molybdenum", "netherite", "aluminum", "titanium", "chromium"]
    
    function crystal_recipes (material) {
        crushing_wheel_crystals(`c:crystals/${material}`, `electrodynamics:dust${material}`, event)
        crusher_crystals(`c:crystals/${material}`, `electrodynamics:dust${material}`, event)
        grinder_crystals(`c:crystals/${material}`, `electrodynamics:dust${material}`, event)
        
    }

    crystal_list.forEach(material => (crystal_recipes(material)))
})