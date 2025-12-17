ServerEvents.recipes(event => {
    function ingotFix (ingot) {
		const ieIngot = `immersiveengineering:ingot_${ingot}`
		const edIngot = `electrodynamics:ingot${ingot}`
		
		event.replaceOutput({output: edIngot}, edIngot, ieIngot)
	}
	const ingots = ['silver', 'lead', 'aluminum']
    ingots.forEach(ingot => ingotFix(ingot))
})