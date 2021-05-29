const Discord = require("discord.js")
const config = require("./json/config.json")

const client = new Discord.Client()

client.on("ready", async () => {
	console.log("ready!")
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {
	const hadRole = oldMember.roles.cache.find(role => role.name === 'Nitro Booster');
	const hasRole = newMember.roles.cache.find(role => role.name === 'Nitro Booster');
	
	const BoosterEmbed = new Discord.MessageEmbed()
		.setTitle(`Someone Boosted the server!`)
		.setThumbnail(client.user.displayAvatarURL())
		.setColor(`BLUE`)
		.setDescription(`
FILL ME!
		`)
		.setFooter(newMember.user.tag, newMember.user.displayAvatarURL())
		.setTimestamp()

	if (!hadRole && hasRole) {
	  newMember.guild.channels.cache.get('CHANNEL-ID').send(`<@!${newMember.user.id}>`, {embed: BoosterEmbed});
	}
});

client.login(config.token)
