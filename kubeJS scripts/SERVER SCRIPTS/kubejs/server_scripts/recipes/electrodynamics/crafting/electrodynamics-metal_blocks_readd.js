ServerEvents.recipes(event => {
    const block_to_ingot = ["hslasteel", "titaniumcarbide", "vanadiumsteel", "stainlesssteel"];
    
    function readd_block(materialz) {
        event.shapeless(
        Item.of(`electrodynamics:ingot${materialz}`, 9),
        [
            `electrodynamics:resourceblock${materialz}`
        ])
    }
    block_to_ingot.forEach(materialz => readd_block(materialz));
})