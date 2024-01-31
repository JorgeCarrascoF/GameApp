const tabletopGames = [
    {
        id: 0,
        name: "Party&Co",
        description: "Party & Co se compone de 5 juegos diferentes y cada juego debe realizarse correctamente para ganar un disco. Las 5 categorías diferentes son charadas, dibujos, trivia, lectura de labios y adivinanzas de palabras. Gana 5 discos y ganarás el juego.",
        minPlayers: 3,
        maxPlayers: 20,
        owner: "María",
        image: 'https://cf.geekdo-images.com/OAZVkxSo77uePwyKAhC7cA__original/img/UCIm5UBfQLINQdz8McLBFTi6Kqg=/0x0/filters:format(jpeg)/pic1204662.jpg'
    },
    {
        id: 1,
        name: "La familia Hort",
        description: "La Familia Hort es un sencillo juego de gestión de recursos. Los jugadores deberán plantar hortalizas, flores carnívoras o incluso mandrágoras. Regarán y abonarán, adquirirán animales y trataran de vender sus productos al mejor precio.",
        minPlayers: 2,
        maxPlayers: 4,
        owner: "Ana",
        image: 'https://www.ludonauta.es/files/ludico/juegos-mesas/juego-mesa-la-familia-hort-491371651.jpg'
    },
    {
        id: 2,
        name: "Gloom",
        description: "Haz que tus personajes vivan las peores tragedias antes de facilitarles su esperado y dichoso viaje a la otra vida.",
        minPlayers: 2,
        maxPlayers: 4,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/QNUR5WOpYUgKtdvdBSxjhA__imagepage/img/mk0NOYtMyOERl7hFEJrGeYybjpk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7967441.jpg'
    },
    {
        id: 3,
        name: "Patchwork",
        description: "Dos jugadores compiten por tener y tejer la colcha más completa. El que menos huecos tenga al final de la partida y más botones consiga será quien gane la partida.",
        minPlayers: 2,
        maxPlayers: 2,
        owner: "Ana",
        image: 'https://m.media-amazon.com/images/I/810Z7SR7KpL.jpg'
    },
    {
        id: 4,
        name: "Listillo",
        description: "En Listillo tienes dos opciones: escribir la respuesta correcta (o que suena más correcta) o escribir algo gracioso y sacar una carcajada a los demás. Las dos estrategias son válidas para sumar puntos. Quien más puntos obtenga al final de las rondas... ¡ganará la partida!",
        minPlayers: 4,
        maxPlayers: 6,
        owner: "Ana",
        image: 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/l/i/listillo-caja-render-min.jpg'
    },
    {
        id: 5,
        name: "Root",
        description: "Juego de mesa asimétrico en el que cada uno escogerá su facción y tratará de conquistar el bosque de Root. Cada facción se juega de una manera diferente, tiene diferentes componentes y en turnos y estrategia única.",
        minPlayers: 2,
        maxPlayers: 6,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__itemrep/img/sQgkl-_hydBVvQHAMLt2Zk_3dwI=/fit-in/246x300/filters:strip_icc()/pic4254509.jpg'
    },
    {
        id: 6,
        name: "Bang! Duelo",
        description: "Dispara tu derringer y esquiva balas, serpientes de cascabel y dinamita en un tiroteo.",
        minPlayers: 2,
        maxPlayers: 2,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/3DanSNZJGHfiD7ixWNHy7g__itemrep/img/sWo8503pU6C6_fiWtXJmnzJvTxU=/fit-in/246x300/filters:strip_icc()/pic3068558.png'
    },
    {
        id: 7,
        name: "Canvas",
        description: "como el gran pintor que eres, competirás en un importante festival de arte. Elige y reúne cartas para apilarlas en capas y poder pintar cuadros. Cada combinación de cartas creará una nueva ilustración y una nueva obra de arte.",
        minPlayers: 1,
        maxPlayers: 5,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/kXJLvPqcDF7Id5KRejhnuQ__itemrep/img/CFlfRLohmuN0a-Oic_j21n7rhNM=/fit-in/246x300/filters:strip_icc()/pic7125372.jpg'
    },
    {
        id: 8,
        name: "Sí Señor Oscuro",
        description: "Al Señor de la Tierra Perdida no le va a gustar que hayamos fracasado (una vez más) en nuestra misión, y nos pedirá explicaciones. Y deberemos mentir, inventar, echarle la culpa a los demás...",
        minPlayers: 4,
        maxPlayers: 6,
        owner: "Jorge",
        image: 'https://garesys.com/media/games/images/list/si_senor_oscuro_p.jpg'
    },
    {
        id: 9,
        name: "Arre unicornio!",
        description: "Los enfermos mentales están al borde de la locura con tanto tratamiento y la única solución viable que les queda es intentar escapar del manicomio que los retiene.",
        minPlayers: 2,
        maxPlayers: 8,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/YaA-jnsYQ93tw4dR3zu5jQ__imagepagezoom/img/EwTjxiWyknVo5j_2gT9lKCJe1Pc=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4297381.jpg'
    },
    {
        id: 10,
        name: "Dany",
        description: "Dany es una persona complicada. Convive con sus diferentes personalidades que intentan mantenerse vivas dentro de él, jugando con sus recuerdos, y está harto. Dany ganará si consigue librarse de ellas.",
        minPlayers: 3,
        maxPlayers: 8,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/15ZfT3y5Wndrg7Cxp8BAYg__itemrep/img/PSNlIBM512cJtSSUJgEV-ImmadY=/fit-in/246x300/filters:strip_icc()/pic4465422.jpg'
    },
    {
        id: 11,
        name: "El espía (que se perdió)",
        description: "Si eres el espía, tendrás que averiguar en qué lugar se lleva a cabo la partida sin delatarte con tus respuestas; si no lo eres, tendrás que desenmascararle a través de tu agudeza.",
        minPlayers: 3,
        maxPlayers: 8,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/Ehx72XRdSeQHISVXcZVnHg__imagepage/img/7wwISG7kfg1a-dIi07n6n9fAK2Y=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2453926.jpg'
    },
    {
        id: 12,
        name: "Las brujas de Cernégula",
        description: "Competirás con otras brujas por crear más y mejores pociones mágicas. Cuenta la leyenda que en una laguna de la localidad burgalesa de Cernégula se reunía un aquelarre de brujas. ¡Gana puntos y vence a tus rivales!",
        minPlayers: 2,
        maxPlayers: 4,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/R6QIP_E_P4zNTnePDCaOEg__itemrep/img/Ongt7uDyf4B4Btvt_6Dr-2uf7jg=/fit-in/246x300/filters:strip_icc()/pic3780170.jpg'
    },
    {
        id: 13,
        name: "Happy Little Dinosaurs",
        description: "Trabaja para evitar todos los pequeños desastres de la vida y ríe cuando les suceden a tus amigos.",
        minPlayers: 2,
        maxPlayers: 6,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/hx0qr9OO7pAqxV6X1xTrHw__itemrep/img/AoPy6PErRqxjXbLvPoIOaHSpXcU=/fit-in/246x300/filters:strip_icc()/pic6568000.png'
    },
    {
        id: 14,
        name: "Coup",
        description: "Juego de roles ocultos, repleto de confusiones y misterios. ¿Quién te gustaría ser? ¿Duque, Asesino, Condesa, Embajador o Capitán?",
        minPlayers: 2,
        maxPlayers: 10,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/A7skNF4ECdZSNGgzUXteCw__itemrep/img/JWw81z_SZHcUv__ealDNiwEGkQ4=/fit-in/246x300/filters:strip_icc()/pic5330580.jpg'
    },
    {
        id: 15,
        name: "Sushi Go!",
        description: "Pasa el sushi, pero quédate con lo mejor. Deja espacio para el postre!",
        minPlayers: 2,
        maxPlayers: 8,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__itemrep/img/Y_jPOWbp6_2qOzymSNIC6SZo4TE=/fit-in/246x300/filters:strip_icc()/pic5885689.jpg'
    },
    {
        id: 16,
        name: "Cards Against Humanity",
        description: "Un juego de mesa horrible para gente horrible.",
        minPlayers: 4,
        maxPlayers: 30,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/a2XK61k_lynHXPv7wCJ6cg__imagepage/img/-AgSzV2iH3bsWg9wmRnMCqhA8-M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2818133.png'
    },
    {
        id: 17,
        name: "Aventura Z: Lovecraft",
        description: "Os pondréis en la piel de los investigadores para resolver un caso en el están implicados poderes ocultos más allá del conocimiento humano.",
        minPlayers: 1,
        maxPlayers: 2,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/R9HXzU4tV8e63tGuMNhliA__imagepage/img/VbZz4-u6KQkrx0HhE7OvBLf2V4k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6755937.jpg'
    },
    {
        id: 18,
        name: "Saboteur",
        description: "Sois enanos colocando cartas de túnel para conseguir oro, pero ¿quién de vosotros es el traidor?",
        minPlayers: 3,
        maxPlayers: 10,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/0vJwP6NGa7GHPZKC3gplUw__itemrep/img/aJcXGhYr8XxyKEK6EqbG0bePrOk=/fit-in/246x300/filters:strip_icc()/pic3989824.jpg'
    },
    {
        id: 19,
        name: "Here to Slay",
        description: "Poderosos héroes se alían para derrotar a monstruos y conseguir sus habilidades.",
        minPlayers: 2,
        maxPlayers: 8,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/ozUv3be9fcf28tJk30bNow__itemrep/img/qxn5NdQ85BjgM1xgDkfx33-IUYk=/fit-in/246x300/filters:strip_icc()/pic5181432.jpg'
    },
    {
        id: 20,
        name: "Espinas",
        description: "En Espinas te enfrentarás a tus terrores más profundos.",
        minPlayers: 3,
        maxPlayers: 6,
        owner: "Ana",
        image: 'https://www.nosolorol.com/861-large_default/espinas.jpg'
    },
    {
        id: 21,
        name: "Dungeon Mayhem",
        description: "Pelea como un bárbaro, paladín, pícaro, mago, u otros personajes para ser el último en pie.",
        minPlayers: 2,
        maxPlayers: 10,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/faJfKYz6tG8JvDYqYHBjHg__itemrep/img/KHoxN3JiwDTqAibJdkagE4T7n_M=/fit-in/246x300/filters:strip_icc()/pic5322689.jpg'
    },
    {
        id: 22,
        name: "Alakazum!",
        description: "Cinco brujas españolas pelean contra la invasión cultural americana.",
        minPlayers: 2,
        maxPlayers: 5,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/aDva-wZx1ZSE0zm_s3MgQg__itemrep/img/3PPWHisUXo9DBex2Onbt9c7vkXk=/fit-in/246x300/filters:strip_icc()/pic7399703.jpg'
    },
    {
        id: 23,
        name: "Código Secreto",
        description: "Dile a tus agentes pistas que les ayuden a identificar a los agentes de campo de su equipo.",
        minPlayers: 2,
        maxPlayers: 8,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__itemrep/img/e8zw8YQvQB8q8zfWkHQ48Ls920g=/fit-in/246x300/filters:strip_icc()/pic2582929.jpg'
    },
    {
        id: 24,
        name: "Concept",
        description: "Ayuda a tu equipo a adivinar la palabra o frase secretas usando iconos universales y otros conceptos.",
        minPlayers: 2,
        maxPlayers: 12,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/hHFs0_KRoW_FJ0cMIVgZcw__itemrep/img/uTJREz55VIG7CJAy1oQYBE1duAU=/fit-in/246x300/filters:strip_icc()/pic4991925.jpg'
    },
    {
        id: 25,
        name: "Trivial Pursuit Disney",
        description: "Es una Mickey-Herramienta que nos servirá más tarde.",
        minPlayers: 2,
        maxPlayers: 36,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/JuPSUrQIHHOq1GsJSfgxmw__itemrep/img/bYYT8tqSp5tobszwLZbwjIrZS78=/fit-in/246x300/filters:strip_icc()/pic3566758.jpg'
    },
    {
        id: 26,
        name: "Disney Villainous",
        description: "El peor se lo lleva todo.",
        minPlayers: 2,
        maxPlayers: 8,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/7Ej5V5Dq92QdvVFvISfl_A__itemrep/img/8AB1vzgoW_X904IEYJl2eib9T10=/fit-in/246x300/filters:strip_icc()/pic4216110.jpg'
    },
    {
        id: 27,
        name: "Rummy",
        description: "Juega todas tus fichas formando combinaciones de las fichas con números sucesivos del mismo color o el mismo número con distinto color, ¡incluso si no son tuyos!",
        minPlayers: 2,
        maxPlayers: 4,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/LeaLDlTTmeN639MfuflcMw__itemrep/img/x4GW0OJaN-pV8-K_b4RTSFioW6U=/fit-in/246x300/filters:strip_icc()/pic2286966.jpg'
    },
    {
        id: 28,
        name: "Scrabble/Intelect",
        description: "Un juego de palabras cruzadas donde se combina el azar en la toma de letras y la habilidad en componer palabras para obtener la máxima puntuación.",
        minPlayers: 2,
        maxPlayers: 4,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/mVmmntn2oQd0PfFrWBvwIQ__itemrep/img/xtiNZzN_7T6xZ3EPxzgYcBz9Ydk=/fit-in/246x300/filters:strip_icc()/pic404651.jpg'
    },
    {
        id: 29,
        name: "Munchkin",
        description: "Adéntrate en la mazmorra. Mata todo lo que veas. Traiciona a tus amigos y róbales sus cosas. Coge el tesoro y corre.",
        minPlayers: 3,
        maxPlayers: 6,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/J-ts3MW0UhDzs621TR6cog__itemrep/img/2MRtjy32fdzTBDCvUk73dA-ZtJk=/fit-in/246x300/filters:strip_icc()/pic1871016.jpg'
    },
    {
        id: 30,
        name: "Zodiac Duel",
        description: "Usa el poder de los doce símbolos del Zodíaco para derrotar a tu oponente.",
        minPlayers: 2,
        maxPlayers: 2,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/_r8olbvqX2TF8SzpgdO44Q__itemrep/img/6t14Qmt0JIEaj83qhWDnCsUsjJc=/fit-in/246x300/filters:strip_icc()/pic6831792.jpg'
    },
    {
        id: 31,
        name: "La Fallera Calavera",
        description: "Encuentra cinco ingredientes para cocinar una paella y calmar a una zombie valenciana.",
        minPlayers: 2,
        maxPlayers: 5,
        owner: "Ana",
        image: 'https://cf.geekdo-images.com/4qRxwBbB3jPEWgu1KyTi5g__itemrep/img/BYRVM02K7lA0Iwk2msggX1HUjnU=/fit-in/246x300/filters:strip_icc()/pic7392607.jpg'
    },
    {
        id: 32,
        name: "Netrunner",
        description: "Megacorporaciones contra netrunners en este futurista juego del gato y el ratón.",
        minPlayers: 2,
        maxPlayers: 2,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/2ewHIIG_TRq8bYlqk0jIMw__itemrep/img/Nz7z5Qk3fZ3R6IM14pDRg1D8XKE=/fit-in/246x300/filters:strip_icc()/pic3738560.jpg'
    },
    {
        id: 33,
        name: "Mansiones de la Locura",
        description: "Desvela los secretos de Arkham con tu equipo de investigadores.",
        minPlayers: 1,
        maxPlayers: 5,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/LIooA9bTdjnE9qmhjL-UFw__itemrep/img/G_-z236LOfeZMfomDg5oPNJvyrg=/fit-in/246x300/filters:strip_icc()/pic3118622.jpg'
    },
    {
        id: 34,
        name: "Secret Hitler",
        description: "Liberales y fascistas se enfrentan en este juego de roles ocultos.",
        minPlayers: 5,
        maxPlayers: 10,
        owner: "Jorge",
        image: 'https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__itemrep/img/EQ1jwjZYnucHSizVlzHE8DiyEQI=/fit-in/246x300/filters:strip_icc()/pic5164305.jpg'
    }    
];

export default tabletopGames;
