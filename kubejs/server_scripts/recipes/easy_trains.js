const createMachine = (machineItem, event, outputIngredient, inputIngredient) => {
    machineItem = Ingredient.of(machineItem)
    outputIngredient = Item.of(outputIngredient)

    event.remove({ output: outputIngredient })
    if (inputIngredient) {
        inputIngredient = Ingredient.of(inputIngredient)
        event.custom({
            "type": "create:item_application",
            "ingredients": [
                machineItem.toJson(),
                inputIngredient.toJson()
            ],

            "results": (outputIngredient.isBlock() && outputIngredient.getCount() > 1) ?
                [

                    outputIngredient.withCount(1).toJson(),
                    outputIngredient.withCount(outputIngredient.getCount() - 1).toJson()
                ]
                :
                [
                    outputIngredient.toJson()
                ]

        })
    }
    else {
        event.stonecutting(outputIngredient, machineItem)
    }
}

const trainMachine = (event, outputIngredient, inputIngredient) => {
    return createMachine("create:railway_casing", event, outputIngredient, inputIngredient);
};

ServerEvents.recipes(e => {
    // Blast deepslate to Magma blocks
    e.blasting("minecraft:magma_block", "minecraft:deepslate");

    // Machine Crafting
    trainMachine(e, Item.of("create:controls", 1), "minecraft:lever");
    trainMachine(e, Item.of("create:track_station", 2));
    trainMachine(e, Item.of("create:track_signal", 4));
    trainMachine(e, Item.of("create:schedule", 4));
    trainMachine(e, Item.of("create:train_door", 3));
    trainMachine(e, Item.of("create:train_trapdoor", 2));
});
