
const palabrasHiraganasV1 = [
    { hiragana: 'あいさつ', lectura: 'aisatsu', significado: 'saludo' },
    { hiragana: 'あさ', lectura: 'asa', significado: 'mañana (temprano)' },
    { hiragana: 'あさごはん', lectura: 'asagohan', significado: 'desayuno' },
    { hiragana: 'あした', lectura: 'ashita', significado: 'mañana (día siguiente)' },
    { hiragana: 'ありがとう', lectura: 'arigatou', significado: 'gracias' },
    { hiragana: 'いいえ', lectura: 'iie', significado: 'no' },
    { hiragana: 'いえ', lectura: 'ie', significado: 'casa' },
    { hiragana: 'いく', lectura: 'iku', significado: 'ir' },
    { hiragana: 'いま', lectura: 'ima', significado: 'ahora' },
    { hiragana: 'おおきい', lectura: 'ookii', significado: 'grande' },
    { hiragana: 'おはよう', lectura: 'ohayou', significado: 'buenos días' },
    { hiragana: 'おかあさん', lectura: 'okaasan', significado: 'madre' },
    { hiragana: 'おとうさん', lectura: 'otousan', significado: 'padre' },
    { hiragana: 'おちゃ', lectura: 'ocha', significado: 'té' },
    { hiragana: 'おなじ', lectura: 'onaji', significado: 'igual' },
    { hiragana: 'かいしゃ', lectura: 'kaisha', significado: 'empresa' },
    { hiragana: 'がっこう', lectura: 'gakkou', significado: 'escuela' },
    { hiragana: 'かさ', lectura: 'kasa', significado: 'paraguas' },
    { hiragana: 'かぞく', lectura: 'kazoku', significado: 'familia' },
    { hiragana: 'かわ', lectura: 'kawa', significado: 'río' },
    { hiragana: 'きいろ', lectura: 'kiiro', significado: 'amarillo' },
    { hiragana: 'きょう', lectura: 'kyou', significado: 'hoy' },
    { hiragana: 'きょうしつ', lectura: 'kyoushitsu', significado: 'aula' },
    { hiragana: 'ぎんこう', lectura: 'ginkou', significado: 'banco (institución)' },
    { hiragana: 'くつ', lectura: 'kutsu', significado: 'zapatos' },
    { hiragana: 'くる', lectura: 'kuru', significado: 'venir' },
    { hiragana: 'けっこん', lectura: 'kekkon', significado: 'matrimonio' },
    { hiragana: 'けんこう', lectura: 'kenkou', significado: 'salud' },
    { hiragana: 'こうえん', lectura: 'kouen', significado: 'parque' },
    { hiragana: 'ここ', lectura: 'koko', significado: 'aquí' },
    { hiragana: 'ことば', lectura: 'kotoba', significado: 'palabra' },
    { hiragana: 'こんしゅう', lectura: 'konshuu', significado: 'esta semana' },
    { hiragana: 'こんばんは', lectura: 'konbanwa', significado: 'buenas noches' },
    { hiragana: 'さかな', lectura: 'sakana', significado: 'pescado' },
    { hiragana: 'さようなら', lectura: 'sayounara', significado: 'adiós' },
    { hiragana: 'さんぽ', lectura: 'sanpo', significado: 'paseo' },
    { hiragana: 'しお', lectura: 'shio', significado: 'sal' },
    { hiragana: 'しごと', lectura: 'shigoto', significado: 'trabajo' },
    { hiragana: 'じしょ', lectura: 'jisho', significado: 'diccionario' },
    { hiragana: 'しゃしん', lectura: 'shashin', significado: 'fotografía' },
    { hiragana: 'じてんしゃ', lectura: 'jitensha', significado: 'bicicleta' },
    { hiragana: 'しんかんせん', lectura: 'shinkansen', significado: 'tren bala' },
    { hiragana: 'すき', lectura: 'suki', significado: 'gustar' },
    { hiragana: 'すこし', lectura: 'sukoshi', significado: 'un poco' },
    { hiragana: 'すずしい', lectura: 'suzushii', significado: 'fresco' },
    { hiragana: 'せんせい', lectura: 'sensei', significado: 'profesor' },
    { hiragana: 'ぜんぶ', lectura: 'zenbu', significado: 'todo' },
    { hiragana: 'そうじ', lectura: 'souji', significado: 'limpieza' },
    { hiragana: 'そと', lectura: 'soto', significado: 'afuera' },
    { hiragana: 'たべる', lectura: 'taberu', significado: 'comer' },
    { hiragana: 'たんじょうび', lectura: 'tanjoubi', significado: 'cumpleaños' },
    { hiragana: 'だいがく', lectura: 'daigaku', significado: 'universidad' },
    { hiragana: 'だいじょうぶ', lectura: 'daijoubu', significado: 'estar bien' },
    { hiragana: 'たまご', lectura: 'tamago', significado: 'huevo' },
    { hiragana: 'ちかてつ', lectura: 'chikatetsu', significado: 'metro (subterráneo)' },
    { hiragana: 'ちず', lectura: 'chizu', significado: 'mapa' },
    { hiragana: 'つくえ', lectura: 'tsukue', significado: 'escritorio' },
    { hiragana: 'つめたい', lectura: 'tsumetai', significado: 'frío (al tacto)' },
    { hiragana: 'てがみ', lectura: 'tegami', significado: 'carta' },
    { hiragana: 'でんき', lectura: 'denki', significado: 'electricidad' },
    { hiragana: 'でんしゃ', lectura: 'densha', significado: 'tren' },
    { hiragana: 'とけい', lectura: 'tokei', significado: 'reloj' },
    { hiragana: 'どこ', lectura: 'doko', significado: 'dónde' },
    { hiragana: 'ともだち', lectura: 'tomodachi', significado: 'amigo' },
    { hiragana: 'とり', lectura: 'tori', significado: 'pájaro' },
    { hiragana: 'なまえ', lectura: 'namae', significado: 'nombre' },
    { hiragana: 'にほん', lectura: 'nihon', significado: 'Japón' },
    { hiragana: 'にもつ', lectura: 'nimotsu', significado: 'equipaje' },
    { hiragana: 'ねこ', lectura: 'neko', significado: 'gato' },
    { hiragana: 'のむ', lectura: 'nomu', significado: 'beber' },
    { hiragana: 'はい', lectura: 'hai', significado: 'sí' },
    { hiragana: 'はし', lectura: 'hashi', significado: 'palillos' },
    { hiragana: 'はな', lectura: 'hana', significado: 'flor' },
    { hiragana: 'ひと', lectura: 'hito', significado: 'persona' },
    { hiragana: 'ふく', lectura: 'fuku', significado: 'ropa' },
    { hiragana: 'へや', lectura: 'heya', significado: 'habitación' },
    { hiragana: 'ほん', lectura: 'hon', significado: 'libro' },
    { hiragana: 'まいにち', lectura: 'mainichi', significado: 'todos los días' },
    { hiragana: 'みず', lectura: 'mizu', significado: 'agua' },
    { hiragana: 'みせ', lectura: 'mise', significado: 'tienda' },
    { hiragana: 'むずかしい', lectura: 'muzukashii', significado: 'difícil' },
    { hiragana: 'もんだい', lectura: 'mondai', significado: 'problema' },
    { hiragana: 'やすい', lectura: 'yasui', significado: 'barato' },
    { hiragana: 'やさい', lectura: 'yasai', significado: 'verdura' },
    { hiragana: 'ゆき', lectura: 'yuki', significado: 'nieve' },
    { hiragana: 'よる', lectura: 'yoru', significado: 'noche' },
    { hiragana: 'らいねん', lectura: 'rainen', significado: 'el próximo año' },
    { hiragana: 'りんご', lectura: 'ringo', significado: 'manzana' },
    { hiragana: 'れいぞうこ', lectura: 'reizouko', significado: 'refrigerador' },
    { hiragana: 'わたし', lectura: 'watashi', significado: 'yo' },
];

const palabrasHiraganaV2 = [
    { hiragana: 'あう', lectura: 'au', significado: 'encontrarse con alguien' },
    { hiragana: 'あか', lectura: 'aka', significado: 'rojo' },
    { hiragana: 'あける', lectura: 'akeru', significado: 'abrir' },
    { hiragana: 'あそぶ', lectura: 'asobu', significado: 'jugar' },
    { hiragana: 'あたま', lectura: 'atama', significado: 'cabeza' },
    { hiragana: 'あつい', lectura: 'atsui', significado: 'caluroso' },
    { hiragana: 'あに', lectura: 'ani', significado: 'hermano mayor' },
    { hiragana: 'あね', lectura: 'ane', significado: 'hermana mayor' },
    { hiragana: 'あめ', lectura: 'ame', significado: 'lluvia' },
    { hiragana: 'ある', lectura: 'aru', significado: 'haber, existir (cosas)' },
    { hiragana: 'いしゃ', lectura: 'isha', significado: 'médico' },
    { hiragana: 'いす', lectura: 'isu', significado: 'silla' },
    { hiragana: 'いたい', lectura: 'itai', significado: 'doloroso' },
    { hiragana: 'いぬ', lectura: 'inu', significado: 'perro' },
    { hiragana: 'いろ', lectura: 'iro', significado: 'color' },
    { hiragana: 'うえ', lectura: 'ue', significado: 'arriba' },
    { hiragana: 'うしろ', lectura: 'ushiro', significado: 'detrás' },
    { hiragana: 'うた', lectura: 'uta', significado: 'canción' },
    { hiragana: 'うまれる', lectura: 'umareru', significado: 'nacer' },
    { hiragana: 'うる', lectura: 'uru', significado: 'vender' },
    { hiragana: 'えいが', lectura: 'eiga', significado: 'película' },
    { hiragana: 'えき', lectura: 'eki', significado: 'estación' },
    { hiragana: 'えんぴつ', lectura: 'enpitsu', significado: 'lápiz' },
    { hiragana: 'おおぜい', lectura: 'oozei', significado: 'mucha gente' },
    { hiragana: 'おきる', lectura: 'okiru', significado: 'levantarse' },
    { hiragana: 'おす', lectura: 'osu', significado: 'empujar' },
    { hiragana: 'おとこ', lectura: 'otoko', significado: 'hombre' },
    { hiragana: 'おととい', lectura: 'ototoi', significado: 'antes de ayer' },
    { hiragana: 'おばあさん', lectura: 'obaasan', significado: 'abuela' },
    { hiragana: 'おぼえる', lectura: 'oboeru', significado: 'recordar, memorizar' },
    { hiragana: 'おもい', lectura: 'omoi', significado: 'pesado' },
    { hiragana: 'おもしろい', lectura: 'omoshiroi', significado: 'interesante' },
    { hiragana: 'かいもの', lectura: 'kaimono', significado: 'compras' },
    { hiragana: 'かえす', lectura: 'kaesu', significado: 'devolver' },
    { hiragana: 'かお', lectura: 'kao', significado: 'cara' },
    { hiragana: 'かぎ', lectura: 'kagi', significado: 'llave' },
    { hiragana: 'かぜ', lectura: 'kaze', significado: 'viento' },
    { hiragana: 'かぞえる', lectura: 'kazoeru', significado: 'contar (números)' },
    { hiragana: 'かんたん', lectura: 'kantan', significado: 'fácil' },
    { hiragana: 'きたない', lectura: 'kitanai', significado: 'sucio' },
    { hiragana: 'きる', lectura: 'kiru', significado: 'cortar' },
    { hiragana: 'きんようび', lectura: 'kinyoubi', significado: 'viernes' },
    { hiragana: 'くも', lectura: 'kumo', significado: 'nube' },
    { hiragana: 'くらい', lectura: 'kurai', significado: 'oscuro' },
    { hiragana: 'くるま', lectura: 'kuruma', significado: 'coche' },
    { hiragana: 'けす', lectura: 'kesu', significado: 'borrar, apagar' },
    { hiragana: 'げんき', lectura: 'genki', significado: 'saludable, enérgico' },
    { hiragana: 'こうさてん', lectura: 'kousaten', significado: 'cruce' },
    { hiragana: 'こえ', lectura: 'koe', significado: 'voz' },
    { hiragana: 'こまる', lectura: 'komaru', significado: 'tener problemas' },
    { hiragana: 'これ', lectura: 'kore', significado: 'esto' },
    { hiragana: 'さいふ', lectura: 'saifu', significado: 'billetera' },
    { hiragana: 'さき', lectura: 'saki', significado: 'anterior' },
    { hiragana: 'さくぶん', lectura: 'sakubun', significado: 'redacción' },
    { hiragana: 'さむい', lectura: 'samui', significado: 'frío (clima)' },
    { hiragana: 'ざっし', lectura: 'zasshi', significado: 'revista' },
    { hiragana: 'しにます', lectura: 'shinimasu', significado: 'morir' },
    { hiragana: 'しんぱい', lectura: 'shinpai', significado: 'preocupación' },
    { hiragana: 'すぐ', lectura: 'sugu', significado: 'inmediatamente' },
    { hiragana: 'せまい', lectura: 'semai', significado: 'estrecho' },
    { hiragana: 'そら', lectura: 'sora', significado: 'cielo' },
    { hiragana: 'だす', lectura: 'dasu', significado: 'sacar' },
    { hiragana: 'ちいさい', lectura: 'chiisai', significado: 'pequeño' },
    { hiragana: 'つよい', lectura: 'tsuyoi', significado: 'fuerte' },
    { hiragana: 'とおい', lectura: 'tooi', significado: 'lejos' },
    { hiragana: 'ならう', lectura: 'narau', significado: 'aprender' },
    { hiragana: 'のど', lectura: 'nodo', significado: 'garganta' },
    { hiragana: 'ひる', lectura: 'hiru', significado: 'mediodía' },
    { hiragana: 'べんり', lectura: 'benri', significado: 'práctico' },
    { hiragana: 'みじかい', lectura: 'mijikai', significado: 'corto' },
    { hiragana: 'やま', lectura: 'yama', significado: 'montaña' }
];

const palabrasHiraganas = [...palabrasHiraganasV1, ...palabrasHiraganaV2];

