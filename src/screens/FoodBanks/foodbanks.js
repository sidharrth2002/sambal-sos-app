const foodbanks = [
    {
        name: "Kechara Soup Kitchen",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.145113586652926,
                    longitude: 101.71530741763951
                },
                fullAddress: "17, Jalan Barat, Off Jalan Imbi, 55100 Kuala Lumpur"
            }
        ],
        website: "https://kecharasoupkitchen.com/"
    },
    {
        name: "Yayasan Food Bank Malaysia",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.000059429526921,
                    longitude: 101.768466417547
                },
                fullAddress: "No.8 Jalan BA 4, 1, Kawasan Perindustrian, Bukit Angkat, 43000 Kajang, Selangor"
            }
        ],
        website: "https://www.foodbankmalaysia.org/"
    },
    {
        name: "The Lost Food Project",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.133580380408784,
                    longitude: 101.70044411344145
                },
                fullAddress: "Lot PT54 Lengkok Belfield, Off, Jalan Wisma Putra, 50460 Kuala Lumpur"
            }
        ],
        website: "https://www.thelostfoodproject.org/"
    },
    {
        name: "Food Aid Foundation Malaysia",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.0858445933872094,
                    longitude: 101.7200733286354
                },
                fullAddress: "9, Jalan 7/118b, Desa Tun Razak, 56000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        website: "https://www.foodaidfoundation.org/"
    },
    {
        name: "Pit Stop Community Cafe",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.151910625218722,
                    longitude: 101.69679635155805
                },
                fullAddress: "101, Jalan Tun H S Lee, City Centre, 50050 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        website: "https://www.pitstopcafekl.com/"
    },
    {
        name: "Pertiwi Soup Kitchen",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.1610377233244282,
                    longitude: 101.70514737633152
                },
                fullAddress: "4, Jalan 9e, Taman Cheras Jaya, 43200 Cheras, Selangor"
            }
        ],
        website: "https://pertiwi.org.my/"
    },
    {
        name: "Dapur Jalanan Kuala Lumpur",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.1287171803188243,
                    longitude: 101.67902488623314
                },
                fullAddress: "52-C, Jalan Kemuja, Off Jalan Bangsar"
            }
        ],
        website: "https://www.facebook.com/dapurjalanankl/"
    },
    {
        name: "SEED Foundation",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 3.1644392846947342,
                    longitude: 101.69539671137086
                },
                fullAddress: "No 69, Jalan Tiong Nam, Chow Kit, 50350 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        website: "https://seedfoundation.com.my/"
    },
    {
        name: "Kindness Kitchen Cafe (Kindness Malaysia - Kedah)",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 6.146377045288884,
                    longitude: 100.38171748148767
                },
                fullAddress: "2967E, Jalan Sultanah, Taman Aman, 05350 Alor Setar, Kedah"
            }
        ],
        website: "https://www.facebook.com/kindness.utara/"
    },
    {
        name: "Pertubuhan Amal Ai Xin Fan Tong",
        address: [
            // for this foodbank, if has multiple addresses
            {
                coordinates: {
                    latitude: 4.585845909749299,
                    longitude: 101.08030417228815
                },
                fullAddress: "Pertubuhan Amal Ai Xin Fan Tong Ipoh, Taman Taiping, 31650 Ipoh, Perak"
            }
        ],
        website: ""
    },
    {
        name: "Happy Food Workshop",
        address: [
            {
                coordinates: {
                    latitude: 3.039666517514837,
                    longitude: 101.61743541213227
                },
                fullAddress: "No 31 insight road 5/1 Puchong city centre 47160 Selangor"
            }
        ]
    },
    {
        name: "Hotel Sentral Kuala Lumpur",
        address: [
            {
                coordinates: {
                    latitude: 3.1321145667442187,
                    longitude: 101.68798129652832
                },
                fullAddress: "No 30, Jalan Thambypillai Brickfields, 50470 Kuala Lumpur, Malaysia"
            },
        ]
    },
    {
        name: "BMS Organics Puchong Utama",
        address: [
            {
                coordinates: {
                    latitude: 2.995413066471872,
                    longitude: 101.62092715420067
                },
                fullAddress: "70, Jalan BPU 1, Bandar Puchong Utama, 47100 Puchong, Selangor"
            }
        ]
    },
    {
        name: "Restoran Lan Je",
        address: [
            {
                coordinates: {
                    latitude: 3.0757835323101035,
                    longitude: 101.66122615234735
                },
                fullAddress: "29G, Jalan Dato Tan Yew Lai, Off Jalan Puchong, 58200 Kuala Lumpur"
            }
        ]
    },
    {
        name: "Dimsumas Restaurant",
        address: [
            {
                coordinates: {
                    latitude: 3.017990849027273,
                    longitude: 101.6053054542007
                },
                fullAddress: "514, Intan Street 1/4, Taman Puchong Intan, 47100 Puchong, Selangor"
            }
        ]
    },
    {
        name: "MDD Restaurant",
        address: [
            {
                coordinates: {
                    latitude: 3.048651039106075,
                    longitude: 101.58447711021007
                },
                fullAddress: "25, Jalan USJ 10/1c, Taipan, 47600 Subang Jaya, Selangor"
            }
        ]
    },
    {
        name: "Seri Kembangan Food Bank",
        address: [
            {
                coordinates: {
                    latitude: 2.9990618985827067,
                    longitude: 101.67752940909946
                },
                fullAddress: "No 2&4, Jalan Equine 9B, Taman Equine, 43300 Seri Kembangan, Selangor"
            }
        ]
    },
    {
        name: "Semenyih Food Bank",
        address: [
            {
                coordinates: {
                    latitude: 2.9712212158580877,
                    longitude: 101.82789839486858
                },
                fullAddress: "50, Jalan 1/10, Bandar Teknologi Kajang, 43500 Semenyih, Selangor"
            }
        ]
    },
    {
        name: "kEATchen Ara Damansara",
        address: [
            {
                coordinates: {
                    latitude: 3.121383033651662,
                    longitude: 101.57440168322229
                },
                fullAddress: "8, Jalan PJU 1a/14, Taman Peritndustrian Jaya, 47301 Petaling Jaya, Selangor"
            }
        ]
    },
    {
        name: "Signature Tint Shop S/b & CO2 Coating Concept S/B",
        address: [
            {
                coordinates: {
                    latitude: 3.0400315797483874,
                    longitude: 101.6184199857641
                },
                fullAddress: "No56, Pusat Perdangangan, One Puchong, Jalan Op 1/5, 47160 Selangor"
            }
        ]
    },
    {
        name: "Cheras Food Bank",
        address: [
            {
                coordinates: {
                    latitude: 3.122606612130784,
                    longitude: 101.72971093325174
                },
                fullAddress: "No4, Jalan Pudu Ulu 56100 Cheras, Kuala Lumpur"
            }
        ]
    },
    {
        "name": "Gerobok Kongsi Rezeki Lesong Mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.99382365330752,
                    "longitude": 101.651108239532
                },
                "fullAddress": "9-G, Jalan LEP1/1C, Taman Lestari Putra, 43300 Seri Kembangan, Selangor."
            }
        ],
        "website": ""
    },
    {
        "name": "Foong Lian Clay Pot Foods Café (Pudu)",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.13321830250574,
                    "longitude": 101.71654459672
                },
                "fullAddress": "55 Jalan Yew, Pudu, 55100 Kuala Lumpur"
            }
        ],
        "website": "https://www.foonglian.com"
    },
    {
        "name": "PPTSKJS Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1333093588963,
                    "longitude": 101.716823552203
                },
                "fullAddress": "PPTSKJ Guardhouse SS3, Jalan SS 3/43, 47300 PJ"
            }
        ],
        "website": ""
    },
    {
        "name": "Richest Network ",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.93223366592823,
                    "longitude": 101.442823571448
                },
                "fullAddress": "Lorong Sandora, 1409, Jalan Sandora, Kampung Sijangkang, 42500, Telok Panglima Garang, Selangor "
            }
        ],
        "website": "https://wa.me/message/LSUHMUAGFORTA1"
    },
    {
        "name": "Surau Taman Sutera Kajang",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.00859765137547,
                    "longitude": 101.764519284908
                },
                "fullAddress": "Jalan Sutera 2/3, Taman Sutera, Kajang"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell jalan pasir puteh 2",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.57418327984338,
                    "longitude": 101.08160048991
                },
                "fullAddress": "542, jalan pasir puteh , 31650, Ipoh, perak "
            }
        ],
        "website": ""
    },
    {
        "name": "Little Giraffe Story House ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.04723294049657,
                    "longitude": 101.771941691944
                },
                "fullAddress": "No. 114, Jalan 15 Batu 11, 43200 Cheras, Selangor Malaysia"
            }
        ],
        "website": "https://www.facebook.com/lgshbatu11/"
    },
    {
        "name": "Shell Cheng Bee, Jalan Maharajalela",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.02293593526188,
                    "longitude": 101.021572000264
                },
                "fullAddress": "Lot 1401, Jalan Maharajalela, 36000 Teluk Intan, Perak."
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Kayu Ara Kindness Table",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.13279105171983,
                    "longitude": 101.611714273556
                },
                "fullAddress": "She’ll Kayu Ara 1 Jalan Kenanga PJU6A Vista Damansara (Kg Kayu Ara) 47400 Petaling Jaya Selangor"
            }
        ],
        "website": "https://instagram.com/shellkayuara?utm_medium=copy_link"
    },
    {
        "name": "",
        "address": [
            {
                "coordinates": {
                    "latitude": "",
                    "longitude": ""
                },
                "fullAddress": ""
            }
        ],
        "website": ""
    },
    {
        "name": "SunwayCARES Food Aid",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.07302880426889,
                    "longitude": 101.607585086966
                },
                "fullAddress": "LG2, Blue Concourse, No. 3 Jalan PJS11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor Darul Ehsan"
            }
        ],
        "website": "https://www.sunwaypyramid.com/"
    },
    {
        "name": "Jaslyn Cakes Bangsar",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.13404180284039,
                    "longitude": 101.67033047146
                },
                "fullAddress": "No.7A Jalan Telawi 2, 59100 Bangsar, KL"
            }
        ],
        "website": ""
    },
    {
        "name": "Petronas Bandar Sri Damansara",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.19620973857681,
                    "longitude": 101.609174286906
                },
                "fullAddress": "Petronas Bandar Sri Damansara. Persiaran Perdana, Bandar Sri Damansara, 52200 Petaling Jaya"
            }
        ],
        "website": "https://instagram.com/petronasbandarsridamansara"
    },
    {
        "name": "Bamboo Biryani “TASTE & SEE",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.02243223241112,
                    "longitude": 101.451458671266
                },
                "fullAddress": "16, Japan Sri Damak 18, Taman Sri Andalas, Klang 41200"
            }
        ],
        "website": ""
    },
    {
        "name": "Surau al muhajirin mutiara subang",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.18133127866626,
                    "longitude": 101.536070586978
                },
                "fullAddress": "Surau almuhajirin, jalan Utarid u5/9, mutiara subang"
            }
        ],
        "website": ""
    },
    {
        "name": "Surau AsSobirin Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.16747392921054,
                    "longitude": 101.536133364202
                },
                "fullAddress": "Taman Puteri Subang, U5 Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Ba Wang Food Court",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.11839340669903,
                    "longitude": 101.578785471458
                },
                "fullAddress": "H-G-20, Jalan PJU 1a/3, Taipan Damansara 2 Ara Damansara, 47301 Petaling Jaya, Selangor"
            }
        ],
        "website": "https://m.facebook.com/Ba-wang-food-court-center-100732938854317/?ti=as"
    },
    {
        "name": "Food Bank DP (Damansara Perdana)",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.16768266945675,
                    "longitude": 101.606389915835
                },
                "fullAddress": "Level 1 food court, Perdana Shopping Center (Above Jaya Grocer) "
            }
        ],
        "website": "https://www.facebook.com/groups/DamansaraPerdanaCommunity"
    },
    {
        "name": "Section 7 Sungai Long",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.05015888366795,
                    "longitude": 101.799248662199
                },
                "fullAddress": "Guard Post 2, SL7/17, Bandar Sungai Long, 43000, Kajang"
            }
        ],
        "website": ""
    },
    {
        "name": "Surau Perdana",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.16752658211279,
                    "longitude": 101.60327178479
                },
                "fullAddress": "No 13, Jalan PJU 8/6, Damansara Perdana, 47820 Petaling Jaya, Selangor "
            }
        ],
        "website": "https://www.facebook.com/suraudp/"
    },
    {
        "name": "Lung Mu Temple",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.17148616645932,
                    "longitude": 101.614905830782
                },
                "fullAddress": "https://goo.gl/maps/CKQSdnaRW4hXr3ei9"
            }
        ],
        "website": "https://www.facebook.com/LungMuTempleMalaysia/"
    },
    {
        "name": "Kedai Ubat Ching Yen",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.05686526213874,
                    "longitude": 101.460041362626
                },
                "fullAddress": "No 8, Jalan Kasawari 5, Kawasan 17, Taman Eng Ann, Klang, 41150, Klang, Selangor, 41150"
            }
        ],
        "website": ""
    },
    {
        "name": "CHENYEONG, Lawyers",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.24387619852018,
                    "longitude": 102.271057201992
                },
                "fullAddress": "No. 692-I/1, Jalan Perak, Taman Megah, 75450 Bukit Beruang, Melaka"
            }
        ],
        "website": ""
    },
    {
        "name": "Bucolic Cafe & Catering",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.10655363114193,
                    "longitude": 101.446254855775
                },
                "fullAddress": "33-1, Jalan Setia Prima S U13/S, Setia Alam 40170 Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Ready To Cook Grocer",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.16224155823987,
                    "longitude": 101.512536029153
                },
                "fullAddress": "M U16/M 9-G, Jln Elektron U16/E, Denai Alam, 40160 Shah Alam, Selangor"
            }
        ],
        "website": "http://readytocook.biz/"
    },
    {
        "name": "Ti-Ratana Food Cupboard (Kuala Lumpur Branch)",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.12870368032513,
                    "longitude": 101.675479837109
                },
                "fullAddress": "17, Lorong Maroof, 59000 Bangsar, Kuala Lumpur"
            }
        ],
        "website": "www.ti-ratana.org"
    },
    {
        "name": "PESDAC",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.42418257358383,
                    "longitude": 100.321643725471
                },
                "fullAddress": "160, Jalan Burma, 10350, Penang."
            }
        ],
        "website": ""
    },
    {
        "name": "Posstore Food Bank Pasir Puteh Ipoh",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.58501975377234,
                    "longitude": 101.085330525469
                },
                "fullAddress": "No 63 Jalan Bahru Off Jalan Tokong Pasir Pinji 31650 Ipoh Perak."
            }
        ],
        "website": ""
    },
    {
        "name": "Ipoh 913 Restaurant Food Bank《怡保913茶室响应银行食物Food Bank》",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.62559990736087,
                    "longitude": 101.116659796633
                },
                "fullAddress": "2, Jalan Bercham Bistari 1, Medan Bercham Bistari, 31400 Ipoh, Perak"
            }
        ],
        "website": "https://www.facebook.com/104916886257567/posts/4117224355026780/"
    },
    {
        "name": "Limong Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.2440276105517,
                    "longitude": 102.271086840814
                },
                "fullAddress": "692J-1,Taman Megah, Jalan Perak, Taman Bukit Melaka, 75450 Melaka"
            }
        ],
        "website": ""
    },
    {
        "name": "Restoran Yong Yong",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.2439267311771,
                    "longitude": 102.271678456158
                },
                "fullAddress": "666D-1, Jalan Bukit Melaka 1/2, Taman Bukit Melaka, 75450 Bukit Beruang, Melaka"
            }
        ],
        "website": ""
    },
    {
        "name": "Gowri Cash & Carry and Tailoring",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.24397739300015,
                    "longitude": 102.271473654306
                },
                "fullAddress": "No.664E, Jalan Bukit Melaka 1/2 Taman Bukit Melaka Bukit Beruang, 75450 Malacca"
            }
        ],
        "website": ""
    },
    {
        "name": "Kedai Runcit Soon Soon",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.20596765788591,
                    "longitude": 102.30287339293
                },
                "fullAddress": "Jalan Desa Duyong 11, Taman Desa Duyong, 75460 Melaka."
            }
        ],
        "website": ""
    },
    {
        "name": "Elewsmart Prima Sri Gombak",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.23748362020986,
                    "longitude": 101.69997192604
                },
                "fullAddress": "No 1-G, Jalan Prima SG 1, Prima Seri Gombak, 68100 Batu Caves, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART BANGI",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.96348118906577,
                    "longitude": 101.753116654305
                },
                "fullAddress": "No 20, Jalan Medan Pusat 2c, Seksyen 9, 43650 Bandar Baru Bangi, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART Kota Warisan",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.81968727829601,
                    "longitude": 101.694109496633
                },
                "fullAddress": "No 35-G, Jalan Warisan Sentral 1 Kip Central, Kota Warisan, 43900 Sepang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART Taman Medan Jaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.08331581064934,
                    "longitude": 101.627810625469
                },
                "fullAddress": "J-G-5 & J-G, 6, Jalan PJS 2, Taman Medan Jaya, 46000 Petaling Jaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Elewsmart Bandar Seri Putra",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.88489903803693,
                    "longitude": 101.781731357855
                },
                "fullAddress": "No.7 & 8, Jalan Seri Putra 3/13, Bandar Seri Putra, 43000 Bangi, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART Shah Alam Seksyen 22",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.05462173762212,
                    "longitude": 101.548365067797
                },
                "fullAddress": "No 6, Jalan 22, 1, Persiaran Jubli Perak, Seksyen 22, 40300 Shah Alam, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART Sg. Buloh",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.22667119208019,
                    "longitude": 101.567019573364
                },
                "fullAddress": "Dataran Villa Putra, 47000 Sungai Buloh, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART Dataran Perniagaan Cheras",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.03577386988776,
                    "longitude": 101.764040011977
                },
                "fullAddress": "73-G, Jalan Dataran Cheras, 4, Dataran Perniagaan Cheras, 43200 Cheras, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART Kajang",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.99706360939574,
                    "longitude": 101.814963998485
                },
                "fullAddress": "No 23G, Jalan TTDI Grove 7/1, 43000 Kajang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Setia Alam",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.09855353448175,
                    "longitude": 101.462573283141
                },
                "fullAddress": "Shell Setia Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Restoran Kakak 家家粿条汤",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.85233849458136,
                    "longitude": 100.74053726965
                },
                "fullAddress": "111, Jalan Pasar, 34000 Taiping, Perak"
            }
        ],
        "website": ""
    },
    {
        "name": "Nomaps hotel foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.19497502413063,
                    "longitude": 102.24761709055
                },
                "fullAddress": "Nomaps, 11 Jalan Tun Tan Cheng Lock, 75200 Melaka"
            }
        ],
        "website": ""
    },
    {
        "name": "Sweet Skewer Enterprise 甜甜串串",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.8311523923504,
                    "longitude": 100.73728712547
                },
                "fullAddress": "178,Jalan Sultan, Pokok Assam, 34000 Taiping Perak"
            }
        ],
        "website": "https://www.facebook.com/%E7%94%9C%E7%94%9C%E4%B8%B2%E4%B8%B2%E6%9E%9C%E6%9E%9C-100812281804857"
    },
    {
        "name": "Yilo restaurant & bar",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.09574222472955,
                    "longitude": 101.48095891163
                },
                "fullAddress": "Ardence lab L28 & L29, Persiaran Setia Alam, Setia Alam, 40170 Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Restoran Makanan Laut Jing Yik Man Tang 金玉满堂海鲜楼",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.85063709201142,
                    "longitude": 100.744595171623
                },
                "fullAddress": "22, Jalan Maharajalela, 34000 Taiping, Perak"
            }
        ],
        "website": "https://www.facebook.com/%E9%87%91%E7%8E%89%E6%BB%A1%E5%A0%82%E6%B5%B7%E9%B2%9C%E6%A5%BC-289464397737208"
    },
    {
        "name": "Restoran Makanan Laut Cheong Huat 后廊昌发海鲜咖啡店",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.85481628095184,
                    "longitude": 100.71834660055
                },
                "fullAddress": "No. 372 Jalan Taman Kami C, 34000 Aulong Taiping Perak"
            }
        ],
        "website": ""
    },
    {
        "name": "Rainy Corner 雨鄉•咖啡",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.8508876854753,
                    "longitude": 100.74527963711
                },
                "fullAddress": "31, Jalan Maharaja Lela, 34000 Taiping, Perak."
            }
        ],
        "website": "https://www.facebook.com/Rainy-Corner-%E9%9B%A8%E9%84%89%E5%92%96%E5%95%A1-102087748387404/"
    },
    {
        "name": "Nur Aisyah Farhana",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.14035307768432,
                    "longitude": 101.736730081861
                },
                "fullAddress": "F19-17 pangsapuri pandanmas 2,no 6 LORONG DELAPAN kampung pandan 55100 Kuala Lumpur"
            }
        ],
        "website": "nuraisyah130888@gmail.com"
    },
    {
        "name": "ZTO Express Taiping",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.8413578076683,
                    "longitude": 100.750089283717
                },
                "fullAddress": "No. 42A, Persiaran TBC 3, Taiping Business Centre, 34000 Taiping Perak"
            }
        ],
        "website": "https://www.facebook.com/ZTO-Experss-Taiping-Perak-107081487736591/"
    },
    {
        "name": "Smart Care Optic",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.84036332509007,
                    "longitude": 100.748654646668
                },
                "fullAddress": "No. 15, Ground Floor, Persiaran TBC, Taiping Business Centre, 34000 Taiping Perak"
            }
        ],
        "website": "https://www.facebook.com/SMARTCAREOPTIC/"
    },
    {
        "name": "NUr Aisyah Farhana",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.14131456032754,
                    "longitude": 101.737389410623
                },
                "fullAddress": "F-19-17 Pangsapuri pandanmas 2 no 6 LORONG DELAPAN kampung pandan 55100 Kuala Lumpur"
            }
        ],
        "website": "No"
    },
    {
        "name": "Shell Taman desa",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.10106963909475,
                    "longitude": 101.686218773936
                },
                "fullAddress": "Jalan 2-109e Danau Desa Lama, Jalan Klang Lama, 58100 Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Common Ground Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.31879139113757,
                    "longitude": 101.536263975159
                },
                "fullAddress": "No. 123-2, Jalan Anggun City 1, Pusat Komersial Anggun City, Taman Anggun Rawang, 48000 Rawang, Selangor."
            }
        ],
        "website": "https://www.facebook.com/commongroundcafe.cgc"
    },
    {
        "name": "FOOD BANK KELANA JAYA/ARA DAMANSARA (",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.12903515259284,
                    "longitude": 101.600406529125
                },
                "fullAddress": "A26, Mutiara Tropicana, #74 Jalan Mutiara Tropicana, 47140, Petaling Jaya"
            }
        ],
        "website": ""
    },
    {
        "name": "Kemaman Food Bank, Terengganu",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.24207628040244,
                    "longitude": 103.396724700556
                },
                "fullAddress": "4101, Jalan Merbau Kampung Mak Cilli, 24000, Kemaman Terengganu"
            }
        ],
        "website": ""
    }
];

module.exports = { foodbanks }