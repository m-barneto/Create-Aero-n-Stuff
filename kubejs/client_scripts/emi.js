EmiPlusPlusEvents.registerGroups(event => {
    // Create a group from a Tag
    event.register("cans:all_logs", "#minecraft:logs")

    // Create a group for a specific item
    event.register("cans:command_blocks", "minecraft:command_block")
})