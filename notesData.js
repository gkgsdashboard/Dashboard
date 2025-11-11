// notesData.js फ़ाइल

const subjects = [
    // 1. 🌍 Geography
    {
        title: '🌍 Geography',
        color: 'violet',
        notes: [
            { name: '1. 🌌 SOLAR SYSTEM Notes', link: 'https://drive.google.com/file/d/1oga0Z6CXNJh31XiK1sp9g6c_sLHsaqTe/view?usp=drive_link' },
            { name: '2. 📍 LATITUDE AND LONGITUDE', link: 'https://drive.google.com/file/d/1GPA4WC5YbMdLASvmTjgK9IXUBGlTQyHs/view?usp=drive_link' },
            { name: '3. 🌋 ROCKS AND VOLCANOES', link: 'https://drive.google.com/file/d/1UWh1MSoa5CxRl37pLbkERXWeALuu0VoR/view?usp=drive_link' },
            { name: "4. 🌍 EARTH'S INTERIOR & PLATE TECHTONICS", link: 'https://drive.google.com/file/d/1jOtWa67ev4oHCO21J-YKB0iClP_y0NR5/view?usp=drive_link' },
            { name: '5. 🗺️ CONTINENT AND OCEAN ', link: 'https://drive.google.com/file/d/1XI07VXPzW63qpiXDxZ4wEfTU5cvSHdEP/view?usp=drive_link' },
            { name: '6. 🏞️ GEOMORPHIC PROCESS', link: 'https://drive.google.com/file/d/1rWFwiTl4buw2E3sad3_xlmIRKYwylzqF/view?usp=drive_link' },
            { name: '7. 🏔️ LANDFORMS', link: 'https://drive.google.com/file/d/1Cy-sASIWLP8hwBN3IU8x6AZJTDiNRAAA/view?usp=drive_link' },
            { name: '8. 🌬️ ATMOSPHERE', link: 'https://drive.google.com/file/d/1tG5H4ikKXW4NU3527NsxMqLSH7L_Xq2L/view?usp=drive_link' },
            { name: '9. 💨 WINDS', link: 'https://drive.google.com/file/d/1NcrXMEfZ6eDZwCo8uAvji0O9RAId3R_1/view?usp=drive_link' }, 
            { name: '10. 🌧️ CONDENSATION AND PRECIPITATION', link: 'https://drive.google.com/file/d/1Fn2ILFHVO2660e6rwuhvP6GbEMNEhv1m/view?usp=drive_link' },
            { name: '11. 🌀 CYCLONES AND 🌊 OCEAN CURRENTS', link: 'https://drive.google.com/file/d/11-zqvQpecutHVxd5NbMSq1pfl7vp6NPO/view?usp=drive_link' },
            { name: '12. 🇮🇳 INDIA AND ITS LOCATION', link: 'https://drive.google.com/file/d/1y4G6HSFpk985PJPIxhyHrbZzrOJZr7jH/view?usp=drive_link' }, 
            { name: '13. 🏔️ HIMALAYAS', link: 'https://drive.google.com/file/d/1Vq_iafJ6VUiT96mYm_oJXklQsEONN8bo/view?usp=drive_link' }, 
            { name: '14. 🏞️ PENINSULAR PLATEAU', link: 'https://drive.google.com/file/d/1w_ejNQ1r7xrOLx92151pXXDyVG2tOWFU/view?usp=drive_link' }, 
            { name: '15. 🏝️ PLAINS AND ISLANDS', link: 'https://drive.google.com/file/d/1THfAO6cZ6svUa2q7edel5VWCL4FH0omz/view?usp=drive_link' },
            { name: '16. 🌊 HIMALAYAN RIVER SYSTEMS ', link: 'https://drive.google.com/file/d/1xBVEiQWi1XrBj8f-e0zKIK0km5so170S/view?usp=drive_link' },
            { name: '17. 🌊 PENINSULAR RIVERS', link: 'https://drive.google.com/file/d/1g1pxLj_ZngUeA1EHmSvwSXdLio-lfBBh/view?usp=drive_link' }, 
            { name: '18. 🏞️ DAMS, LAKES AND WATERFALLS', link: 'https://drive.google.com/file/d/1qgJV8QLm3e6ScjpZ4MMiEBaItdJMetDL/view?usp=drive_link' },
            { name: '19. ⛈️ MONSOON', link: 'https://drive.google.com/file/d/1KP-oyEOs3pMuMHz8lVLbBl7AYW5lS0Vo/view?usp=drive_link' },
            { name: '20. 🌳 Forest and Grassland', link: 'https://drive.google.com/file/d/1MfmY9neaXNKsB5ayKkiiwxX-_U6BWYBg/view?usp=drive_link' },
            { name: '21. 🌾 Soil ', link: 'https://drive.google.com/file/d/10DFmz-FB_IBB2XVjYEPQHdTNADvRm_ng/view?usp=drive_link' },
            { name: '22. ⛏️ Agriculture', link: 'https://drive.google.com/file/d/1NKfshFzlqdtNLQp8JOaBAi5zEmLxG-3v/view?usp=drive_link' },
            { name: '23. 🗺️ Minerals', link: 'https://drive.google.com/file/d/1elWz5Cftwjo69AcsnOCjmwx_g0QH5U6-/view?usp=drive_link' },
            { name: '24. 🚗 Transport', link: 'https://drive.google.com/file/d/14jLiZlgf2EVUeFbiQ8RUiG99YkU8T6TT/view?usp=drive_link' },
            { name: '25. 🏞️ National Parks', link: 'YOUR_LINK_FOR_NATIONAL_PARKS' },
            { name: '26. 🏞️ World Maps', link: 'YOUR_LINK_FOR_NATIONAL_PARKS' }

        ]
    },

    // 2. 🏺 Ancient History
    {
        title: '🏺 Ancient History',
        color: 'indigo',
        notes: [
            { name: '1. 🗿 Stone Age', link: 'YOUR_LINK_FOR_STONE_AGE' },
            { name: '2. 🏛️ Indus Valley Civilization', link: 'YOUR_LINK_FOR_INDUS_VALLEY_CIVILIZATION' },
            { name: '3. 📜 Vedic Age', link: 'YOUR_LINK_FOR_VEDIC_AGE' },
            { name: '4. 🧘 Jainism and Buddhism', link: 'YOUR_LINK_FOR_JAINISM_AND_BUDDHISM' },
            { name: '5. ⚔️ Mahajanpadas', link: 'YOUR_LINK_FOR_MAHAJANPADAS' },
            { name: '6. 👑 Maurya Dynasty', link: 'YOUR_LINK_FOR_MAURYA_DYNASTY' },
            { name: '7. 🛡️ Post-Maurya Dynasties', link: 'YOUR_LINK_FOR_POST_MAURYA_DYNASTIES' },
            { name: '8. 🪙 Gupta Dynasty', link: 'YOUR_LINK_FOR_GUPTA_DYNASTY' },
            { name: '9. 🏰 Post-Gupta Dynasties', link: 'YOUR_LINK_FOR_POST_GUPTA_DNYASTIES' },
            { name: '10. ⛵ Sangam Age', link: 'YOUR_LINK_FOR_SANGAM_AGE' },
            { name: '11. ⚔️ Tripartite Struggle and Cholas', link: 'YOUR_LINK_FOR_TRIPARTITE_STRUGGLE_AND_CHOLAS' }
        ]
    },

    // 3. ⚔️ Medieval History
    {
        title: '⚔️ Medieval History',
        color: 'blue',
        notes: [
            { name: '1. 🕌 Delhi Sultanate', link: 'YOUR_LINK_FOR_DELHI_SULTANATE' },
            { name: '2. 💎 Vijayanagara and Bahmani Kingdom', link: 'YOUR_LINK_FOR_VIJAYANAGARA_AND_BAHMANI_KINGDOM' },
            { name: '3. 🏰 Mughal Empire', link: 'YOUR_LINK_FOR_MUGHAL_EMPIRE' },
            { name: '4. 🚩 Marathas', link: 'YOUR_LINK_FOR_MARATHAS' },
            { name: '5. 🙏 Bhakti and Sufi Movements', link: 'YOUR_LINK_FOR_BHAKTI_AND_SUFI_MOVEMENTS' }
        ]
    },

    // 4. 🇮🇳 Modern History
    {
        title: '🇮🇳 Modern History',
        color: 'green',
        notes: [
            { name: '1. 🚢 Advent of Europeans', link: 'YOUR_LINK_FOR_ADVENT_OF_EUROPEANS' },
            { name: '2. 💡 Socio-Religious Reforms', link: 'YOUR_LINK_FOR_SOCIO_RELIGIOUS_REFORMS' },
            { name: '3. 💥 Revolt of 1857', link: 'YOUR_LINK_FOR_REVOLT_OF_1857' },
            { name: '4. 🤝 Indian National Congress', link: 'YOUR_LINK_FOR_INDIAN_NATIONAL_CONGRESS' },
            { name: '5. 💔 Bengal Partition', link: 'YOUR_LINK_FOR_BENGAL_PARTITION' },
            { name: '6. 🕊️ Gandhian Era', link: 'YOUR_LINK_FOR_GANDHIAN_ERA' },
            { name: '7. ✊ CDM and Simon Commission Resolution', link: 'YOUR_LINK_FOR_CDM_AND_SIMON_COMMISSION_RESOLUTION' },
            { name: '8. 🇮🇳 Quit India Movement', link: 'YOUR_LINK_FOR_QUIT_INDIA_MOVEMENT' },
            { name: '9. 🎩 Governor-General and Viceroy', link: 'YOUR_LINK_FOR_GOVERNOR_GENERAL_AND_VICEROY' }
        ]
    },

    // 5. 📜 Polity
    {
        title: '📜 Polity',
        color: '#FFC300',
        notes: [
            { name: '1. ✍️ Making of Constitution', link: 'YOUR_LINK_FOR_MAKING_OF_CONSTITUTION' },
            { name: '2. ✨ Salient Features of the Constitution', link: 'YOUR_LINK_FOR_SALIENT_FEATURES_OF_THE_CONSTITUTION' },
            { name: '3. 📖 Preamble', link: 'YOUR_LINK_FOR_PREAMBLE' },
            { name: '4. 📚 Parts of the Constitution', link: 'YOUR_LINK_FOR_PARTS_OF_THE_CONSTITUTION' },
            { name: '5. ⚖️ Fundamental Rights', link: 'YOUR_LINK_FOR_FUNDAMENTAL_RIGHTS' },
            { name: '6. 🎯 Directive Principles and Fundamental Duties', link: 'YOUR_LINK_FOR_DIRECTIVE_PRINCIPLES_AND_FUNDAMENTAL_DUTIES' },
            { name: '7. 🤵 President and Vice President of India', link: 'YOUR_LINK_FOR_PRESIDENT_AND_VICE_PRESIDENT_OF_INDIA' },
            { name: '8. 🏛️ Prime Minister and Council of Ministers', link: 'YOUR_LINK_FOR_PRIME_MINISTER_AND_COUNCIL_OF_MINISTERS' },
            { name: '9. 🏛️ Parliament', link: 'YOUR_LINK_FOR_PARLIAMENT' },
            { name: '10. 🏘️ State Legislature', link: 'YOUR_LINK_FOR_STATE_LEGISLATURE' },
            { name: '11. 🚨 Emergency & Constitutional Amendment', link: 'YOUR_LINK_FOR_EMERGENCY_AND_CONSTITUTIONAL_AMENDMENT' },
            { name: '12. ⚖️ Supreme Court and High Court', link: 'YOUR_LINK_FOR_SUPREME_COURT_AND_HIGH_COURT' },
            { name: '13. 🏡 Local Government', link: 'YOUR_LINK_FOR_LOCAL_GOVERNMENT' },
            { name: '14. 👥 Constitutional and Non-Constitutional Bodies', link: 'YOUR_LINK_FOR_CONSTITUTIONAL_AND_NON_CONSTITUTIONAL_BODIES' },
            { name: '15. 📜 Important Acts', link: 'YOUR_LINK_FOR_IMPORTANT_ACTS' },
            { name: '16. 🗺️ Sources of the Indian Constitution', link: 'YOUR_LINK_FOR_SOURCES_OF_THE_INDIAN_CONSTITUTION' }
        ]
    },

    // 6. 💰 Economics
    {
        title: '💰 Economics',
        color: 'orange',
        notes: [
            { name: '1. 📈 Basics of Economy', link: 'YOUR_LINK_FOR_BASICS_OF_ECONOMY' },
            { name: '2. 🛒 Demand and Supply', link: 'YOUR_LINK_FOR_DEMAND_AND_SUPPLY' },
            { name: '3. 💰 National Income', link: 'YOUR_LINK_FOR_NATIONAL_INCOME' },
            { name: '4. 📉 Inflation and Unemployment', link: 'YOUR_LINK_FOR_INFLATION_AND_UNEMPLOYMENT' },
            { name: '5. 🧾 Budget and Taxation', link: 'YOUR_LINK_FOR_BUDGET_AND_TAXATION' },
            { name: '6. 🏦 Monetary Policy', link: 'YOUR_LINK_FOR_MONETARY_POLICY' },
            { name: '7. 💵 Money and Banking', link: 'YOUR_LINK_FOR_MONEY_AND_BANKING' },
            { name: '8. ⚖️ Balance of Payment and Poverty', link: 'YOUR_LINK_FOR_BALANCE_OF_PAYMENT_AND_POVERTY' },
            { name: '9. 🏭 Five Year Plan and Industrial Policy', link: 'YOUR_LINK_FOR_FIVE_YEAR_PLAN_AND_INDUSTRIAL_POLICY' }
        ]
    },

    // 7. 🧲 Physics
    {
        title: '🧲 Physics',
        color: 'red',
        notes: [
            { name: '1. 🏃 Motion', link: 'YOUR_LINK_FOR_MOTION' },
            { name: '2. ➡️ Force and Laws of Motion', link: 'YOUR_LINK_FOR_FORCE_AND_LAWS_OF_MOTION' },
            { name: '3. 🍎 Gravitation and Work Done', link: 'YOUR_LINK_FOR_GRAVITATION_AND_WORK_DONE' },
            { name: '4. 🔊 Sound', link: 'YOUR_LINK_FOR_SOUND' },
            { name: '5. 🌈 Reflection and Refraction', link: 'YOUR_LINK_FOR_REFLECTION_AND_REFRACTION' },
            { name: '6. 👀 Human Eye and Vision', link: 'YOUR_LINK_FOR_HUMAN_EYE_AND_VISION' },
            { name: '7. ⚡ Electricity', link: 'YOUR_LINK_FOR_ELECTRICITY' },
            { name: '8. 🧲 Magnetic Effect of Electric Current', link: 'YOUR_LINK_FOR_MAGNETIC_EFFECT_OF_ELECTRIC_CURRENT' }
        ]
    },

    // 8. ⚗️ Chemistry
    {
        title: '⚗️ Chemistry',
        color: 'violet',
        notes: [
            { name: '1. ⚛️ Matter', link: 'YOUR_LINK_FOR_MATTER' },
            { name: '2. 🧪 Atom and Its Structure', link: 'YOUR_LINK_FOR_ATOM_AND_ITS_STRUCTURE' },
            { name: '3. 📃 Periodic Table', link: 'YOUR_LINK_FOR_PERIODIC_TABLE' },
            { name: '4. 💥 Chemical Reactions', link: 'YOUR_LINK_FOR_CHEMICAL_REACTIONS' },
            { name: '5. 🪙 Metals and Non-Metals', link: 'YOUR_LINK_FOR_METALS_AND_NON_METALS' },
            { name: '6. 🍋 Acid, Base and Salt', link: 'YOUR_LINK_FOR_ACID_BASE_AND_SALT' },
            { name: '7. ⚫ Carbon and Its Compounds', link: 'YOUR_LINK_FOR_CARBON_AND_ITS_COMPOUNDS' }
        ]
    },

    // 9. 🧬 Biology
    {
        title: '🧬 Biology',
        color: 'indigo',
        notes: [
            { name: '1. 🔬 Cell', link: 'YOUR_LINK_FOR_CELL' },
            { name: '2. 🌱 Plant Tissue and Animal Tissue', link: 'YOUR_LINK_FOR_PLANT_TISSUE_AND_ANIMAL_TISSUE' },
            { name: '3. 🦁 Plant and Animal Kingdom', link: 'YOUR_LINK_FOR_PLANT_AND_ANIMAL_KINGDOM' },
            { name: '4. 🧠 Nervous System', link: 'YOUR_LINK_FOR_NERVOUS_SYSTEM' },
            { name: '5. 🌿 Hormones and Plant Movements', link: 'YOUR_LINK_FOR_HORMONES_AND_PLANT_MOVEMENTS' },
            { name: '6. 👶 Reproduction', link: 'YOUR_LINK_FOR_REPRODUCTION' },
            { name: '7. 🍏 Digestion and Respiration', link: 'YOUR_LINK_FOR_DIGESTION_AND_RESPIRATION' },
            { name: '8. ❤️ Circulatory System and Excretory System', link: 'YOUR_LINK_FOR_CIRCULATORY_SYSTEM_AND_EXCRETORY_SYSTEM' },
            { name: '9. 🤒 Diseases', link: 'YOUR_LINK_FOR_DISEASES' },
            { name: '10. 🥕 Nutrients', link: 'YOUR_LINK_FOR_NUTRIENTS' },
            { name: '11. 🧬 Heredity and Evolution', link: 'YOUR_LINK_FOR_HEREDITY_AND_EVOLUTION' }
        ]
    },

    // 10. 🌱 Environment
    {
        title: '🌱 Environment',
        color: 'blue',
        notes: [
            { name: '1. 🌏 Basics of Environmental Sciences', link: 'YOUR_LINK_FOR_BASICS_OF_ENVIRONMENTAL_SCIENCES' },
            { name: '2. 🕸️ Ecosystem', link: 'YOUR_LINK_FOR_ECOSYSTEM' },
            { name: '3. 🔄 Trophic Dynamics and Energy Transfer', link: 'YOUR_LINK_FOR_TROPHIC_DYNAMICS_AND_ENERGY_TRANSFER' },
            { name: '4. 💧 Biogeochemical Cycles', link: 'YOUR_LINK_FOR_BIOGEOCHEMICAL_CYCLES' },
            { name: '5. 🤝 Environmental Conventions', link: 'YOUR_LINK_FOR_ENVIRONMENTAL_CONVENTIONS' }
        ]
    },

    // 11. 📚 Static GK
    {
        title: '📚 Static GK',
        color: 'green',
        notes: [
            { name: '1. 💃 Classical Dances', link: 'YOUR_LINK_FOR_CLASSICAL_DANCES' },
            { name: '2. 🕺 Folk Dances of India', link: 'YOUR_LINK_FOR_FOLK_DANCES_OF_INDIA' },
            { name: '3. 📊 Census', link: 'YOUR_LINK_FOR_CENSUS' },
            { name: '4. 🎶 Musical Instruments', link: 'YOUR_LINK_FOR_MUSICAL_INSTRUMENTS' },
            { name: '5. 🏘️ Gharanas', link: 'YOUR_LINK_FOR_GHARANAS' },
            { name: '6. 🗓️ Important Days', link: 'YOUR_LINK_FOR_IMPORTANT_DAYS' },
            { name: '7. ✍️ Books and Authors', link: 'YOUR_LINK_FOR_BOOKS_AND_AUTHORS' },
            { name: '8. ⚽ Sports', link: 'YOUR_LINK_FOR_SPORTS' },
            { name: '9. 🌐 International Organisations', link: 'YOUR_LINK_FOR_INTERNATIONAL_ORGANISATIONS' },
            { name: '10. 🇮🇳 National Organisations', link: 'YOUR_LINK_FOR_NATIONAL_ORGANISATIONS' },
            { name: '11. 🎊 Festivals of India', link: 'YOUR_LINK_FOR_FESTIVALS_OF_INDIA' },
            { name: '12. 📜 Government Schemes', link: 'YOUR_LINK_FOR_GOVERNMENT_SCHEMES' },
            { name: '13. 🏆 Awards and Honours', link: 'YOUR_LINK_FOR_AWARDS_AND_HONOURS' }
        ]
    }
];