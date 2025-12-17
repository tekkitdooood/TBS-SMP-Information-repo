RecipeViewerEvents.addEntries("item", (event) => {
    const items = Item.getList()

    for (const stack of items) {
        if (stack.id.startsWith("codmod")) {
            event.add(stack.id)
        }
    }
    event.add("create:shadow_steel")
    event.add("create:refined_radiance")

})


RecipeViewerEvents.removeEntries("item", (event) => {
    const jei_remove_list = ["createaddition:copper_spool",
	"createaddition:electrum_ingot",
	"createaddition:capacitor",
	"createaddition:electrum_amulet",
	"createaddition:electrum_nugget",
	"createaddition:electrum_sheet",
	"createaddition:zinc_sheet",
	"createaddition:iron_wire",
	"createaddition:gold_wire",
	"createaddition:electrum_wire",
	"createaddition:spool",
	"createaddition:gold_spool",
	"createaddition:electrum_spool",
	"createaddition:copper_rod",
	"createaddition:iron_rod",
	"createaddition:gold_rod",
	"createaddition:electrum_rod",
	"createaddition:brass_rod",
	"createaddition:rolling_mill",
	"createaddition:large_connector",
	"createaddition:redstone_relay",
	"createaddition:chocolate_cake",
	"createaddition:honey_cake",
	"createaddition:barbed_wire",
	"createaddition:tesla_coil",
	"createaddition:modular_accumulator",
	"createaddition:portable_energy_interface",
	"createaddition:seed_oil_bucket",
	"createaddition:bioethanol_bucket",
	"createaddition:copper_wire",
	"electrodynamics:mineralcrusher",
	"electrodynamics:mineralcrusherdouble",
	"electrodynamics:mineralcrushertriple",
	"electrodynamics:electricbaton",
	"electrodynamics:railgunplasma",
	"electrodynamics:mechanizedcrossbow",
	"electrodynamics:fermentationplant",
	"electrodynamics:nuggettin",
	"electrodynamics:rodsteel",
	"immersiveengineering:mold_wire",
	"electrodynamics:drillheadsteel",
	"electrodynamics:electricdrill",
	"electrodynamics:orethorium",
	"electrodynamics:deepslateorethorium",
	"electrodynamics:raworethorium",
	"electrodynamics:raworeblockthorium",
	"electrodynamics:oremonazite",
	"electrodynamics:deepslateoremonazite"]
    function jei_remover (removed_item) {
        event.remove(removed_item)
    }
    jei_remove_list.forEach(removed_item => jei_remover(removed_item))
})



RecipeViewerEvents.removeEntries("fluid", (event) => {
    const jei_remove_list = [
        "createaddition:seed_oil",
	    "createaddition:bioethanol"
    ]
    
    function jei_remover (removed_item) {
        event.remove(removed_item)
    }
    jei_remove_list.forEach(removed_item => jei_remover(removed_item))
})