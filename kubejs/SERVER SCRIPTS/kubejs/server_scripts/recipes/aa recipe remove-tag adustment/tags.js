ServerEvents.tags('item', event => { 
    event.add('c:wires/copper', 'electrodynamics:wirecopper')
    event.add('c:gems/fluorite', 'electrodynamics:raworefluorite')
    event.add('c:gems', 'electrodynamics:crystalhalite')
    event.add('c:gems', 'electrodynamics:crystalpotassiumchloride')
    event.add('c:plasticfibers', 'electrodynamics:plasticfibers')
    event.add('c:raw_materials/lithium', 'electrodynamics:raworelepidolite')
    event.add('c:raw_materials/vanadium', 'electrodynamics:raworevanadinite')
    event.add('c:raw_materials/salt', 'electrodynamics:crystalhalite')
    event.add('c:ender_eye', 'minecraft:ender_eye')
    event.add('c:ingots/scrap', 'minecraft:netherite_scrap')
    event.add('c:dusts/netherrack', 'create:cinder_flour')
    event.add('c:fertilizers', 'immersiveengineering:fertilizer')
    event.add('c:fertilizers', 'electrodyanmics:molybdenumfertilizer')
    event.add('c:ingots/_iron', 'minecraft:iron_ingot')
    event.add('c:ingots/_steel', 'immersiveengineering:ingot_steel')
    event.add('minecraft:beacon_payment_items', 'kubejs:tekkium_doooodgot')
    event.add('c:compost_materials', 'minecraft:rotten_flesh')
    event.add('c:compost_materials', 'createaddition:biomass')
    event.add('minecraft:beacon_base_material', 'kubejs:tekkium_bloooock')
    event.add('c:fertilizers', 'electrodynamics:molybdenumfertilizer')

function trims(material) {
    event.add('minecraft:trim_materials', material)
}
   
    const materials = [
        'create:brass_ingot',
        'create:experience_nugget',
        'create:refined_radiance',
        'create:rose_quartz',
        'create:shadow_steel',
        'immersiveengineering:ingot_lead',
        'electrodynamics:ingotlead',
        'immersiveengineering:ingot_steel',
        'electrodynamics:ingotsteel',
        'electrodynamics:ingottin',
        'immersiveengineering:ingot_uranium',
        'thebrokenscript:n',
        'kubejs:tekkium_doooodgot'
    ]
materials.forEach(material => trims(material));




const crystal_list = ["iron", "gold", "copper", "tin", "silver", "lead", "vanadium", "lithium", "molybdenum", "netherite", "aluminum", "titanium", "chromium"]


function crystals (material) {
    event.add(`c:crystals/${material}`, `electrodynamics:crystal${material}`)
}

crystal_list.forEach(material => crystals(material))

})

ServerEvents.tags('fluid', event => {
    event.add('c:boosted_biodiesel', 'immersiveengineering:high_power_biodiesel')
    event.add('c:lumisene', 'supplementaries:lumisene')
})