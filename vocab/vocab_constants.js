const vocab = [
    { espanol: 'banco', phoneme: 'GINKO', japo: 'ぎんこう', kanji: '' },
    { espanol: 'casa', phoneme: 'IE', japo: 'いえ' },
    { espanol: 'agua', phoneme: 'MIZU', japo: 'みず' },
    { espanol: 'libro', phoneme: 'HON', japo: 'ほん' },
    { japo: 'いぬ', phoneme: 'inu', espanol: 'perro' },
    { japo: 'あい', phoneme: 'ai', espanol: 'amor' }, { japo: 'あう', phoneme: 'au', espanol: 'reunirse' },
    { japo: 'うえ', phoneme: 'ue', espanol: 'arriba' }, { japo: 'いえ', phoneme: 'ie', espanol: 'casa' },
    { japo: 'あお', phoneme: 'ao', espanol: 'azul' }, { japo: 'あか', phoneme: 'aka', espanol: 'rojo' },
    { japo: 'かお', phoneme: 'kao', espanol: 'cara' }, { japo: 'かく', phoneme: 'kaku', espanol: 'escribir' },
    { japo: 'こい', phoneme: 'koi', espanol: 'ven' }, { japo: 'きく', phoneme: 'kiku', espanol: 'escuchar' },
    { japo: 'いす', phoneme: 'isu', espanol: 'silla' }, { japo: 'あさ', phoneme: 'asa', espanol: 'la mañana' },
    { japo: 'しお', phoneme: 'shio', espanol: 'sal' }, { japo: 'かさ', phoneme: 'kasa', espanol: 'paraguas' },
    { japo: 'すし', phoneme: 'sushi', espanol: 'sushi' }, { japo: 'しか', phoneme: 'shika', espanol: 'ciervo' },
    { japo: 'かず', phoneme: 'kazu', espanol: 'cantidad' }, { japo: 'さす', phoneme: 'sasu', espanol: 'señalar' },
    { japo: 'けす', phoneme: 'kesu', espanol: 'borrar' }, { japo: 'かげ', phoneme: 'kage', espanol: 'sombra' },
    { japo: 'あじ', phoneme: 'aji', espanol: 'sabor' }, { japo: 'さき', phoneme: 'saki', espanol: 'antes' },
    { japo: 'たつ', phoneme: 'tatsu', espanol: 'ponerse de pie' }, { japo: 'ちず', phoneme: 'chizu', espanol: 'mapa' },
    { japo: 'えだ', phoneme: 'eda', espanol: 'rama' }, { japo: 'とし', phoneme: 'toshi', espanol: 'año' },
    { japo: 'くち', phoneme: 'kuchi', espanol: 'boca' }, { japo: 'つづく', phoneme: 'tsuzuku', espanol: 'continuar' },
    { japo: 'ちか', phoneme: 'chika', espanol: 'subsuelo' }, { japo: 'かつ', phoneme: 'katsu', espanol: 'ganar' },
    { japo: 'そと', phoneme: 'soto', espanol: 'afuera' }, { japo: 'なに', phoneme: 'nani', espanol: '¿qué?' },
    { japo: 'ぬの', phoneme: 'nuno', espanol: 'tela' }, { japo: 'あに', phoneme: 'ani', espanol: 'hermano mayor' },
    { japo: 'ねこ', phoneme: 'neko', espanol: 'gato' }, { japo: 'かね', phoneme: 'kane', espanol: 'dinero' },
    { japo: 'なか', phoneme: 'naka', espanol: 'adentro' }, { japo: 'におい', phoneme: 'nioi', espanol: 'olor' },
    { japo: 'おに', phoneme: 'oni', espanol: 'demonio' }, { japo: 'へび', phoneme: 'hebi', espanol: 'serpiente' },
    { japo: 'かべ', phoneme: 'kabe', espanol: 'pared' },
    { japo: 'はは', phoneme: 'haha', espanol: '(mi) madre' }, { japo: 'たいふう', phoneme: 'taifuu', espanol: 'tifón' },
    { japo: 'ほし', phoneme: 'hoshi', espanol: 'estrella' },
    { japo: 'ほね', phoneme: 'hone', espanol: 'hueso' }, { japo: 'はなび', phoneme: 'hanabi', espanol: 'fuegos artificiales' },
    { japo: 'ふね', phoneme: 'fune', espanol: 'barco' }, { japo: 'いしゃ', phoneme: 'isha', espanol: 'médico' }, { japo: 'せんせい', phoneme: 'sensei', espanol: 'profesor' },
    { japo: 'ぎんこういん', phoneme: 'ginkouin', espanol: 'bancario' }, { japo: 'けんきゅうしゃ', phoneme: 'kenkyuusha', espanol: 'investigador' },
    { japo: 'かいしゃいん', phoneme: 'kaishain', espanol: 'empleado' }, { japo: 'ちち', phoneme: 'chichi', espanol: '(mi) padre' },
    { japo: 'あつい', phoneme: 'atsui', espanol: 'caliente' }, { japo: 'くつ', phoneme: 'kutsu', espanol: 'zapatos' },
    { japo: 'くつした', phoneme: 'kutsushita', espanol: 'calcetines' }, { japo: 'あそこ', phoneme: 'asoko', espanol: 'allí' },
    { japo: 'みみ', phoneme: 'mimi', espanol: 'oreja' }, { japo: 'ひみつ', phoneme: 'himitsu', espanol: 'secreto' },
    { japo: 'まち', phoneme: 'machi', espanol: 'ciudad' }, { japo: 'むだ', phoneme: 'muda', espanol: 'desperdicio' },
    { japo: 'みなと', phoneme: 'minato', espanol: 'puerto'}, { japo: 'もの', phoneme: 'mono', espanol: 'cosa' },
    { japo: 'かいもの', phoneme: 'kaimono', espanol: 'compras' }, { japo: 'のみもの', phoneme: 'nomimono', espanol: 'bebidas' },
    { japo: 'たべもの', phoneme: 'tabemono', espanol: 'alimentos' }, { japo: 'め', phoneme: 'me', espanol: 'ojo' },
    { japo: 'ふゆ', phoneme: 'fuyu', espanol: 'invierno' }, { japo: 'ゆき', phoneme: 'yuki', espanol: 'nieve' },
    { japo: 'よい', phoneme: 'yoi', espanol: 'bueno' }, { japo: 'やきにく', phoneme: 'yakiniku', espanol: 'carne asada' },
    { japo: 'いや', phoneme: 'iya', espanol: 'indeseable' }, { japo: 'よこ', phoneme: 'yoko', espanol: 'lado' },
    { japo: 'まる', phoneme: 'maru', espanol: 'círculo' }, { japo: 'らく', phoneme: 'raku', espanol: 'fácil' },
    { japo: 'れい', phoneme: 'rei', espanol: 'ejemplo' }, { japo: 'しろ', phoneme: 'shiro', espanol: 'blanco' },
    { japo: 'はり', phoneme: 'hari', espanol: 'aguja' }, { japo: 'やきとり', phoneme: 'yakitori', espanol: 'pollo asado' },
    { japo: 'よろこぶ', phoneme: 'yorokobu', espanol: 'alegrarse' }, { japo: 'わるい', phoneme: 'warui', espanol: 'malo' },
    { japo: 'へいわ', phoneme: 'heiwa', espanol: 'paz' }, { japo: 'かん', phoneme: 'kan', espanol: 'lata' },
    { japo: 'びん', phoneme: 'bin', espanol: 'botella' }, { japo: 'としをとる', phoneme: 'toshiwotoru', espanol: 'envejecer' },
    { japo: 'きょうしつ', phoneme: 'kyoushitsu', espanol: 'aula'}, { japo: 'しょくどう', phoneme: 'shokudou', espanol: 'comedor'}, 
    { japo: 'じむしょ', phoneme: 'jimusho', espanol: 'oficina'}, { japo: 'かいぎしつ', phoneme: 'kaigishitsu', espanol: 'sala de reuniones'}, 
    { japo: 'うけつけ', phoneme: 'uketsuke', espanol: 'recepción'}, { japo: 'へや', phoneme: 'heya', espanol: 'habitación'},
    { japo: 'おてあらい', phoneme: 'otearai', espanol: 'baño'}, { japo: 'かいだん', phoneme: 'kaidan', espanol: 'escalera'},
    { japo: 'でんわ', phoneme: 'denwa', espanol: 'telefono'}, { japo: 'くつ', phoneme: 'kutsu', espanol: 'zapatos'},
    { japo: 'くつした', phoneme: 'kutsushita', espanol: 'calcetines'}, { japo: 'たばこ', phoneme: 'tabako', espanol: 'tabaco'},
    { japo: 'うりば', phoneme: 'uriba', espanol: 'seccion'},
    { japo: 'ひゃく', phoneme: 'hyaku', espanol: 'cien'}, { japo: 'にひゃく', phoneme: 'nihyaku', espanol: 'dos cientos'},
    { japo: 'さんびゃく', phoneme: 'sanbyaku', espanol: 'tres cientos'}, { japo: 'ろっぴゃく', phoneme: 'roppyaku', espanol: 'seis cientos'},
    { japo: 'はっぴゃく', phoneme: 'happyaku', espanol: '800'}, { japo: 'せん', phoneme: 'sen', espanol: '1000'},
    { japo: 'にせん', phoneme: 'nisen', espanol: '2000'}, { japo: 'さんぜん', phoneme: 'sanzen', espanol: '3000'},
    { japo: 'はっせん', phoneme: 'hassen', espanol: '8000'}, { japo: 'きゅうせん', phoneme: 'kyuusen', espanol: '9000'},

    { japo: 'いちまん', phoneme: 'ichiman', espanol: '10.000'}, { japo: 'にまん', phoneme: 'niman', espanol: '20.000'},
    { japo: 'はちまん', phoneme: 'hachiman', espanol: '80.000'}, { japo: 'じゅうまん', phoneme: 'juuman', espanol: '100.000'},

    { japo: 'ろっぴゃくろくじゅうななまん せん はっぴゃく よんじゅう よん', phoneme: 'roppyakurokujuunanaman sen happyaku yonjuu yon', espanol: '6,671,844'},
    { japo: 'いちまん きゅうせん さんびゃく', phoneme: 'ichiman kyuusen sanbyaku', espanol: '19,300'},
];

const buttonKata = document.getElementById('toggleButtonKata');
buttonKata.addEventListener('click', () => {
    const basePath = window.location.pathname.includes('/random-kana') ? '/random-kana' : '';
    window.location.href = `${basePath}/kata/inicio/inicio_kata.html`;
});

const buttonHira = document.getElementById('toggleButtonHira');
buttonHira.addEventListener('click', () => {
    const basePath = window.location.pathname.includes('/random-kana') ? '/random-kana' : '';
    window.location.href = `${basePath}/index.html`;
});