ServerEvents.recipes(e => {
  // Charging recipes
  e.remove({ output: "ae2:meteorite_compass" });
  // e.recipes.create.charging('ae2:meteorite_compass', 'minecraft:compass').energy(5000).maxChargeRate(200);
  e.custom({
    type: 'createaddition:charging',
    ingredients: [
      { item: 'minecraft:compass' }
    ],
    results: [
      { id: 'ae2:meteorite_compass', count: 1 }
    ],
    energy: 5000,
    max_charge_rate: 200
  });
  // Compacting recipes
  e.remove({ output: "ae2:fluix_glass_cable" });
  e.recipes.create.compacting(Item.of('ae2:fluix_glass_cable', 3), ['ae2:quartz_fiber', 'ae2:fluix_crystal']).heated();
  e.remove({ output: "ae2:quartz_fiber" });
  e.recipes.create.compacting(Item.of('ae2:quartz_fiber', 3), [Ingredient.of('#c:glass_blocks'), Ingredient.of('#c:glass_blocks'), Ingredient.of('#c:glass_blocks'), 'ae2:certus_quartz_dust', 'ae2:certus_quartz_dust']).heated();
  // Cutting recipes
  e.remove({ output: "ae2:cable_anchor" });
  e.recipes.create.cutting(Item.of('ae2:cable_anchor', 4), Ingredient.of('#ae2:metal_ingots')).processingTime(150);
  // Deploying recipes
  // Haunting recipes
  e.remove({ output: "ae2:sky_stone_block" });
  e.recipes.create.haunting('ae2:sky_stone_block', 'minecraft:iron_block');
  // TODO: Mechanical_crafting recipes
  // Mixing recipes
  e.remove({ output: "minecraft:basalt" });
  e.recipes.create.mixing('minecraft:basalt', ['minecraft:calcite', 'minecraft:iron_ingot', Fluid.of('minecraft:lava', 250)]);
  e.remove({ output: "ae2:certus_quartz_crystal" });
  e.recipes.create.mixing(Item.of('ae2:certus_quartz_crystal', 2), ['ae2:certus_quartz_dust', 'ae2:charged_certus_quartz_crystal', Fluid.of('minecraft:water', 250)]);
  e.remove({ output: "ae2:chipped_budding_quartz" });
  e.recipes.create.mixing('ae2:chipped_budding_quartz', ['ae2:damaged_budding_quartz', 'ae2:charged_certus_quartz_crystal', Fluid.of('minecraft:water', 500)]);
  e.remove({ output: "ae2:damaged_budding_quartz" });
  e.recipes.create.mixing('ae2:damaged_budding_quartz', ['ae2:quartz_block', 'ae2:charged_certus_quartz_crystal', Fluid.of('minecraft:water', 500)]);
  e.remove({ output: "ae2:flawed_budding_quartz" });
  e.recipes.create.mixing('ae2:flawed_budding_quartz', ['ae2:chipped_budding_quartz', 'ae2:charged_certus_quartz_crystal', Fluid.of('minecraft:water', 500)]);
  e.remove({ output: "ae2:flawless_budding_quartz" });
  e.recipes.create.mixing('ae2:flawless_budding_quartz', ['ae2:flawed_budding_quartz', 'ae2:fluix_pearl', 'create:rose_quartz', 'create:experience_nugget', 'minecraft:amethyst_block', Fluid.of('create:potion', 1000)]).superheated();
  e.remove({ output: "ae2:fluix_crystal" });
  e.recipes.create.mixing('ae2:fluix_crystal', ['ae2:fluix_dust', 'ae2:charged_certus_quartz_crystal', Fluid.of('minecraft:water', 250)]);
  e.remove({ output: "ae2:fluix_pearl" });
  e.recipes.create.mixing('ae2:fluix_pearl', ['minecraft:ender_pearl', 'ae2:fluix_dust', 'ae2:fluix_dust', 'ae2:fluix_dust', 'ae2:fluix_dust', Fluid.of('minecraft:water', 250)]).superheated();
  e.remove({ output: "ae2:quartz_glass" });
  e.recipes.create.mixing(Item.of('ae2:quartz_glass', 2), ['ae2:certus_quartz_dust', 'ae2:certus_quartz_dust', Ingredient.of('#c:glass_blocks'), Ingredient.of('#c:glass_blocks')]).heated();
  e.remove({ output: "ae2:quartz_vibrant_glass" });
  e.recipes.create.mixing('ae2:quartz_vibrant_glass', ['ae2:quartz_glass', 'minecraft:glowstone_dust']).heated();
  // TODO: Sequenced_assembly recipes
  // Cable recipes
  e.remove({ output: "ae2:fluix_covered_cable" });
  e.recipes.create.deploying('ae2:fluix_covered_cable', ['ae2:fluix_glass_cable', Ingredient.of('#minecraft:wool')]);
  e.remove({ output: "ae2:fluix_smart_cable" });
  e.recipes.create.deploying('ae2:fluix_smart_cable', ['ae2:fluix_covered_cable', 'ae2:semi_dark_monitor']);
  e.remove({ output: "ae2:fluix_smart_dense_cable" });
  e.recipes.create.deploying('ae2:fluix_smart_dense_cable', ['ae2:fluix_covered_dense_cable', 'ae2:semi_dark_monitor']);
  // Card recipes
  e.remove({ output: "ae2:capacity_card" });
  e.recipes.create.deploying('ae2:capacity_card', ['ae2:basic_card', Ingredient.of(['ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal'])]);
  e.remove({ output: "ae2:crafting_card" });
  e.recipes.create.deploying('ae2:crafting_card', ['ae2:basic_card', 'minecraft:crafting_table']);
  e.remove({ output: "ae2:energy_card" });
  e.recipes.create.deploying('ae2:energy_card', ['ae2:advanced_card', 'ae2:dense_energy_cell']);
  e.remove({ output: "ae2:equal_distribution_card" });
  e.recipes.create.deploying('ae2:equal_distribution_card', ['ae2:advanced_card', 'ae2:calculation_processor']);
  e.remove({ output: "ae2:fuzzy_card" });
  e.recipes.create.deploying('ae2:fuzzy_card', ['ae2:advanced_card', Ingredient.of('#minecraft:wool')]);
  e.remove({ output: "ae2:inverter_card" });
  e.recipes.create.deploying('ae2:inverter_card', ['ae2:advanced_card', 'minecraft:redstone_torch']);
  e.remove({ output: "ae2:redstone_card" });
  e.recipes.create.deploying('ae2:redstone_card', ['ae2:basic_card', 'minecraft:redstone_torch']);
  e.remove({ output: "ae2:speed_card" });
  e.recipes.create.deploying('ae2:speed_card', ['ae2:advanced_card', 'ae2:fluix_crystal']);
  e.remove({ output: "ae2:void_card" });
  e.recipes.create.deploying('ae2:void_card', ['ae2:basic_card', 'ae2:calculation_processor']);
  // Cell recipes
  e.remove({ output: "ae2:fluid_storage_cell_16k" });
  e.recipes.create.deploying('ae2:fluid_storage_cell_16k', ['ae2:fluid_cell_housing', 'ae2:cell_component_16k']);
  e.remove({ output: "ae2:fluid_storage_cell_1k" });
  e.recipes.create.deploying('ae2:fluid_storage_cell_1k', ['ae2:fluid_cell_housing', 'ae2:cell_component_1k']);
  e.remove({ output: "ae2:fluid_storage_cell_256k" });
  e.recipes.create.deploying('ae2:fluid_storage_cell_256k', ['ae2:fluid_cell_housing', 'ae2:cell_component_256k']);
  e.remove({ output: "ae2:fluid_storage_cell_4k" });
  e.recipes.create.deploying('ae2:fluid_storage_cell_4k', ['ae2:fluid_cell_housing', 'ae2:cell_component_4k']);
  e.remove({ output: "ae2:fluid_storage_cell_64k" });
  e.recipes.create.deploying('ae2:fluid_storage_cell_64k', ['ae2:fluid_cell_housing', 'ae2:cell_component_64k']);
  e.remove({ output: "ae2:item_storage_cell_16k" });
  e.recipes.create.deploying('ae2:item_storage_cell_16k', ['ae2:item_cell_housing', 'ae2:cell_component_16k']);
  e.remove({ output: "ae2:item_storage_cell_1k" });
  e.recipes.create.deploying('ae2:item_storage_cell_1k', ['ae2:item_cell_housing', 'ae2:cell_component_1k']);
  e.remove({ output: "ae2:item_storage_cell_256k" });
  e.recipes.create.deploying('ae2:item_storage_cell_256k', ['ae2:item_cell_housing', 'ae2:cell_component_256k']);
  e.remove({ output: "ae2:item_storage_cell_4k" });
  e.recipes.create.deploying('ae2:item_storage_cell_4k', ['ae2:item_cell_housing', 'ae2:cell_component_4k']);
  e.remove({ output: "ae2:item_storage_cell_64k" });
  e.recipes.create.deploying('ae2:item_storage_cell_64k', ['ae2:item_cell_housing', 'ae2:cell_component_64k']);
  e.remove({ output: "ae2:spatial_storage_cell_128" });
  e.recipes.create.deploying('ae2:spatial_storage_cell_128', ['ae2:item_cell_housing', 'ae2:spatial_cell_component_128']);
  e.remove({ output: "ae2:spatial_storage_cell_16" });
  e.recipes.create.deploying('ae2:spatial_storage_cell_16', ['ae2:item_cell_housing', 'ae2:spatial_cell_component_16']);
  e.remove({ output: "ae2:spatial_storage_cell_2" });
  e.recipes.create.deploying('ae2:spatial_storage_cell_2', ['ae2:item_cell_housing', 'ae2:spatial_cell_component_2']);
  e.remove({ output: "ae2:view_cell" });
  e.recipes.create.deploying('ae2:view_cell', ['ae2:item_cell_housing', Ingredient.of(['ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal'])]);
  // Craft_unit recipes
  e.remove({ output: "ae2:16k_crafting_storage" });
  e.recipes.create.deploying('ae2:16k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_16k']);
  e.remove({ output: "ae2:1k_crafting_storage" });
  e.recipes.create.deploying('ae2:1k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_1k']);
  e.remove({ output: "ae2:256k_crafting_storage" });
  e.recipes.create.deploying('ae2:256k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_256k']);
  e.remove({ output: "ae2:4k_crafting_storage" });
  e.recipes.create.deploying('ae2:4k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_4k']);
  e.remove({ output: "ae2:64k_crafting_storage" });
  e.recipes.create.deploying('ae2:64k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_64k']);
  e.remove({ output: "ae2:crafting_accelerator" });
  e.recipes.create.deploying('ae2:crafting_accelerator', ['ae2:crafting_unit', 'ae2:engineering_processor']);
  e.remove({ output: "ae2:crafting_monitor" });
  e.recipes.create.deploying('ae2:crafting_monitor', ['ae2:crafting_unit', 'ae2:storage_monitor']);
  // Network recipes
  e.remove({ output: "ae2:crafting_terminal" });
  e.recipes.create.deploying('ae2:crafting_terminal', [Ingredient.of(['ae2:terminal']), 'ae2:crafting_card']);
  e.remove({ output: "ae2:energy_level_emitter" });
  e.recipes.create.deploying('ae2:energy_level_emitter', ['ae2:level_emitter', 'ae2:charged_certus_quartz_crystal']);
  e.remove({ output: "ae2:level_emitter" });
  e.recipes.create.deploying('ae2:level_emitter', ['ae2:calculation_processor', 'minecraft:redstone_torch']);
  e.remove({ output: "ae2:pattern_encoding_terminal" });
  e.recipes.create.deploying('ae2:pattern_encoding_terminal', ['ae2:crafting_terminal', 'ae2:engineering_processor']);
  e.remove({ output: "ae2:storage_bus" });
  e.recipes.create.deploying('ae2:storage_bus', [Ingredient.of(['ae2:interface', 'ae2:cable_interface']), 'minecraft:piston']);
  e.remove({ output: "ae2:storage_monitor" });
  e.recipes.create.deploying('ae2:storage_monitor', [Ingredient.of(['ae2:monitor', 'ae2:dark_monitor', 'ae2:semi_dark_monitor']), 'ae2:level_emitter']);
  e.remove({ output: "ae2:toggle_bus" });
  e.recipes.create.deploying('ae2:toggle_bus', ['ae2:fluix_glass_cable', 'create:powered_toggle_latch']);
  // Processor recipes
  e.remove({ output: "ae2:calculation_processor_press" });
  e.recipes.create.deploying('ae2:calculation_processor_press', ['minecraft:iron_block', 'ae2:calculation_processor_press']);
  e.remove({ output: "ae2:engineering_processor_press" });
  e.recipes.create.deploying('ae2:engineering_processor_press', ['minecraft:iron_block', 'ae2:engineering_processor_press']);
  e.remove({ output: "ae2:logic_processor_press" });
  e.recipes.create.deploying('ae2:logic_processor_press', ['minecraft:iron_block', 'ae2:logic_processor_press']);
  e.remove({ output: "ae2:printed_calculation_processor" });
  e.recipes.create.deploying('ae2:printed_calculation_processor', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press']);
  e.remove({ output: "ae2:printed_engineering_processor" });
  e.recipes.create.deploying('ae2:printed_engineering_processor', ['minecraft:diamond', 'ae2:engineering_processor_press']);
  e.remove({ output: "ae2:printed_logic_processor" });
  e.recipes.create.deploying('ae2:printed_logic_processor', ['minecraft:gold_ingot', 'ae2:logic_processor_press']);
  e.remove({ output: "ae2:printed_silicon" });
  e.recipes.create.deploying('ae2:printed_silicon', [Ingredient.of('#c:silicon'), 'ae2:silicon_press']);
  e.remove({ output: "ae2:silicon_press" });
  e.recipes.create.deploying('ae2:silicon_press', ['minecraft:iron_block', 'ae2:silicon_press']);
});