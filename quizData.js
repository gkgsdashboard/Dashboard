// quizData.js फ़ाइल

const quizSubjects = [

    // ✨ यह नया विषय जोड़ा गया है और अब सबसे पहले है: Weekly Test Quizzes
    {
        title: '🗓️ Weekly Test Quizzes',
        color: '#E67E22', // एक अलग रंग (Orange/Carrot)
        quizzes: [
            // आप यहाँ Weekly Tests जोड़ सकते हैं, उदाहरण के लिए:
            { name: 'Weekly Test 1 - Geography', link: 'quiz_files/Weekly/week_1_geo.html' },
            { name: 'Weekly Test 2 - Geography', link: 'quiz_files/Weekly/week_2_geo.html' },
            { name: 'Weekly Test 3 - Geography', link: 'quiz_files/Weekly/week_3_geo.html' }
        ]
    },
    
    {
        title: '🌍 Geography Quizzes',
        color: 'violet',
        quizzes: [ 
            
            // Geography के मौजूदा 16 टॉपिक्स
            { name: '1. 🌌 SOLAR SYSTEM Quiz', link: 'quiz_files/Geography/geo_1_solar_system.html' },
            { name: '2. 📍 LATITUDE AND LONGITUDE Quiz', link: 'quiz_files/Geography/geo_2_lat_long.html' },
            { name: '3. 🌋 ROCKS AND VOLCANOES Quiz', link: 'quiz_files/Geography/geo_3_rocks.html' },
            { name: "4. 🌍 EARTH'S INTERIOR & PLATE TECHTONICS Quiz", link: 'quiz_files/Geography/geo_4_earth_interior.html' },
            { name: '5. 🗺️ CONTINENT AND OCEAN Quiz', link: 'quiz_files/Geography/geo_5_continent_ocean.html' },
            { name: '6. 🏞️ GEOMORPHIC PROCESS Quiz', link: 'quiz_files/Geography/geo_6_geomorphic_process.html' },
            { name: '7. 🏔️ LANDFORMS Quiz', link: 'quiz_files/Geography/geo_7_landforms.html' },
            { name: '8. 🌬️ ATMOSPHERE Quiz', link: 'quiz_files/Geography/geo_8_atmosphere.html' },
            { name: '9. 💨 WINDS Quiz', link: 'quiz_files/Geography/geo_9_winds.html' }, 
            { name: '10. 🌧️ CONDENSATION AND PRECIPITATION Quiz', link: 'quiz_files/Geography/geo_10_condensation.html' },
            { name: '11. 🌀 CYCLONES AND 🌊 OCEAN CURRENTS Quiz', link: 'quiz_files/Geography/geo_11_cyclones.html' },
            { name: '12. 🇮🇳 INDIA AND ITS LOCATION Quiz', link: 'quiz_files/Geography/geo_12_india_location.html' }, 
            { name: '13. 🏔️ HIMALAYAS Quiz', link: 'quiz_files/Geography/geo_13_himalayas.html' }, 
            { name: '14. 🏞️ PENINSULAR PLATEAU Quiz', link: 'quiz_files/Geography/geo_14_plateau.html' },
            { name: '15. 🌊 HIMALAYAN RIVER SYSTEM Quiz', link: 'quiz_files/Geography/geo_15_himalayan_river.html' },
            { name: '16. 🌾 PLAINS AND 🏝️ ISLANDS Quiz', link: 'quiz_files/Geography/geo_16_plains_islands.html' },

            // ✅ NEWLY ADDED TOPICS Quizzes
            { name: '17. 🌊 PENINSULAR RIVERS Quiz', link: 'quiz_files/Geography/geo_17_peninsular_rivers.html' }, 
            { name: '18. 🏞️ DAMS, LAKES AND WATERFALLS Quiz', link: 'quiz_files/Geography/geo_18_dams_lakes_waterfalls.html' },
            { name: '19. ⛈️ MONSOON Quiz', link: 'quiz_files/Geography/geo_19_monsoon.html' }

        ]
    },

    {
        title: '🏺 Ancient History Quizzes',
        color: 'indigo',
        quizzes: []
    },

    {
        title: '⚔️ Medieval History Quizzes',
        color: 'blue',
        quizzes: []
    },

    {
        title: '🇮🇳 Modern History Quizzes',
        color: 'green',
        quizzes: []
    },

    {
        title: '📜 Polity Quizzes',
        color: '#FFC300',
        quizzes: []
    },

    {
        title: '💰 Economics Quizzes',
        color: 'orange',
        quizzes: []
    },

    {
        title: '🧲 Physics Quizzes',
        color: 'red',
        quizzes: []
    },

    {
        title: '⚗️ Chemistry Quizzes',
        color: 'violet',
        quizzes: []
    },

    {
        title: '🧬 Biology Quizzes',
        color: 'indigo',
        quizzes: []
    },

    {
        title: '🌱 Environment Quizzes',
        color: 'blue',
        quizzes: []
    },

    {
        title: '📚 Static GK Quizzes',
        color: 'green',
        quizzes: []
    }
];