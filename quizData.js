// quizData.js फ़ाइल

const quizSubjects = [

    // ✨ यह नया विषय जोड़ा गया है और अब सबसे पहले है: Weekly Test Quizzes
    {
        title: '🗓️ Weekly Test Quizzes',
        color: '#E67E22', // एक अलग रंग (Orange/Carrot)
        quizzes: [
            // **TESTING PLACEHOLDER:** यह लिंक अब 'Adding Soon' संदेश दिखाएगा और 'Back to Subject' बटन सक्रिय करेगा।
            { name: 'Weekly Test 1 - Geography', link: 'quiz_files/Weekly/week_1_geo.html' }, 
            { name: 'Weekly Test 2 - Geography', link: 'quiz_files/Weekly/week_2_geo.html' },
            { name: 'Weekly Test 3 - Geography', link: 'quiz_files/Weekly/week_3_geo.html' },
            { name: 'Weekly Test 4 - Geography', link: 'quiz_files/Weekly/week_4_geo.html' }
        ]
    },
    
    {
        title: '🌍 Geography Quizzes',
        color: 'violet',
        quizzes: [ 
            
            // Geography - 1 से 25 तक के टॉपिक्स (Quizzes)
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
            { name: '15. 🏝️ PLAINS AND ISLANDS Quiz', link: 'quiz_files/Geography/geo_16_plains_islands.html' },
            { name: '16. 🌊 HIMALAYAN RIVER SYSTEMS Quiz', link: 'quiz_files/Geography/geo_15_himalayan_river.html' },
            { name: '17. 🌊 PENINSULAR RIVERS Quiz', link: 'quiz_files/Geography/geo_17_peninsular_rivers.html' }, 
            { name: '18. 🏞️ DAMS, LAKES AND WATERFALLS Quiz', link: 'quiz_files/Geography/geo_18_dams_lakes_waterfalls.html' },
            { name: '19. ⛈️ MONSOON Quiz', link: 'quiz_files/Geography/geo_19_monsoon.html' },
            { name: '20. 🌳 Forest and Grassland Quiz', link: 'quiz_files/Geography/geo_20_forest_grassland.html' },
            { name: '21. 🌾 Soil  Quiz', link: 'quiz_files/Geography/geo_21_soil.html' },
            { name: '22. ⛏️ Agriculture Quiz', link: 'quiz_files/Geography/geo_22_agriculture.html' },
            { name: '23. 🗺️ Minerals', link: 'quiz_files/Geography/geo_23_minerals.html' },
            { name: '24. 🏞️ Transport', link: 'quiz_files/Geography/geo_24_transport.html' },
            { name: '25. 🚗 World Map', link: 'quiz_files/Geography/geo_25_world_map.html' },
            { name: '26. 👨‍👨‍👦 Human Geography', link: 'Adding Soon' }


        ]
    },

      // Polity Quizzes
    {
        title: '📜 Polity Quizzes',
        color: '#FFC300',
        quizzes: [
            { name: '1. ✍️ Making of Constitution Quiz', link: 'Adding Soon' },
            { name: '2. ✨ Salient Features of the Constitution Quiz', link: 'Adding Soon' },
            { name: '3. 📖 Preamble Quiz', link: 'Adding Soon' },
            { name: '4. 📚 Parts of the Constitution Quiz', link: 'Adding Soon' },
            { name: '5. ⚖️ Fundamental Rights Quiz', link: 'Adding Soon' },
            { name: '6. 🎯 Directive Principles and Fundamental Duties Quiz', link: 'Adding Soon' },
            { name: '7. 🤵 President and Vice President of India Quiz', link: 'Adding Soon' },
            { name: '8. 🏛️ Prime Minister and Council of Ministers Quiz', link: 'Adding Soon' },
            { name: '9. 🏛️ Parliament Quiz', link: 'Adding Soon' },
            { name: '10. 🏘️ State Legislature Quiz', link: 'Adding Soon' },
            { name: '11. 🚨 Emergency & Constitutional Amendment Quiz', link: 'Adding Soon' },
            { name: '12. ⚖️ Supreme Court and High Court Quiz', link: 'Adding Soon' },
            { name: '13. 🏡 Local Government Quiz', link: 'Adding Soon' },
            { name: '14. 👥 Constitutional and Non-Constitutional Bodies Quiz', link: 'Adding Soon' },
            { name: '15. 📜 Important Acts Quiz', link: 'Adding Soon' },
            { name: '16. 🗺️ Sources of the Indian Constitution Quiz', link: 'Adding Soon' }
        ]
    },
    
    // Ancient History Quizzes
    {
        title: '🏺 Ancient History Quizzes',
        color: 'indigo',
        quizzes: [
            { name: '1. 🗿 Stone Age Quiz', link: 'Adding Soon' },
            { name: '2. 🏛️ Indus Valley Civilization Quiz', link: 'Adding Soon' },
            { name: '3. 📜 Vedic Age Quiz', link: 'Adding Soon' },
            { name: '4. 🧘 Jainism and Buddhism Quiz', link: 'Adding Soon' },
            { name: '5. ⚔️ Mahajanpadas Quiz', link: 'Adding Soon' },
            { name: '6. 👑 Maurya Dynasty Quiz', link: 'Adding Soon' },
            { name: '7. 🛡️ Post-Maurya Dynasties Quiz', link: 'Adding Soon' },
            { name: '8. 🪙 Gupta Dynasty Quiz', link: 'Adding Soon' },
            { name: '9. 🏰 Post-Gupta Dynasties Quiz', link: 'Adding Soon' },
            { name: '10. ⛵ Sangam Age Quiz', link: 'Adding Soon' },
            { name: '11. ⚔️ Tripartite Struggle and Cholas Quiz', link: 'Adding Soon' }
        ]
    },

    // Medieval History Quizzes
    {
        title: '⚔️ Medieval History Quizzes',
        color: 'blue',
        quizzes: [
            { name: '1. 🕌 Delhi Sultanate Quiz', link: 'Adding Soon' },
            { name: '2. 💎 Vijayanagara and Bahmani Kingdom Quiz', link: 'Adding Soon' },
            { name: '3. 🏰 Mughal Empire Quiz', link: 'Adding Soon' },
            { name: '4. 🚩 Marathas Quiz', link: 'Adding Soon' },
            { name: '5. 🙏 Bhakti and Sufi Movements Quiz', link: 'Adding Soon' }
        ]
    },

    // Modern History Quizzes
    {
        title: '🇮🇳 Modern History Quizzes',
        color: 'green',
        quizzes: [
            { name: '1. 🚢 Advent of Europeans Quiz', link: 'Adding Soon' },
            { name: '2. 💡 Socio-Religious Reforms Quiz', link: 'Adding Soon' },
            { name: '3. 💥 Revolt of 1857 Quiz', link: 'Adding Soon' },
            { name: '4. 🤝 Indian National Congress Quiz', link: 'Adding Soon' },
            { name: '5. 💔 Bengal Partition Quiz', link: 'Adding Soon' },
            { name: '6. 🕊️ Gandhian Era Quiz', link: 'Adding Soon' },
            { name: '7. ✊ CDM and Simon Commission Resolution Quiz', link: 'Adding Soon' },
            { name: '8. 🇮🇳 Quit India Movement Quiz', link: 'Adding Soon' },
            { name: '9. 🎩 Governor-General and Viceroy Quiz', link: 'Adding Soon' }
        ]
    },

    // Economics Quizzes
    {
        title: '💰 Economics Quizzes',
        color: 'orange',
        quizzes: [
            { name: '1. 📈 Basics of Economy Quiz', link: 'Adding Soon' },
            { name: '2. 🛒 Demand and Supply Quiz', link: 'Adding Soon' },
            { name: '3. 💰 National Income Quiz', link: 'Adding Soon' },
            { name: '4. 📉 Inflation and Unemployment Quiz', link: 'Adding Soon' },
            { name: '5. 🧾 Budget and Taxation Quiz', link: 'Adding Soon' },
            { name: '6. 🏦 Monetary Policy Quiz', link: 'Adding Soon' },
            { name: '7. 💵 Money and Banking Quiz', link: 'Adding Soon' },
            { name: '8. ⚖️ Balance of Payment and Poverty Quiz', link: 'Adding Soon' },
            { name: '9. 🏭 Five Year Plan and Industrial Policy Quiz', link: 'Adding Soon' }
        ]
    },

    // Physics Quizzes
    {
        title: '🧲 Physics Quizzes',
        color: 'red',
        quizzes: [
            { name: '1. 🏃 Motion Quiz', link: 'Adding Soon' },
            { name: '2. ➡️ Force and Laws of Motion Quiz', link: 'Adding Soon' },
            { name: '3. 🍎 Gravitation and Work Done Quiz', link: 'Adding Soon' },
            { name: '4. 🔊 Sound Quiz', link: 'Adding Soon' },
            { name: '5. 🌈 Reflection and Refraction Quiz', link: 'Adding Soon' },
            { name: '6. 👀 Human Eye and Vision Quiz', link: 'Adding Soon' },
            { name: '7. ⚡ Electricity Quiz', link: 'Adding Soon' },
            { name: '8. 🧲 Magnetic Effect of Electric Current Quiz', link: 'Adding Soon' }
        ]
    },

    // Chemistry Quizzes
    {
        title: '⚗️ Chemistry Quizzes',
        color: 'violet',
        quizzes: [
            { name: '1. ⚛️ Matter Quiz', link: 'Adding Soon' },
            { name: '2. 🧪 Atom and Its Structure Quiz', link: 'Adding Soon' },
            { name: '3. 📃 Periodic Table Quiz', link: 'Adding Soon' },
            { name: '4. 💥 Chemical Reactions Quiz', link: 'Adding Soon' },
            { name: '5. 🪙 Metals and Non-Metals Quiz', link: 'Adding Soon' },
            { name: '6. 🍋 Acid, Base and Salt Quiz', link: 'Adding Soon' },
            { name: '7. ⚫ Carbon and Its Compounds Quiz', link: 'Adding Soon' }
        ]
    },

    // Biology Quizzes
    {
        title: '🧬 Biology Quizzes',
        color: 'indigo',
        quizzes: [
            { name: '1. 🔬 Cell Quiz', link: 'Adding Soon' },
            { name: '2. 🌱 Plant Tissue and Animal Tissue Quiz', link: 'Adding Soon' },
            { name: '3. 🦁 Plant and Animal Kingdom Quiz', link: 'Adding Soon' },
            { name: '4. 🧠 Nervous System Quiz', link: 'Adding Soon' },
            { name: '5. 🌿 Hormones and Plant Movements Quiz', link: 'Adding Soon' },
            { name: '6. 👶 Reproduction Quiz', link: 'Adding Soon' },
            { name: '7. 🍏 Digestion and Respiration Quiz', link: 'Adding Soon' },
            { name: '8. ❤️ Circulatory System and Excretory System Quiz', link: 'Adding Soon' },
            { name: '9. 🤒 Diseases Quiz', link: 'Adding Soon' },
            { name: '10. 🥕 Nutrients Quiz', link: 'Adding Soon' },
            { name: '11. 🧬 Heredity and Evolution Quiz', link: 'Adding Soon' }
        ]
    },

    // Environment Quizzes
    {
        title: '🌱 Environment Quizzes',
        color: 'blue',
        quizzes: [
            { name: '1. 🌏 Basics of Environmental Sciences Quiz', link: 'Adding Soon' },
            { name: '2. 🕸️ Ecosystem Quiz', link: 'Adding Soon' },
            { name: '3. 🔄 Trophic Dynamics and Energy Transfer Quiz', link: 'Adding Soon' },
            { name: '4. 💧 Biogeochemical Cycles Quiz', link: 'Adding Soon' },
            { name: '5. 🤝 Environmental Conventions Quiz', link: 'Adding Soon' }
        ]
    },

    // Static GK Quizzes
    {
        title: '📚 Static GK Quizzes',
        color: 'green',
        quizzes: [
            { name: '1. 💃 Classical Dances Quiz', link: 'Adding Soon' },
            { name: '2. 🕺 Folk Dances of India Quiz', link: 'Adding Soon' },
            { name: '3. 📊 Census Quiz', link: 'Adding Soon' },
            { name: '4. 🎶 Musical Instruments Quiz', link: 'Adding Soon' },
            { name: '5. 🏘️ Gharanas Quiz', link: 'Adding Soon' },
            { name: '6. 🗓️ Important Days Quiz', link: 'Adding Soon' },
            { name: '7. ✍️ Books and Authors Quiz', link: 'Adding Soon' },
            { name: '8. ⚽ Sports Quiz', link: 'Adding Soon' },
            { name: '9. 🌐 International Organisations Quiz', link: 'Adding Soon' },
            { name: '10. 🇮🇳 National Organisations Quiz', link: 'Adding Soon' },
            { name: '11. 🎊 Festivals of India Quiz', link: 'Adding Soon' },
            { name: '12. 📜 Government Schemes Quiz', link: 'Adding Soon' },
            { name: '13. 🏆 Awards and Honours Quiz', link: 'Adding Soon' }
        ]
    }

];
