const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="Deffri Gans"
global.ownernumber = "6285954993954"
global.botname = "DEFFBOTz"
global.thumbnail = fs.readFileSync("./settings/deff.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/c2c9b56d819d15cba3ab5.jpg"
global.lolkey = 'RIFQIBOTZ' //apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})