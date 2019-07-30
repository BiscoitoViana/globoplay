import React, { createContext, useState } from 'react'

export const MoviesContext = createContext();

export const MoviesProvider = props => {
    const [movies, setMovies] = useState({
        selectedMovie: 0,
        movieList: [
            {
                id: 1,
                title: "Shippados",
                description: "'Shippados' é uma série sobre jovens adultos neuróticos navegando o complexo mundo dos relacionamentos modernos, onde tudo é mediado por redes sociais e aplicativos.",
                thumbnail: "https://s2.glbimg.com/MMQ8OrgFTNjK-tRDZfA_KkXmb9g=/362x536/https://s2.glbimg.com/K54EodF8PIofFE7HX9xvvn_VqXo=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/4/V/caiuQFTRq1T50cBTKTuA/2019-414-midia-kit-shippados-poster.jpg",
                detailPhoto: "//s2.glbimg.com/Q75dY4zJQOvZZ1ftWs_siazjINA=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/8/S/cvGBzMQtekqG5XCB6yig/2019-414-midia-kit-shippados-cover-programa-web.jpg"
            },
            {
                id: 2,
                title: "Bom Sucesso",
                description: "Paloma e Alberto constroem uma amizade capaz de ressignificar a vida deles, tendo como elo a paixão em comum pela literatura. Essa convivência vai afetar a todos que os rodeiam.",
                thumbnail: "https://s2.glbimg.com/OjUpeTC-pa7mxpcbzZ0Sf0eBPHQ=/362x536/https://s2.glbimg.com/H3E8w5OnoXJUNiIDqnZPH_efOCY=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/u/m/suF9CISDiILozAvBGpDA/2019-485-midia-kit-bom-sucesso-poster.jpg",
                detailPhoto: "//s2.glbimg.com/GCWOJw1DH41i2IWXSjfhykIX-Qw=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/X/a/ERZ7iASBSCwGyaFBf8og/2019-485-midia-kit-bom-sucesso-cover-programa-web.jpg"
            },
            {
                id: 3,
                title: "Carcereiros",
                description: "Inspirada na obra de Dráuzio Varella, a série premiada em Cannes traz a visão do agente penitenciário Adriano, que vive entre muros, grades, armas e ameaças.",
                thumbnail: "https://s2.glbimg.com/GfZeDQiCKD7ujZH2KJeXWAJHGR0=/362x536/https://s2.glbimg.com/02ChXc9qkpOdvwbVARgPYkjZQcE=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/H/W/Sv19LzRz2dG7JA9h52LA/carcereiros-2-poster-web.jpg",
                detailPhoto: "https://s2.glbimg.com/BGkgdNvb9gW9rewmGlWOhmiE0-E=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2018/L/i/0amRW1TiOFXSDVNl9nbA/carcereiros-2-programa-web.jpg"
            },
            {
                id: 4,
                title: "Escolinha do Professor Raimundo",
                description: "Bruno Mazzeo dá vida ao inesquecível professor Raimundo Nonato, personagem icônico criado pelo pai do ator, Chico Anysio. E o salário, ó...",
                thumbnail: "https://s2.glbimg.com/aYtAk_eT6cws-0u-T4785LKdfBU=/362x536/https://s2.glbimg.com/GeQoQeDHXmhLZ2GcJvRfOMbNJcE=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/H/E/fV16tDRyK42BVNZCwq7w/2019-481-escolinha-professor-poster.jpg",
                detailPhoto: "https://s2.glbimg.com/6P1-Rdp_nNxbuTPgW2ryo1xcjMw=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/s/n/ttLAboSPygHqoii7hX4w/2019-481-escolinha-professor-cover-programa-web.jpg"
            },
            {
                id: 5,
                title: "A Teia",
                description: "Série inspirada na rotina de ações criminais de Marco Aurélio Baroni, que tenta escapar das investigações do delegado Jorge Macedo, conhecido por métodos nada convencionais.",
                thumbnail: "https://s2.glbimg.com/Mot-nL4q7444bKndji9ZSI0GmrQ=/362x536/https://s2.glbimg.com/w_O3o3XKeG61a1MfnZ5vdPTCgc4=/s3.glbimg.com/v1/AUTH_180b9dd048d9434295d27c4b6dadc248/media_kit/53/db/8307ed89f5c337b4596ce044770b.jpg",
                detailPhoto: "https://s2.glbimg.com/Vh6jmLDMTzv8P8KV-B0pGpTqD9o=/s3.glbimg.com/v1/AUTH_180b9dd048d9434295d27c4b6dadc248/media_kit/e7/d2/f810d674686edeefee99824574fc.jpg"
            },
            {
                id: 6,
                title: "A Divisão",
                description: "O Rio de Janeiro está acuado por uma onda de sequestros nos anos 90. As forças de segurança chamam agentes de fama controversa para salvar a cidade de bandidos e até da polícia.",
                thumbnail: "https://s2.glbimg.com/L9BtVcmODzTG8uVlafMwfBs4Gz0=/362x536/https://s2.glbimg.com/hAATa-3po1oJeyNZr-ezRzdGQR4=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/5/h/rnvNaFT0GI9AWp5xiZBg/a-divisao-poster-web.jpg",
                detailPhoto: "https://s2.glbimg.com/M0Xw4P_vw1p-HhGIAG7F5bR7Jv8=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/l/S/dNY6aGQzqVMLWxctDyyQ/a-divisao-programa-web.jpg"
            },
            {
                id: 7,
                title: "Aruanas",
                description: "Três amigas líderes de uma ONG e a estagiária da organização investigam uma quadrilha de crimes ambientais na Amazônia, que envolve uma grande mineradora.",
                thumbnail: "https://s2.glbimg.com/JC1G1e0u6Gvngd2DzXWqvYSfZl0=/362x536/https://s2.glbimg.com/wwlvifldWLVuvKvINuANKWwtv0w=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/A/j/FWT2jkQXK2IGNX03zGug/2019-midia-kit-serie-aruanas-poster.jpg",
                detailPhoto: "https://s2.glbimg.com/qia3RrRPVvvrH37_nS772hWDOW4=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/x/H/O5hftGT32LXroBVvgCUw/2019-midia-kit-serie-aruanas-cover-programa-web.jpg"
            },
            {
                id: 8,
                title: "Sob Pressão",
                description: "Acompanhe a rotina de entrega, esforço e muita pressão pela qual os médicos de um hospital público passam todos os dias. Em comum, o desejo de salvar vidas.",
                thumbnail: "https://s2.glbimg.com/SwMSsLA6jRVoBIE57WRkv0WsvDQ=/362x536/https://s2.glbimg.com/oZO844_S6HcIizlXVi1Yt9Kpxb8=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/5/L/u8yFeoQMiKx3tTzTu56Q/sob-pressao-3-poster-web.jpg",
                detailPhoto: "https://s2.glbimg.com/u1wf7wgMit1oTy83lWVP3DtFutM=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/X/1/z7bhl6T2mHFjQRa634bQ/sob-pressao-3-programa-web.jpg"
            },
            {
                id: 9,
                title: "Assédio",
                description: "Em uma obra ficcional, uma rede de mulheres se forma para denunciar os abusos sexuais cometidos por um médico respeitado. A saga começa quando uma delas rompe o silêncio.",
                thumbnail: "https://s2.glbimg.com/5bKvZ4WP3YLDIIntQTdiC1mJMrY=/362x536/https://s2.glbimg.com/sWAe5LNiJ_9UKQIwrZo0_EW3o4k=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/i/2/kPApqJR028JddnOWallg/assedio-poster-web.jpg",
                detailPhoto: "https://s2.glbimg.com/sFH5h0Ya2FsuoNmK2Jp4ItDhMkw=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2018/A/l/luQGjuSByXztrST3rjMg/assedio-programa-web.jpg"
            },
            {
                id: 10,
                title: "Órfãos da Terra",
                description: "Diversas culturas, crenças, sonhos, sotaques e uma só nação: o Brasil. O casal Laila e Jamil desembarca no país para tentar viver o amor que os uniu ainda no Oriente Médio.",
                thumbnail: "https://s2.glbimg.com/M8Lji4u-zFR2P6fnsZk5ouq0Hqo=/362x536/https://s2.glbimg.com/GPGknTj7ZmAJ2fJelZMQLulVIbY=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/I/I/mi6VeFTxeGaBEblV8gsQ/2019-309-novela-orfaos-da-terra-poster.jpg",
                detailPhoto: "https://s2.glbimg.com/6Q_c7dQaopcEE0eh0pmXXnCrlK0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/L/H/jVP1hvSxA0ysUCWA4TgA/2019-309-novela-orfaos-da-terra-cover-programa-web.jpg"
            }
        ]
    });

    return (
        <MoviesContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MoviesContext.Provider>
    )
}