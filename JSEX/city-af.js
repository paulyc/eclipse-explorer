cities = new Array (
"- - - AFRICA - - -",  0,  0,  0,  0,  0,  0,  0,  0,
"Algiers, ALGERIA",  36,  47,   0,  -3,  -3,   0,  59.1,   1.0,
"Annaba, ALGERIA",  36,  54,   0,  -7, -46,   0,  20.1,   1.0,
"Constantine, ALGERIA",  36,  22,   0,  -6, -37,   0,   0.0,   1.0,
"Oran, ALGERIA",  35,  43,   0,   0,  43,   0,   0.0,   1.0,
"Luanda, ANGOLA",  -8, -48,   0, -13, -14,   0,  59.1,   1.0,
"Georgetown, ASCENSION IS.",  -7, -57,   0,  14,  22,   0,  16.8,   0.0,
"Ponta Delgada, AZORES",  37,  44,   0,  25,  40,   0,  36.0,  -1.0,
"Cotonou, BENIN",   6,  21,   0,  -2, -26,   0,   0.0,   1.0,
"Porto-Novo, BENIN",   6,  29,   0,  -2, -37,   0,   0.0,   1.0,
"Gaborone, BOTSWANA", -24, -45,   0, -25, -55,   0,   0.0,   2.0,
"Ouagadougou, BURKINA FASO",  12,  22,   0,   1,  31,   0,   0.0,   0.0,
"Bujumbura, BURUNDI",  -3, -23,   0, -29, -22,   0,   0.0,   2.0,
"Douala, CAMEROON",   4,   3,   0,  -9, -42,   0,   0.0,   1.0,
"Yaounde, CAMEROON",   3,  52,   0, -11, -31,   0, 769.9,   1.0,
"Praia, CAPE VERDE",  14,  55,   0,  23,  31,   0,  34.1,  -1.0,
"Bangui, CENTRAL AFRICAN REPUBLIC",   4,  22,   0, -18, -35,   0, 387.1,   1.0,
"Ndjamena, CHAD",  12,   7,   0, -15,  -3,   0, 295.0,   1.0,
"Brazzaville, CONGO",  -4, -16,   0, -15, -17,   0, 317.9,   1.0,
"Pointe-Noire, CONGO",  -4, -48,   0, -11, -51,   0,  50.0,   1.0,
"Kinshasa, DEM. REP. OF THE CONGO",  -4, -18,   0, -15, -18,   0,   0.0,   2.0,
"Kolwezi, DEM. REP. OF THE CONGO", -10, -43,   0, -25, -28,   0,   0.0,   2.0,
"Lubumbashi, DEM. REP. OF THE CONGO", -11, -40,   0, -27, -28,   0,   0.0,   2.0,
"Mbuji-Mayi, DEM. REP. OF THE CONGO",  -6,  -9,   0, -23, -38,   0,   0.0,   2.0,
"Djibouti, DJIBOUTI",  11,  36,   0, -43,  -9,   0,   7.0,   3.0,
"Alexandria, EGYPT",  31,  12,   0, -29, -54,   0,  32.0,   2.0,
"Al-Mansurah, EGYPT",  26,  28,   0, -31, -48,   0,   0.0,   2.0,
"Asyut, EGYPT",  27,  11,   0, -31, -11,   0,   0.0,   2.0,
"Bur Said, EGYPT",  31,  16,   0, -32, -18,   0,   0.0,   2.0,
"Cairo, EGYPT",  30,   3,   0, -31, -15,   0, 116.1,   2.0,
"Giza, EGYPT",  30,   1,   0, -31, -13,   0,   0.0,   2.0,
"Suez, EGYPT",  29,  58,   0, -32, -33,   0,   0.0,   2.0,
"Asmara, ERITREA",  15,  20,   0, -38, -56,   0,2325.0,   3.0,
"Addis Abeba, ETHIOPIA",   9,   2,   0, -38, -42,   0,2450.0,   0.0,
"Libreville, GABON",   0,  23,   0,  -9, -27,   0,  35.1,   1.0,
"Banjul, GAMBIA",  13,  28,   0,  16,  39,   0,   0.0,   0.0,
"Accra, GHANA",   5,  33,   0,   0,  13,   0,  26.8,   0.0,
"Kumasi, GHANA",   6,  41,   0,   1,  35,   0, 287.1,   0.0,
"Conakry, GUINEA",   9,  31,   0,  13,  43,   0,   7.0,   0.0,
"Bissau, GUINEA-BISSAU",  11,  51,   0,  15,  35,   0,   0.0,   0.0,
"Abidjan, IVORY COAST",   5,  19,   0,   4,   2,   0,  19.8,   0.0,
"Bouake, IVORY COAST",   7,  41,   0,   5,   2,   0, 363.9,   0.0,
"Yamoussoukro, IVORY COAST",   6,  49,   0,   5,  17,   0,   0.0,   0.0,
"Mombasa, KENYA",  -4,  -3,   0, -39, -40,   0,  15.8,   3.0,
"Nairobi, KENYA",  -1, -17,   0, -36, -49,   0,1820.0,   3.0,
"Maseru, LESOTHO", -29, -18,   0, -27, -30,   0, 1560.0,   2.0,
"Monrovia, LIBERIA",   6,  18,   0,  10,  47,   0,  22.9,   0.0,
"Banghazi, LIBYA",  32,   7,   0, -20,  -4,   0,  25.0,   1.0,
"Tripoli, LIBYA",  32,  54,   0, -13, -11,   0,  21.9,   1.0,
"Antananarivo, MADAGASCAR", -18, -55,   0, -47, -31,   0,   0.0,   3.0,
"Fianarantsoa, MADAGASCAR", -21, -26,   0, -47,  -5,   0,   0.0,   3.0,
"Blantyre, MALAWI", -15, -47,   0, -35,   0,   0,   0.0,   2.0,
"Lilongwe, MALAWI", -13, -59,   0, -33, -44,   0,   0.0,   2.0,
"Bamako, MALI",  12,  39,   0,   8,   0,   0, 340.2,   0.0,
"Nouakchott, MAURITANIA",  18,   6,   0,  15,  57,   0,  21.0,   0.0,
"Casablanca, MOROCCO",  33,  36,   0,   7,  38,   0,  8.0,   0.0,
"Fes, MOROCCO",  34,   5,   0,   4,  57,   0,   0.0,   0.0,
"Marrakech, MOROCCO",  31,  38,   0,   8,   0,   0, 459.9,   0.0,
"Rabat, MOROCCO",  34,   2,   0,   6,  51,   0,  64.9,   0.0,
"Tangier, MOROCCO",  35,  48,   0,   5,  45,   0,  72.8,   0.0,
"Beira, MOZAMBIQUE", -19, -49,   0, -34, -52,   0,   8.5,   2.0,
"Maputo, MOZAMBIQUE", -25, -58,   0, -32, -35,   0,  59.1,   2.0,
"Windhoek, NAMIBIA", -22, -34,   0, -17,  -6,   0,1727.9,   2.0,
"Niamey, NIGER",  13,  31,   0,  -2,  -7,   0, 216.1,   1.0,
"Abeokuta, NIGERIA",   7,  9,   0,  -3, -21,   0,   0.0,   1.0,
"Enugu, NIGERIA",   6,  27,   0,  -7, -27,   0, 232.6,   1.0,
"Ibadan, NIGERIA",   7,  23,   0,  -3, -54,   0,   0.0,   1.0,
"Ilesha, NIGERIA",   7,  38,   0,  -4, -45,   0,   0.0,   1.0,
"Ilorin, NIGERIA",   8,  30,   0,  -4, -32,   0,   0.0,   1.0,
"Kano, NIGERIA",  12,   0,   0,  -8, -30,   0,   0.0,   1.0,
"Lagos, NIGERIA",   6,  27,   0,  -3, -24,   0,   3.0,   1.0,
"Ogbomosho, NIGERIA",   8,   8,   0,  -4, -15,   0,   0.0,   1.0,
"Oshogbo, NIGERIA",   7,  47,   0,  -4, -34,   0,   0.0,   1.0,
"Port Harcourt, NIGERIA",   4,  47,   0,  -7,  -1,   0,   0.0,   1.0,
"Zaria, NIGERIA",  11,   7,   0,  -7, -44,   0,   0.0,   1.0,
"Sao Tome, SAO TOME & PRINCIPE",   0,  20,   0,  -6, -44,   0,   4.9,   0.0,
"Dakar, SENEGAL",  14,  40,   0,  17,  26,   0,  39.9,   0.0,
"Freetown, SIERRA LEONE",   8,  30,   0,  13,  15,   0,  28.0,   0.0,
"Moqadisho, SOMALIA",   2,   4,   0, -45, -22,   0,  11.9,   3.0,
"Cape Town, SOUTH AFRICA", -33, -55,   0, -18, -25,   0,  38.0,   2.0,
"Durban, SOUTH AFRICA", -29, -55,   0, -30, -56,   0,   4.9,   2.0,
"East London, SOUTH AFRICA", -33,   0,   0, -27, -55,   0,   0.0,   2.0,
"Johannesburg, SOUTH AFRICA", -26, -15,   0, -28,   0,   0,1700.0,   2.0,
"Port Elizabeth, SOUTH AFRICA", -33, -58,   0, -25, -37,   0,  57.9,   2.0,
"Pretoria, SOUTH AFRICA", -25, -45,   0, -28, -10,   0,1368.9,   2.0,
"Soweto, SOUTH AFRICA", -26, -14,   0, -27, -54,   0,   1665.0,   2.0,
"Vereeniging, SOUTH AFRICA", -26, -38,   0, -27, -57,   0, 1460.0,   2.0,
"Khartoum, SUDAN",  15,  36,   0, -32, -32,   0, 389.8,   2.0,
"Al-Khartum Bahri, SUDAN",  15,  38,   0, -32, -33,   0,   0.0,   2.0,
"Umm Durman, SUDAN",  15,  38,   0, -32, -30,   0,   0.0,   2.0,
"Dar-es-Salaam, TANZANIA",  -6, -48,   0, -39, -17,   0,  14.3,   3.0,
"Mwanza, TANZANIA",  -2, -31,   0, -32, -54,   0,   0.0,   3.0,
"Lome, TOGO",   6,   8,   0,  -1, -13,   0,  21.9,   0.0,
"Sfax, TUNISIA",  34,  44,   0, -10, -46,   0,   0.0,   1.0,
"Tunis, TUNISIA",  36,  48,   0, -10, -11,   0,  66.1,   1.0,
"Kampala, UGANDA",   0,  19,   0, -32, -35,   0,1311.9,   3.0,
"El Aaiun, WESTERN SAHARA",  27,   9,   0,  13,  12,   0,   0.0,   0.0,
"Kitwe, ZAMBIA", -12, -49,   0, -28, -13,   0,   0.0,   2.0,
"Lusaka, ZAMBIA", -15, -25,   0, -28, -17,   0,1277.4,   2.0,
"Ndola, ZAMBIA", -12, -58,   0, -28, -38,   0,   0.0,   2.0,
"Bulawayo, ZIMBABWE", -20,  -9,   0, -28, -36,   0,1342.6,   2.0,
"Harare, ZIMBABWE", -17, -50,   0, -31,  -3,   0,1472.5,   2.0
)
