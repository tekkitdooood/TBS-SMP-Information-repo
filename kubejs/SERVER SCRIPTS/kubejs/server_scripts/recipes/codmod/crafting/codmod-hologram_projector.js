ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
  "pattern": [
    "IGI",
    "IDI",
    "ICI"
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "minecraft:diamond"
    },
    "G": {
      "item": "minecraft:tinted_glass"
    },
    "C": {
      "item": "minecraft:redstone_dust"
    }
  },
  "result": {
    "id": "codmod:hologram_projector",
    "count": 1
    }})
})