// https://github.com/liopyu/ussr/blob/main/kubejs/server_scripts/newjoin.js

PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('new_player')) {
    event.player.stages.add('new_player')
    event.server.runCommandSilent(`give ${event.entity.username} create:wrench`)
    event.server.runCommandSilent(`give ${event.entity.username} ftbquests:book`)
    event.server.runCommandSilent(`give ${event.entity.username} minecraft:baked_potato 32`)
	event.entity.setItemSlot(5, 'create:goggles')
  }
});