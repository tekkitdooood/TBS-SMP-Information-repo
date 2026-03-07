ServerEvents.recipes(event => {

    const rod_list = {
        iron: {mod: "minecraft", input: "iron_ingot"}, 
        steel: {mod: "immersiveengineering", input: "ingot_steel"}, 
        aluminum: {mod: "immersiveengineering", input: "ingot_aluminum"}, 
        netherite: {mod: "minecraft", input: "netherite_ingot"}};

    function rod_craft(material, mod, input) {
        event.shaped(
        Item.of(`immersiveengineering:stick_${material}`, 1),
        [
            '   ',
            'HPC',
            '   '
        ],
        {
            H: 'immersiveengineering:hammer',
            P: `${mod}:${input}`,
            C: 'immersiveengineering:wirecutter'
        }
    )
}
    for (const material in rod_list) {
        let data = rod_list[material];
        let mod = data.mod;
        let input = data.input;
        rod_craft(material, mod, input)
    }
})