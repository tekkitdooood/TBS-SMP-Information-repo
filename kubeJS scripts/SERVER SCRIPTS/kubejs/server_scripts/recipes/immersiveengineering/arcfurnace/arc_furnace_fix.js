ServerEvents.recipes(event => {
event.remove({id: "immersiveengineering:arcfurnace/steel"})

const new_arc_outputs = {
    titaniumcarbide: 
        {additives: [{tag: "c:dusts/netherite"}], 
        energy: 512000, 
        input: {basePredicate: {tag: "c:ingots/titanium"}, count: 1}, 
        result: [{count: 2, id: "electrodynamics:ingottitaniumcarbide"}], 
        time: 650},
     steel: 
        {additives: [{tag: "c:dusts/coal_coke"}], 
        energy: 708000, 
        input: {basePredicate: {tag: "c:ingots/iron"}, count: 2}, 
        result: [{count: 5, id: "immersiveengineering:ingot_steel"}], 
        time: 288},

    hslasteel: 
        {additives: [
            {tag: "c:ingots/molybdenum"},
            {tag: "c:ingots/titanium"}
        ], 
        energy: 384000, 
        input: {basePredicate: {tag: "c:ingots/steel"}, count: 10}, 
        result: [{count: 15, id: "electrodynamics:ingothslasteel"}], 
        time: 550},

    vanadiumsteel: 
        {additives: [
            {tag: "c:ingots/vanadium"}
        ], 
        energy: 230400, 
        input: {basePredicate: {tag: "c:ingots/steel"}, count: 5}, 
        result: [{count: 6, id: "electrodynamics:ingotvanadiumsteel"}], 
        time: 280},

    stainlesssteel: 
        {additives: [
            {tag: "c:ingots/molybdenum"},
            {tag: "c:ingots/chromium"}
        ], 
        energy: 256000, 
        input: {basePredicate: {tag: "c:ingots/steel"}, count: 10}, 
        result: [{count: 15, id: "electrodynamics:ingotstainlesssteel"}], 
        time: 300}
}
    
function arc_furnace_recipes(additives, energy, input, result, time) { 
    event.custom({
        type: "immersiveengineering:arc_furnace",
            additives: 
                additives,
        energy: energy,
        input: input,
        results: result,
        slag: 
            {tag: "c:slag"},
        time: time
        })
    }

for (const material in new_arc_outputs) {
    let data = new_arc_outputs[material];
    arc_furnace_recipes(data.additives, data.energy, data.input, data.result, data.time);
    }
});
