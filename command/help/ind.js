exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf Kak ${pushname} limit hari ini telah habis🥺\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` Fitur Ini Hanya Tersedia Untuk Owner BOTz!`
	}
exports.admin = (groupName) =>{
	return`Fitur Ini Hanya Tersedia Untuk Admin Group!`
	}
exports.adminB = () =>{
	return`Fitur Ini Hanya Tersedia Jika Bot Menjadi Admin!`
	}
exports.err = () =>{
	return`Maaf Kak Fotur Ini Sedang Eror🥺/nMungkin lagi Fix Sama Owner`
	}
exports.group = () =>{
	return`Fitur Hanya Tersedia Di Dalam Group!`
	}

exports.wait = () =>{
	return`*Screaping Metadata* . . .`
	}
exports.ok = () =>{
	return`Done Yah Kak✔️`
	}
exports.welcome = () =>{
	return`Semoga Betah Ya Kak, Jangan Lupa Baca Deskripsi Groupnya Kak🤗
`
      }
exports.leave = () =>{
	return`
Good Bye @${num.split('@')[0]}`
}
exports.allmenu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│ • ${prefix}spotify [url]
│ • ${prefix}spotifysearch [query]
│ • ${prefix}nhentai [code]
│ • ${prefix}nhentaipdf [code]
│ • ${prefix}nhentaisearch [query]
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├ *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│
├ *Islamic*
│ • ${prefix}listsurah
│ • ${prefix}alquran
│ • ${prefix}asmaulhusna
│ • ${prefix}kisahnabi
│ • ${prefix}alquranaudio
│ • ${prefix}jadwalsholat
│
├ *Maker Ephoto360*
│ • ${prefix}wetglass
│ • ${prefix}multicolor3d
│ • ${prefix}watercolor
│ • ${prefix}luxurygold
│ • ${prefix}galaxywallpaper
│ • ${prefix}lighttext
│ • ${prefix}beautifulflower
│ • ${prefix}puppycute
│ • ${prefix}royaltext
│ • ${prefix}heartshaped
│ • ${prefix}birthdaycake
│ • ${prefix}galaxystyle
│ • ${prefix}hologram3d
│ • ${prefix}greenneon
│ • ${prefix}glossychrome
│ • ${prefix}greenbush
│ • ${prefix}metallogo
│ • ${prefix}noeltext
│ • ${prefix}glittergold
│ • ${prefix}textcake
│ • ${prefix}starsnight
│ • ${prefix}wooden3d
│ • ${prefix}textbyname
│ • ${prefix}writegalacy
│ • ${prefix}galaxybat
│ • ${prefix}snow3d
│ • ${prefix}birthdayday
│ • ${prefix}goldplaybutton
│ • ${prefix}silverplaybutton
│ • ${prefix}freefire
│
├ *Maker TextPro*
│ • ${prefix}blackpink
│ • ${prefix}neon
│ • ${prefix}greenneon
│ • ${prefix}advanceglow
│ • ${prefix}futureneon
│ • ${prefix}sandwriting
│ • ${prefix}sandsummer
│ • ${prefix}sandengraved
│ • ${prefix}metaldark
│ • ${prefix}neonlight
│ • ${prefix}holographic
│ • ${prefix}text1917
│ • ${prefix}minion
│ • ${prefix}deluxesilver
│ • ${prefix}newyearcard
│ • ${prefix}bloodfrosted
│ • ${prefix}halloween
│ • ${prefix}jokerlogo
│ • ${prefix}fireworksparkle
│ • ${prefix}natureleaves
│ • ${prefix}bokeh
│ • ${prefix}toxic
│ • ${prefix}strawberry
│ • ${prefix}box3d
│ • ${prefix}roadwarning
│ • ${prefix}breakwall
│ • ${prefix}icecold
│ • ${prefix}luxury
│ • ${prefix}cloud
│ • ${prefix}summersand
│ • ${prefix}horrorblood
│ • ${prefix}thunder
│
├ *Game*
│ • ${prefix}tebakgambar 
│
├ *Hewan Menu*
│ • ${prefix}panda
│ • ${prefix}panda1
│ • ${prefix}koala
│ • ${prefix}bird
│ • ${prefix}cat
│ • ${prefix}dog
│ • ${prefix}fox
│
├ *Info*
│ • ${prefix}owner
│ • ${prefix}daftar
│
├ *Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}antilink 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}
	exports.gc = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
╭◪「 *GROUP MENU* 」
│ • ${prefix}antilink 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
└⬣
`
}
exports.makert = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *MAKER TEXTPRO* 」
│ • ${prefix}blackpink
│ • ${prefix}neon
│ • ${prefix}greenneon
│ • ${prefix}advanceglow
│ • ${prefix}futureneon
│ • ${prefix}sandwriting
│ • ${prefix}sandsummer
│ • ${prefix}sandengraved
│ • ${prefix}metaldark
│ • ${prefix}neonlight
│ • ${prefix}holographic
│ • ${prefix}text1917
│ • ${prefix}minion
│ • ${prefix}deluxesilver
│ • ${prefix}newyearcard
│ • ${prefix}bloodfrosted
│ • ${prefix}halloween
│ • ${prefix}jokerlogo
│ • ${prefix}fireworksparkle
│ • ${prefix}natureleaves
│ • ${prefix}bokeh
│ • ${prefix}toxic
│ • ${prefix}strawberry
│ • ${prefix}box3d
│ • ${prefix}roadwarning
│ • ${prefix}breakwall
│ • ${prefix}icecold
│ • ${prefix}luxury
│ • ${prefix}cloud
│ • ${prefix}summersand
│ • ${prefix}horrorblood
│ • ${prefix}thunder
└⬣
`
}
exports.makerp = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *MAKER EPHOTO360* 」
│ • ${prefix}wetglass
│ • ${prefix}multicolor3d
│ • ${prefix}watercolor
│ • ${prefix}luxurygold
│ • ${prefix}galaxywallpaper
│ • ${prefix}lighttext
│ • ${prefix}beautifulflower
│ • ${prefix}puppycute
│ • ${prefix}royaltext
│ • ${prefix}heartshaped
│ • ${prefix}birthdaycake
│ • ${prefix}galaxystyle
│ • ${prefix}hologram3d
│ • ${prefix}greenneon
│ • ${prefix}glossychrome
│ • ${prefix}greenbush
│ • ${prefix}metallogo
│ • ${prefix}noeltext
│ • ${prefix}glittergold
│ • ${prefix}textcake
│ • ${prefix}starsnight
│ • ${prefix}wooden3d
│ • ${prefix}textbyname
│ • ${prefix}writegalacy
│ • ${prefix}galaxybat
│ • ${prefix}snow3d
│ • ${prefix}birthdayday
│ • ${prefix}goldplaybutton
│ • ${prefix}silverplaybutton
│ • ${prefix}freefire
└⬣
`
}
exports.islam = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *ISLAMIC MENU* 」
│ • ${prefix}listsurah
│ • ${prefix}alquran
│ • ${prefix}asmaulhusna
│ • ${prefix}kisahnabi
│ • ${prefix}alquranaudio
│ • ${prefix}jadwalsholat
└⬣
`
}
exports.edukasi = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
╭◪「 *EDUCATION MENU* 」
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
└⬣
`
}
exports.convert = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
╭◪「 *CONVERT MENU* 」
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
└⬣
`
}
exports.download = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *DOWNLOAD MENU* 」
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│ • ${prefix}spotify [url]
│ • ${prefix}spotifysearch [query]
│ • ${prefix}nhentai [code]
│ • ${prefix}nhentaipdf [code]
│ • ${prefix}nhentaisearch [query]
└⬣
`
}
exports.own = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
╭◪「 *OWNER MENU* 」
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • >
│ • $
│ •  => 
└⬣
`
}
exports.hewan = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *HEWAN MENU* 」
│ • ${prefix}panda
│ • ${prefix}panda1
│ • ${prefix}koala
│ • ${prefix}bird
│ • ${prefix}cat
│ • ${prefix}dog
│ • ${prefix}fox
└⬣
`
}
exports.sound = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Sound Menu* 」
│ • ${prefix}sound1
│ • ${prefix}sound2
│ • ${prefix}sound3
│ • ${prefix}sound4
│ • ${prefix}sound5
│ • ${prefix}sound6
│ • ${prefix}sound7
│ • ${prefix}sound8
│ • ${prefix}sound9
│ • ${prefix}sound10
│ • ${prefix}sound11
│ • ${prefix}sound12
│ • ${prefix}sound13
│ • ${prefix}sound14
│ • ${prefix}sound15
│ • ${prefix}sound16
│ • ${prefix}sound17
│ • ${prefix}sound18
│ • ${prefix}sound19
│ • ${prefix}sound20
│ • ${prefix}sound21
│ • ${prefix}sound22
│ • ${prefix}sound23
│ • ${prefix}sound24
│ • ${prefix}sound25
│ • ${prefix}sound26
│ • ${prefix}sound27
│ • ${prefix}sound28
│ • ${prefix}sound29
│ • ${prefix}sound30
│ • ${prefix}sound31
│ • ${prefix}sound32
│ • ${prefix}sound33
│ • ${prefix}sound34
│ • ${prefix}sound35
│ • ${prefix}sound36
│ • ${prefix}sound37
│ • ${prefix}sound38
│ • ${prefix}sound39
│ • ${prefix}sound40
│ • ${prefix}sound41
│ • ${prefix}sound42
│ • ${prefix}sound43
│ • ${prefix}sound44
│ • ${prefix}sound45
│ • ${prefix}sound46
│ • ${prefix}sound47
│ • ${prefix}sound48
│ • ${prefix}sound49
│ • ${prefix}sound50
└⬣
`
}