// notesData.js फ़ाइल

const subjects = [
    // 12. 📂 Merged PDFs
    {
        "title": "📂 Merged PDFs",
        "color": "purple",
        "notes": [
            { "name": "🌏 Geography", "link": "https://drive.google.com/file/d/1efaU406d55pWG-5naguYSR0UYS4pDKOQ/view?usp=drive_link" },
            { "name": "🏛️ Polity", "link": "https://drive.google.com/file/d/1Go0FPD1sNmc55YoobthPtsXHUHAMLi1c/view?usp=drive_link" },
            { "name": "🏺 Ancient History", "link": "https://drive.google.com/file/d/1y1dgfYrGfAqWdM9tTLJ1B8zKbox9J3JX/view?usp=drive_link" },
            { "name": "⚔️ Medieval History", "link": "https://drive.google.com/file/d/1BMQ1OArwOdt3a9JXVpSd7mlz7TS33WD-/view?usp=drive_link" },
            { "name": "🇮🇳 Modern History", "link": "https://drive.google.com/file/d/1YKp3q9AL5p02yFXVuUp1Fx0yLR5l6tkJ/view?usp=drive_link" },
            { "name": "📊 Economics", "link": "" },
            { "name": "⚛️ Physics", "link": "" },
            { "name": "🧪 Chemistry", "link": "" },
            { "name": "🧬 Biology", "link": "" },
            { "name": "🌳 Environment", "link": "" },
            { "name": "📖 Static GK", "link": "" }
        ]
    },

    // 1. 🌏 Geography
    {
        title: '🌏 Geography ✔️',
        color: 'violet',
        notes: [
            { name: '1. 🌌 SOLAR SYSTEM', link: 'https://drive.google.com/file/d/1oga0Z6CXNJh31XiK1sp9g6c_sLHsaqTe/view?usp=drive_link' },
            { name: '2. 🌐 LATITUDE AND LONGITUDE', link: 'https://drive.google.com/file/d/1GPA4WC5YbMdLASvmTjgK9IXUBGlTQyHs/view?usp=drive_link' },
            { name: '3. 🌋 ROCKS AND VOLCANOES', link: 'https://drive.google.com/file/d/1UWh1MSoa5CxRl37pLbkERXWeALuu0VoR/view?usp=drive_link' },
            { name: "4. 🧱 EARTH'S INTERIOR & PLATE TECTONICS", link: 'https://drive.google.com/file/d/1jOtWa67ev4oHCO21J-YKB0iClP_y0NR5/view?usp=drive_link' },
            { name: '5. 🗺️ CONTINENTS AND OCEANS', link: 'https://drive.google.com/file/d/1XI07VXPzW63qpiXDxZ4wEfTU5cvSHdEP/view?usp=drive_link' },
            { name: '6. ⛰️ GEOMORPHIC PROCESS', link: 'https://drive.google.com/file/d/1rWFwiTl4buw2E3sad3_xlmIRKYwylzqF/view?usp=drive_link' },
            { name: '7. 🏔️ LANDFORMS', link: 'https://drive.google.com/file/d/1Cy-sASIWLP8hwBN3IU8x6AZJTDiNRAAA/view?usp=drive_link' },
            { name: '8. ☁️ ATMOSPHERE', link: 'https://drive.google.com/file/d/1tG5H4ikKXW4NU3527NsxMqLSH7L_Xq2L/view?usp=drive_link' },
            { name: '9. 🌬️ WINDS', link: 'https://drive.google.com/file/d/1NcrXMEfZ6eDZwCo8uAvji0O9RAId3R_1/view?usp=drive_link' }, 
            { name: '10. 🌧️ CONDENSATION AND PRECIPITATION', link: 'https://drive.google.com/file/d/1Fn2ILFHVO2660e6rwuhvP6GbEMNEhv1m/view?usp=drive_link' },
            { name: '11. 🌀 CYCLONES AND 🌊 OCEAN CURRENTS', link: 'https://drive.google.com/file/d/11-zqvQpecutHVxd5NbMSq1pfl7vp6NPO/view?usp=drive_link' },
            { name: '12. 📍 INDIA AND ITS LOCATION', link: 'https://drive.google.com/file/d/1y4G6HSFpk985PJPIxhyHrbZzrOJZr7jH/view?usp=drive_link' }, 
            { name: '13. 🏔️ HIMALAYAS', link: 'https://drive.google.com/file/d/1Vq_iafJ6VUiT96mYm_oJXklQsEONN8bo/view?usp=drive_link' }, 
            { name: '14. ⛰️ PENINSULAR PLATEAU', link: 'https://drive.google.com/file/d/1w_ejNQ1r7xrOLx92151pXXDyVG2tOWFU/view?usp=drive_link' }, 
            { name: '15. 🏝️ PLAINS AND ISLANDS', link: 'https://drive.google.com/file/d/1THfAO6cZ6svUa2q7edel5VWCL4FH0omz/view?usp=drive_link' },
            { name: '16. 🌊 HIMALAYAN RIVER SYSTEMS', link: 'https://drive.google.com/file/d/1xBVEiQWi1XrBj8f-e0zKIK0km5so170S/view?usp=drive_link' },
            { name: '17. 🌊 PENINSULAR RIVERS', link: 'https://drive.google.com/file/d/1g1pxLj_ZngUeA1EHmSvwSXdLio-lfBBh/view?usp=drive_link' }, 
            { name: '18. ⛲ DAMS, LAKES AND WATERFALLS', link: 'https://drive.google.com/file/d/1qgJV8QLm3e6ScjpZ4MMiEBaItdJMetDL/view?usp=drive_link' },
            { name: '19. ⛈️ MONSOON', link: 'https://drive.google.com/file/d/1KP-oyEOs3pMuMHz8lVLbBl7AYW5lS0Vo/view?usp=drive_link' },
            { name: '20. 🌲 Forest and Grassland', link: 'https://drive.google.com/file/d/1MfmY9neaXNKsB5ayKkiiwxX-_U6BWYBg/view?usp=drive_link' },
            { name: '21. 🏜️ Soil', link: 'https://drive.google.com/file/d/10DFmz-FB_IBB2XVjYEPQHdTNADvRm_ng/view?usp=drive_link' },
            { name: '22. 🚜 Agriculture', link: 'https://drive.google.com/file/d/1NKfshFzlqdtNLQp8JOaBAi5zEmLxG-3v/view?usp=drive_link' },
            { name: '23. 💎 Minerals', link: 'https://drive.google.com/file/d/1elWz5Cftwjo69AcsnOCjmwx_g0QH5U6-/view?usp=drive_link' },
            { name: '24. 🛣️ Transport', link: 'https://drive.google.com/file/d/14jLiZlgf2EVUeFbiQ8RUiG99YkU8T6TT/view?usp=drive_link' },
            { name: '25. 🗺️ World Maps', link: 'https://drive.google.com/file/d/1S9R6S02ox35OwU7orJQgB5dlfKjvRRx_/view?usp=drive_link' },
            { name: '26. 👥 Human Geography', link: 'https://drive.google.com/file/d/1OgSiNhTkENd3Ih71DH6UYQuNWaUwjOu5/view?usp=drive_link' }
        ]
    },

    // 2. 🏛️ Polity
    {
        title: '🏛️ Polity ✔️',
        color: '#FFC300',
        notes: [
            { name: '1. ✍️ Making of Constitution', link: 'https://drive.google.com/file/d/12UEjd4BIlXxkzMBqDNHvAmicK3TYU-Me/view?usp=drive_link' },
            { name: '2. ✨ Salient Features', link: 'https://drive.google.com/file/d/1omP5JDD4bXmA7o2xeIWLisYTaDrSDFRD/view?usp=drive_link' },
            { name: '3. 📜 Preamble', link: 'https://drive.google.com/file/d/1VtY7dalZS9Jh5w2VpO7DiD_OraV5MCAY/view?usp=drive_link' },
            { name: '4. 📑 Parts of the Constitution', link: 'https://drive.google.com/file/d/18JQ-LhO6LJt1pCVujA-DrdC0zVQOI9ef/view?usp=drive_link' },
            { name: '5. ⚖️ Fundamental Rights', link: 'https://drive.google.com/file/d/1fE8qS5jNyvuSKsYvYhJZ2Kahkz6ya_H2/view?usp=drive_link' },
            { name: '6. 🎯 DPSP and Fundamental Duties', link: 'https://drive.google.com/file/d/1sBfe_6TnxtrLlEzD_y8mCTMDQWC5tONZ/view?usp=drive_link' },
            { name: '7. 🇮🇳 President and Vice President', link: 'https://drive.google.com/file/d/1PkiYuE5PMr7GLmQ29XXIgnT9WZJQAse6/view?usp=drive_link' },
            { name: '8. 🤝 PM and Council of Ministers', link: 'https://drive.google.com/file/d/1FJVAlGbdofQlIowiZrJGU91g8AGPllnu/view?usp=drive_link' },
            { name: '9. 🏛️ Parliament Part 1', link: 'https://drive.google.com/file/d/1IM-XY6gj4a9fjMus1Fjod7idfc-NeuiC/view?usp=drive_link' },
            { name: '10. 🏛️ Parliament Part 2', link: 'https://drive.google.com/file/d/1D3JLoiCvrn9JbS_OFpcN_PYbHtnVoy4z/view?usp=drive_link' },
            { name: '11. 🏘️ State Legislature', link: 'https://drive.google.com/file/d/1GqWGY53RGoeNfScOvUg7MElwLHRtzGTH/view?usp=drive_link' },
            { name: '12. 🚨 Emergency and Amendments', link: 'https://drive.google.com/file/d/1qtjAxIH_iEZLmVKYsok5SE5YSbIH5_hg/view?usp=drive_link' },
            { name: '13. 👨‍⚖️ Supreme Court and High Court', link: 'https://drive.google.com/file/d/1217Zmcj_3nOQRdzWrS53OXvawx0C09Be/view?usp=drive_link' },
            { name: '14. 🏡 Local Bodies (Panchayat/Muncipality)', link: 'https://drive.google.com/file/d/1217Zmcj_3nOQRdzWrS53OXvawx0C09Be/view?usp=drive_link' },
            { name: '15. 👥 Constitutional Bodies', link: 'https://drive.google.com/file/d/1ysnvN9zigv1zdGIYnZ3XOvkg7kSxjWNS/view?usp=drive_link' },
        ]
    },

    // 3. 🏺 Ancient History
    {
        title: '🏺 Ancient History',
        color: 'indigo',
        notes: [
            { name: '1. 🗿 Stone Age', link: 'https://drive.google.com/file/d/1GGeIYuFXz1pzIjx8iY8ODec9JrLbDuQa/view?usp=drive_link' },
            { name: '2. 🧱 Indus Valley Civilization', link: 'https://drive.google.com/file/d/1ojwePbKa1ncZvkCS-8eh08cknrpNUp0v/view?usp=drive_link' },
            { name: '3. 📜 Vedic Age', link: 'https://drive.google.com/file/d/1D_l3YcDz2dCuQspx8Jmb7oPk7FhFaUmT/view?usp=drive_link' },
            { name: '4. 🧘 Jainism and Buddhism', link: 'https://drive.google.com/file/d/1XlqPJYSLFmWHKRvRpsTdEjptEjXZzEab/view?usp=drive_link' },
            { name: '5. ⚔️ Mahajanpadas and Magadha', link: 'https://drive.google.com/file/d/1Cv9RGmIzLseM-zaN0X-8Na8xs1vpMYBd/view?usp=drive_link' },
            { name: '6. 👑 Mauryan Empire', link: 'https://drive.google.com/file/d/1qr5Q09QZBqk0MzOwoSlgklAEr3m72Te8/view?usp=drive_link' },
            { name: '7. 🛡️ Post-Mauryan Era', link: 'https://drive.google.com/file/d/1QZvIUwtmmarO-Bova6JdINQxWfDdQscf/view?usp=drive_link' },
            { name: '8. 🪙 Gupta Empire', link: 'https://drive.google.com/file/d/1P1WWyfy42pB3NyYlkiSzQ8R0jG_pwvFL/view?usp=drive_link' },
            { name: '9. 🏰 Post-Gupta Era', link: 'https://drive.google.com/file/d/1sy5feK8uA41VfbbPPrZRzfs8m9n0oyd1/view?usp=drive_link' },
            { name: '10. 🚩 Harshavardhana Era', link: 'hhttps://drive.google.com/file/d/1xnH-cHYrHSJcqTVl7I7knUSll0ARerMU/view?usp=drive_link' },
            { name: '11. ⛵ Sangam Age', link: 'https://drive.google.com/file/d/1TY6lEp4jdE83vE69zdda722cjJPQl-wo/view?usp=drive_link' },
            { name: '12. ⚔️ Tripartite Struggle and Cholas', link: 'https://drive.google.com/file/d/1a3tjvce_IB0CuuEVx6VwYnG9TvQxiGPb/view?usp=drive_link' }
        ]
    },

    // 4. ⚔️ Medieval History
    {
        title: '⚔️ Medieval History',
        color: 'blue',
        notes: [
            { name: '1. 🕌 Invasion of Islam', link: 'https://drive.google.com/file/d/1dsMMA7hu5x0dJuywTlx_oDI82an7uxhh/view?usp=drive_link' },
            { name: '2. 🏰 Delhi Sultanate 1', link: 'https://drive.google.com/file/d/18Pq2CU-sWRVTiV8IA3g43KvFMVLfwnF-/view?usp=drive_link' },
            { name: '3. 🏰 Delhi Sultanate 2', link: 'https://drive.google.com/file/d/1Y_amDdUHAdQ_35a88wAe6K8F2DEo8Wbw/view?usp=drive_link' },
            { name: '4. 💎 Vijayanagara and Bahmani', link: 'https://drive.google.com/file/d/1OeDEfuGt1g7RkA-gb1THLxvq_opQXhxa/view?usp=drive_link' },
            { name: '5. 👑 Mughal Empire 1', link: 'https://drive.google.com/file/d/1PZl9C86_zSwsWOy9fa2FR_5QRQWxB8-Z/view?usp=drive_link' },
            { name: '6. 👑 Mughal Empire 2', link: 'https://drive.google.com/file/d/1eigkqZIULSDwDloZU_JPnjBnnq8ZgNph/view?usp=drive_link' },
            { name: '7. 🚩 Maratha Empire', link: 'https://drive.google.com/file/d/12VK_ikpig5rV4CucJQOCXX_3pJnrAD14/view?usp=drive_link' },
            { name: '8. 📉 Later Mughals', link: 'https://drive.google.com/file/d/1GYnkmTNhKOpLLLLu1VQqCjcBhf9Bqo6f/view?usp=drive_link' }
        ]
    },

    // 5. 🇮🇳 Modern History
    {
        title: '🇮🇳 Modern History',
        color: 'green',
        notes: [
            { name: '1. 🚢 Advent of Europeans', link: 'https://drive.google.com/file/d/1UKIoS4pHRP138oofyQDdUMaTkSsXdi9L/view?usp=drive_link' },
            { name: '2. 💡 Socio-Religious Reforms', link: 'https://drive.google.com/file/d/1vDQ2JKvYNA04b86myYePRjTQjlr9ZnYF/view?usp=drive_link' },
            { name: '3. 💥 Revolt of 1857', link: 'https://drive.google.com/file/d/1dMDi10vT-NIRpz0sqpKN5zTeRuUO6IuE/view?usp=drive_link' },
            { name: '4. 🤝 Indian National Congress', link: 'https://drive.google.com/file/d/10urtyZ6iKrAXyFX-Tc72kdh5NNlA8mcH/view?usp=drive_link' },
            { name: '5. 💔 Bengal Partition & Swadeshi', link: 'https://drive.google.com/file/d/1J5DcZc2knTRpu174SJQ1k1gBf4hpXqVs/view?usp=drive_link' },
            { name: '6. 🕊️ Gandhian Era', link: 'https://drive.google.com/file/d/1jqYMP2ppi-4XzDhXW8--Pib1G1aUnssx/view?usp=drive_link' },
            { name: '7. ✊ Revolutionary Movements', link: 'https://drive.google.com/file/d/1_E4EI0JwqE0XyTB_zES7-TxF3CN9HDTY/view?usp=drive_link' },
            { name: '8. 🇮🇳 Quit India Movement', link: 'https://drive.google.com/file/d/1hceq0Dm1_1RTE-rqoN-mS8MQt3DzrWEx/view?usp=drive_link' },
            { name: '9. 📢 Civil Disobedience', link: 'https://drive.google.com/file/d/1HMisKoAHb8wAAgUwwX51w206D-T2mb75/view?usp=drive_link' }
        ]
    },

    // 6. 📊 Economics
    {
        title: '📊 Economics',
        color: 'orange',
        notes: [
            { name: '1. 📈 Basics of Economy', link: 'https://drive.google.com/file/d/1xftMTgrmwCaSpg0CtsmIvECUXCQ549N_/view?usp=drive_link' },
            { name: '2. 📉 Demand and Supply', link: 'https://drive.google.com/file/d/1YGTMEPaD9tl5VJnq7dHgv3vqmbMwATI3/view?usp=drive_link' },
            { name: '3. 💰 National Income', link: 'https://drive.google.com/file/d/1l7tOe9pV9hn06iBY5p8ow4Azv7wLzG2v/view?usp=drive_link' },
            { name: '4. 💸 Inflation and Unemployment', link: 'https://drive.google.com/file/d/1cn2v_7qK5vBATFb_n25PcwSE9WzTt7Qr/view?usp=drive_link' },
            { name: '5. 🧾 Budget and Taxation', link: 'https://drive.google.com/file/d/1dGzcjEhKRtmRaDqScieARoR1Tw9Lf3fn/view?usp=drive_link' },
            { name: '6. 🏦 Monetary Policy', link: 'https://drive.google.com/file/d/1kkdq8rO2IzCMmSgOUCoaVbIXukaV3RUP/view?usp=drive_link' },
            { name: '7. 🏧 Money and Banking', link: 'https://drive.google.com/file/d/1g6i-BOTDlBZOVYYKPqKuLGadlFcfHGLS/view?usp=drive_link' },
            { name: '8. ⚖️ Balance of Payment', link: 'https://drive.google.com/file/d/1zlynQZU1tXUaKv4DvyluBbg5HKrP0Wdl/view?usp=drive_link' },
            { name: '9. 📅 Five Year Plans', link: 'https://drive.google.com/file/d/1GpRafPnyVamn4bHz-t8fCA24z-9MjiPS/view?usp=drive_link' },
            { name: '10. 🏠 Poverty', link: 'https://drive.google.com/file/d/1Auyw0rf5a746g3I3yIRm0VeJA594-J_d/view?usp=drive_link' }
        ]
    },

    // 7. ⚛️ Physics
    {
        title: '⚛️ Physics',
        color: 'red',
        notes: [
            { name: '1. 🏃 Motion', link: 'https://drive.google.com/file/d/1pcKPpmyu0H3prlWfBfAjxSp8ePYDwETL/view?usp=drive_link' },
            { name: '2. 🚀 Force and Laws of Motion', link: 'https://drive.google.com/file/d/1CPjMYA7D0T3mYC-8Udq_mjGd-ulLPcom/view?usp=drive_link' },
            { name: '3. 🌍 Gravitation and Work', link: 'https://drive.google.com/file/d/1LKTuUynu7AQGTT26ImA3layFJaWvXmFR/view?usp=drive_link' },
            { name: '4. 🔊 Sound', link: 'https://drive.google.com/file/d/1caF1JsKi1kyGkIhOfZPrsrJG5la091Eh/view?usp=drive_link' },
            { name: '5. 🔦 Light (Reflection & Refraction)', link: 'https://drive.google.com/file/d/1W1OknZ1SWYr83u_4sUW2s9g6MQ3Vx5ZR/view?usp=drive_link' },
            { name: '6. 👁️ Human Eye', link: 'https://drive.google.com/file/d/134sIdr5Hr8pI0ScTGiY9Ad8ogSjbk4uB/view?usp=drive_link' },
            { name: '7. ⚡ Electricity', link: 'https://drive.google.com/file/d/1iJhpsXwiZQYASjvH5kJ1sLDPCX6RmjJO/view?usp=drive_link' },
            { name: '8. 🧲 Magnetism', link: 'https://drive.google.com/file/d/1_TptK2BnVfkk8J2gl47nKajYdvvDoLeY/view?usp=drive_link' }
        ]
    },

    // 8. 🧪 Chemistry
    {
        title: '🧪 Chemistry',
        color: 'violet',
        notes: [
            { name: '1. 🧊 Matter', link: 'https://drive.google.com/file/d/1J18yaCXQnX-0QMq2E5nvzAzC686Bg_YO/view?usp=drive_link' },
            { name: '2. ⚛️ Atom and Structure', link: 'https://drive.google.com/file/d/1TcXepOsUHnFcMWyrd_RnjkTbhjHcrwLg/view?usp=drive_link' },
            { name: '3. 📋 Periodic Table', link: 'https://drive.google.com/file/d/1RBL4CGSOAT7laLTnS2BEyzTXHgWfPRG7/view?usp=drive_link' },
            { name: '4. 💥 Chemical Reactions', link: 'https://drive.google.com/file/d/1MCJ9IlWjj1C47Vqnltz88mPO-uI846NO/view?usp=drive_link' },
            { name: '5. 🪙 Metals and Non-Metals', link: 'https://drive.google.com/file/d/13_EC6MGPiDIP1nTmW1ZJQcBQuihS3b5X/view?usp=drive_link' },
            { name: '6. 🧪 Acids, Bases and Salts', link: 'https://drive.google.com/file/d/1TU5fcJCsZrgA1CONG4-mWEbMQbxIPxnx/view?usp=drive_link' },
            { name: '7. 💎 Carbon Compounds', link: 'https://drive.google.com/file/d/1mZILVUqiRD56MNzWMBBespgA9o9SeBlY/view?usp=drive_link' },
            { name: '8. 🧬 Purity of Matter', link: 'https://drive.google.com/file/d/1Ct63xbybMHJ_drVLj3H-729_X3RMYZlD/view?usp=drive_link' }
        ]
    },

    // 9. 🧬 Biology
    {
        title: '🧬 Biology',
        color: 'indigo',
        notes: [
            { name: '1. 🔬 Cell: The Unit of Life', link: 'https://drive.google.com/file/d/1sPUhgem5c64prrJn796CLSlyKjWGHYED/view?usp=drive_link' },
            { name: '2. 🌿 Plant Tissues', link: 'https://drive.google.com/file/d/1x2EH9OTXNWbqLhenZcBxbt8-8LQT5Hjl/view?usp=drive_link' },
            { name: '3. 🥩 Animal Tissues', link: 'https://drive.google.com/file/d/1y4NjL2vRDdFVrLeHSrCJmVMbRrCNAf8J/view?usp=drive_link' },
            { name: '4. 🌳 Plant Kingdom', link: 'https://drive.google.com/file/d/1dNOM2W63AWaE7fYNt2bvWnq5BQ0p-2Kd/view?usp=drive_link' },
            { name: '5. 🦁 Animal Kingdom', link: 'https://drive.google.com/file/d/1pMs9YWvSQxkxwpP9EhkcR-EtY6-rvQMY/view?usp=drive_link' },
            { name: '6. 🧠 Nervous System', link: 'https://drive.google.com/file/d/1pBhLEN35xzFjZFCTmuACPb0DxaebRcXr/view?usp=drive_link' },
            { name: '7. 🍃 Plant Hormones', link: 'https://drive.google.com/file/d/1OH5nAWU-YdNgsM0aZ2vgITLDZ-snWKQ6/view?usp=drive_link' },
            { name: '8. 👣 Reproduction System', link: 'https://drive.google.com/file/d/1akELGnxB76vYsjkgFeFW3ZkV2paX2CIg/view?usp=drive_link' },
            { name: '9. 🫁 Digestion & Respiration', link: 'https://drive.google.com/file/d/1v9gCxDFDlXzsEddwBoHOcpZiz6kYGV1y/view?usp=drive_link' },
            { name: '10. 🩸 Circulatory & Excretory', link: 'https://drive.google.com/file/d/1a3y9h1J-vKgiT9bW4MZXOf5-zpLqSEW_/view?usp=drive_link' },
            { name: '11. 🦠 Diseases', link: 'https://drive.google.com/file/d/1RWmDBG74jzRcAYyiROuowYWrtWzsWU6N/view?usp=drive_link' }, 
            { name: '12. 🍎 Nutrition', link: 'https://drive.google.com/file/d/1RWmDBG74jzRcAYyiROuowYWrtWzsWU6N/view?usp=drive_link' },
            { name: '13. 🦴 Genetics & Skeleton', link: 'https://drive.google.com/file/d/1-GR_CTaqXPmWx1A5_1f8VyilvtDO9Usn/view?usp=drive_link' }
        ]
    },

    // 10. 🌳 Environment
    {
        title: '🌳 Environment',
        color: 'blue',
        notes: [
            { name: '1. 🌏 Environmental Basics', link: 'LINK' },
            { name: '2. 🕸️ Ecosystem', link: 'LINK' },
            { name: '3. 🔄 Energy Transfer', link: 'LINK' },
            { name: '4. 💧 Biogeochemical Cycles', link: 'LINK' },
            { name: '5. 🤝 Environmental Conventions', link: 'LINK' }
        ]
    },

    // 11. 📖 Static GK
    {
        title: '📖 Static GK',
        color: 'green',
        notes: [
            { name: '1. 💃 Classical Dances', link: 'LINK' },
            { name: '2. 🕺 Folk Dances', link: 'LINK' },
            { name: '3. 📊 Census', link: 'LINK' },
            { name: '4. 🎺 Musical Instruments', link: 'LINK' },
            { name: '5. 🎼 Gharanas', link: 'LINK' },
            { name: '6. 🗓️ Important Days', link: 'LINK' },
            { name: '7. 📚 Books and Authors', link: 'LINK' },
            { name: '8. 🏆 Sports', link: 'LINK' },
            { name: '9. 🌐 International Orgs', link: 'LINK' },
            { name: '10. 🏛️ National Orgs', link: 'LINK' },
            { name: '11. 🎊 Festivals', link: 'LINK' },
            { name: '12. 📜 Govt Schemes', link: 'LINK' },
            { name: '13. 🎖️ Awards and Honours', link: 'LINK' }
        ]
    }
];
