exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf Kak ${pushname} limit hari ini telah habisπ₯Ί\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}

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
	return`Maaf Kak Fotur Ini Sedang Erorπ₯Ί/nMungkin lagi Fix Sama Owner`
	}
exports.group = () =>{
	return`Fitur Hanya Tersedia Di Dalam Group!`
	}

exports.wait = () =>{
	return`*Screaping Metadata* . . .`
	}
exports.ok = () =>{
	return`Done Yah KakβοΈ`
	}
exports.welcome = () =>{
	return`Semoga Betah Ya Kak, Jangan Lupa Baca Deskripsi Groupnya Kakπ€
`
      }
exports.leave = () =>{
	return`
Good Bye @${num.split('@')[0]}`
}
exports.allmenu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β β’ ${prefix}spotify [url]
β β’ ${prefix}spotifysearch [query]
β β’ ${prefix}nhentai [code]
β β’ ${prefix}nhentaipdf [code]
β β’ ${prefix}nhentaisearch [query]
β
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
β
β *Education*
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
β
β *Islamic*
β β’ ${prefix}listsurah
β β’ ${prefix}alquran
β β’ ${prefix}asmaulhusna
β β’ ${prefix}kisahnabi
β β’ ${prefix}alquranaudio
β β’ ${prefix}jadwalsholat
β
β *Maker Ephoto360*
β β’ ${prefix}wetglass
β β’ ${prefix}multicolor3d
β β’ ${prefix}watercolor
β β’ ${prefix}luxurygold
β β’ ${prefix}galaxywallpaper
β β’ ${prefix}lighttext
β β’ ${prefix}beautifulflower
β β’ ${prefix}puppycute
β β’ ${prefix}royaltext
β β’ ${prefix}heartshaped
β β’ ${prefix}birthdaycake
β β’ ${prefix}galaxystyle
β β’ ${prefix}hologram3d
β β’ ${prefix}greenneon
β β’ ${prefix}glossychrome
β β’ ${prefix}greenbush
β β’ ${prefix}metallogo
β β’ ${prefix}noeltext
β β’ ${prefix}glittergold
β β’ ${prefix}textcake
β β’ ${prefix}starsnight
β β’ ${prefix}wooden3d
β β’ ${prefix}textbyname
β β’ ${prefix}writegalacy
β β’ ${prefix}galaxybat
β β’ ${prefix}snow3d
β β’ ${prefix}birthdayday
β β’ ${prefix}goldplaybutton
β β’ ${prefix}silverplaybutton
β β’ ${prefix}freefire
β
β *Maker TextPro*
β β’ ${prefix}blackpink
β β’ ${prefix}neon
β β’ ${prefix}greenneon
β β’ ${prefix}advanceglow
β β’ ${prefix}futureneon
β β’ ${prefix}sandwriting
β β’ ${prefix}sandsummer
β β’ ${prefix}sandengraved
β β’ ${prefix}metaldark
β β’ ${prefix}neonlight
β β’ ${prefix}holographic
β β’ ${prefix}text1917
β β’ ${prefix}minion
β β’ ${prefix}deluxesilver
β β’ ${prefix}newyearcard
β β’ ${prefix}bloodfrosted
β β’ ${prefix}halloween
β β’ ${prefix}jokerlogo
β β’ ${prefix}fireworksparkle
β β’ ${prefix}natureleaves
β β’ ${prefix}bokeh
β β’ ${prefix}toxic
β β’ ${prefix}strawberry
β β’ ${prefix}box3d
β β’ ${prefix}roadwarning
β β’ ${prefix}breakwall
β β’ ${prefix}icecold
β β’ ${prefix}luxury
β β’ ${prefix}cloud
β β’ ${prefix}summersand
β β’ ${prefix}horrorblood
β β’ ${prefix}thunder
β
β *Game*
β β’ ${prefix}tebakgambar 
β
β *Hewan Menu*
β β’ ${prefix}panda
β β’ ${prefix}panda1
β β’ ${prefix}koala
β β’ ${prefix}bird
β β’ ${prefix}cat
β β’ ${prefix}dog
β β’ ${prefix}fox
β
β *Info*
β β’ ${prefix}owner
β β’ ${prefix}daftar
β
β *Owner*
β β’ ${prefix}broadcast [text]
β β’ ${prefix}leave
β β’ >
β β’ $
β β’  => 
β
β *Group*
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text] 
β°ββ¬£
`
	}
	exports.gc = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
β­βͺγ *GROUP MENU* γ
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text] 
ββ¬£
`
}
exports.makert = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *MAKER TEXTPRO* γ
β β’ ${prefix}blackpink
β β’ ${prefix}neon
β β’ ${prefix}greenneon
β β’ ${prefix}advanceglow
β β’ ${prefix}futureneon
β β’ ${prefix}sandwriting
β β’ ${prefix}sandsummer
β β’ ${prefix}sandengraved
β β’ ${prefix}metaldark
β β’ ${prefix}neonlight
β β’ ${prefix}holographic
β β’ ${prefix}text1917
β β’ ${prefix}minion
β β’ ${prefix}deluxesilver
β β’ ${prefix}newyearcard
β β’ ${prefix}bloodfrosted
β β’ ${prefix}halloween
β β’ ${prefix}jokerlogo
β β’ ${prefix}fireworksparkle
β β’ ${prefix}natureleaves
β β’ ${prefix}bokeh
β β’ ${prefix}toxic
β β’ ${prefix}strawberry
β β’ ${prefix}box3d
β β’ ${prefix}roadwarning
β β’ ${prefix}breakwall
β β’ ${prefix}icecold
β β’ ${prefix}luxury
β β’ ${prefix}cloud
β β’ ${prefix}summersand
β β’ ${prefix}horrorblood
β β’ ${prefix}thunder
ββ¬£
`
}
exports.makerp = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *MAKER EPHOTO360* γ
β β’ ${prefix}wetglass
β β’ ${prefix}multicolor3d
β β’ ${prefix}watercolor
β β’ ${prefix}luxurygold
β β’ ${prefix}galaxywallpaper
β β’ ${prefix}lighttext
β β’ ${prefix}beautifulflower
β β’ ${prefix}puppycute
β β’ ${prefix}royaltext
β β’ ${prefix}heartshaped
β β’ ${prefix}birthdaycake
β β’ ${prefix}galaxystyle
β β’ ${prefix}hologram3d
β β’ ${prefix}greenneon
β β’ ${prefix}glossychrome
β β’ ${prefix}greenbush
β β’ ${prefix}metallogo
β β’ ${prefix}noeltext
β β’ ${prefix}glittergold
β β’ ${prefix}textcake
β β’ ${prefix}starsnight
β β’ ${prefix}wooden3d
β β’ ${prefix}textbyname
β β’ ${prefix}writegalacy
β β’ ${prefix}galaxybat
β β’ ${prefix}snow3d
β β’ ${prefix}birthdayday
β β’ ${prefix}goldplaybutton
β β’ ${prefix}silverplaybutton
β β’ ${prefix}freefire
ββ¬£
`
}
exports.islam = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *ISLAMIC MENU* γ
β β’ ${prefix}listsurah
β β’ ${prefix}alquran
β β’ ${prefix}asmaulhusna
β β’ ${prefix}kisahnabi
β β’ ${prefix}alquranaudio
β β’ ${prefix}jadwalsholat
ββ¬£
`
}
exports.edukasi = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
β­βͺγ *EDUCATION MENU* γ
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
ββ¬£
`
}
exports.convert = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
β­βͺγ *CONVERT MENU* γ
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
ββ¬£
`
}
exports.download = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *DOWNLOAD MENU* γ
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β β’ ${prefix}spotify [url]
β β’ ${prefix}spotifysearch [query]
β β’ ${prefix}nhentai [code]
β β’ ${prefix}nhentaipdf [code]
β β’ ${prefix}nhentaisearch [query]
ββ¬£
`
}
exports.own = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
β­βͺγ *OWNER MENU* γ
β β’ ${prefix}broadcast [text]
β β’ ${prefix}leave
β β’ >
β β’ $
β β’  => 
ββ¬£
`
}
exports.hewan = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *HEWAN MENU* γ
β β’ ${prefix}panda
β β’ ${prefix}panda1
β β’ ${prefix}koala
β β’ ${prefix}bird
β β’ ${prefix}cat
β β’ ${prefix}dog
β β’ ${prefix}fox
ββ¬£
`
}
exports.sound = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Sound Menu* γ
β β’ ${prefix}sound1
β β’ ${prefix}sound2
β β’ ${prefix}sound3
β β’ ${prefix}sound4
β β’ ${prefix}sound5
β β’ ${prefix}sound6
β β’ ${prefix}sound7
β β’ ${prefix}sound8
β β’ ${prefix}sound9
β β’ ${prefix}sound10
β β’ ${prefix}sound11
β β’ ${prefix}sound12
β β’ ${prefix}sound13
β β’ ${prefix}sound14
β β’ ${prefix}sound15
β β’ ${prefix}sound16
β β’ ${prefix}sound17
β β’ ${prefix}sound18
β β’ ${prefix}sound19
β β’ ${prefix}sound20
β β’ ${prefix}sound21
β β’ ${prefix}sound22
β β’ ${prefix}sound23
β β’ ${prefix}sound24
β β’ ${prefix}sound25
β β’ ${prefix}sound26
β β’ ${prefix}sound27
β β’ ${prefix}sound28
β β’ ${prefix}sound29
β β’ ${prefix}sound30
β β’ ${prefix}sound31
β β’ ${prefix}sound32
β β’ ${prefix}sound33
β β’ ${prefix}sound34
β β’ ${prefix}sound35
β β’ ${prefix}sound36
β β’ ${prefix}sound37
β β’ ${prefix}sound38
β β’ ${prefix}sound39
β β’ ${prefix}sound40
β β’ ${prefix}sound41
β β’ ${prefix}sound42
β β’ ${prefix}sound43
β β’ ${prefix}sound44
β β’ ${prefix}sound45
β β’ ${prefix}sound46
β β’ ${prefix}sound47
β β’ ${prefix}sound48
β β’ ${prefix}sound49
β β’ ${prefix}sound50
ββ¬£
`
}