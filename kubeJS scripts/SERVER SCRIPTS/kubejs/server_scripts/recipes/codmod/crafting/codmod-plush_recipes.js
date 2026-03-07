ServerEvents.recipes(event => {
    const plush_list = ["garreth", "ancient", "skishel", "terra", "firelight", "scuffed", "normal_abbe", "pinky", "blade", "nuz", "zetos"]
    function plush_add (name) { 
        event.shaped(
            Item.of(`codmod:${name}_plushie`, 1),
            [
                "SWS",
                "W$W",
                "SWS"
            ],
            {
                S: "minecraft:string",
                W: "#minecraft:wool",
                $: "supplementaries:statue"
            }
        )
    }
    plush_list.forEach(name => plush_add(name))
})