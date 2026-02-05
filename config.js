// Configurazione centralizzata per il sito UDC.TV Link Hub
// Modifica questo file per aggiornare facilmente i link e le informazioni

const CONFIG = {
    // Informazioni principali
    title: "UDC.TV",
    subtitle: "Ufficiali di Campo TV",

    // Social Media Links
    socialLinks: [
        {
            name: "Instagram",
            username: "@udc.tv",
            url: "https://www.instagram.com/udc.tv",
            icon: "instagram" // Usa l'icona Instagram predefinita
        }
        // Aggiungi altri social media qui:
        // {
        //     name: "YouTube",
        //     username: "@udc.tv",
        //     url: "https://www.youtube.com/@udc.tv",
        //     icon: "youtube"
        // }
    ],

    // Progetti Open Source
    projects: [
        {
            name: "Libreria UDC",
            description: "Risorse e documentazione",
            url: "https://udc-tv.github.io/libreria"
        },
        {
            name: "OpenShotClock",
            description: "Timer 24 secondi open source",
            url: "https://udc-tv.github.io/OpenShotClock"
        },
        {
            name: "OpenScoreBoard",
            description: "Tabellone segnapunti open source",
            url: "https://udc-tv.github.io/OpenScoreBoard"
        }
    ],

    // Footer
    footer: {
        year: new Date().getFullYear(),
        text: "UDC.TV - Ufficiali di Campo TV"
    },

    // Colori del brand (per riferimento)
    brandColors: {
        navy: "#1a1d3a",
        navyLight: "#252a4d",
        navyDark: "#0f1123",
        digitalLab: "#00b5b5",
        trdUnit: "#8b60bd",
        mediaHouse: "#E88D00",
        green: "#009246",
        white: "#ffffff",
        red: "#ce2b37"
    }
};

// Esporta la configurazione (se usi moduli ES6)
// export default CONFIG;

// Per uso diretto in HTML, la configurazione è disponibile come variabile globale
if (typeof window !== 'undefined') {
    window.UDC_CONFIG = CONFIG;
}
