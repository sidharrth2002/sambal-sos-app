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
    },
    {
        "name": "Gerobok Kongsi Rezeki Lesong Mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9936308,
                    "longitude": 101.6511297
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
                    "latitude": 3.1330469,
                    "longitude": 101.7165446
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
                    "latitude": 3.1054621,
                    "longitude": 101.6123883
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
                    "latitude": 2.9319658,
                    "longitude": 101.4428343
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
                    "latitude": 3.0085325,
                    "longitude": 101.764519
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
                    "latitude": 4.573958699999999,
                    "longitude": 101.0810104
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
                    "latitude": 3.0470401,
                    "longitude": 101.7712765
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
                    "latitude": 4.022754,
                    "longitude": 101.021572
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
                    "latitude": 3.1325768,
                    "longitude": 101.6116499
                },
                "fullAddress": "She’ll Kayu Ara 1 Jalan Kenanga PJU6A Vista Damansara (Kg Kayu Ara) 47400 Petaling Jaya Selangor"
            }
        ],
        "website": "https://instagram.com/shellkayuara?utm_medium=copy_link"
    },
    {
        "name": "Shell Kayu Ara Kindness Table",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1325768,
                    "longitude": 101.6116499
                },
                "fullAddress": "She’ll Kayu Ara 1 Jalan Kenanga PJU6A Vista Damansara (Kg Kayu Ara) 47400 Petaling Jaya Selangor"
            }
        ],
        "website": "https://instagram.com/shellkayuara?utm_medium=copy_link"
    },
    {
        "name": "SunwayCARES Food Aid",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0727824,
                    "longitude": 101.6075529
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
                    "latitude": 3.132724,
                    "longitude": 101.6706747
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
                    "latitude": 3.1959955,
                    "longitude": 101.6091421
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
                    "latitude": 3.0222415,
                    "longitude": 101.451447
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
                    "latitude": 3.1810849,
                    "longitude": 101.5360384
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
                    "latitude": 3.167375,
                    "longitude": 101.5365352
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
                    "latitude": 3.1182757,
                    "longitude": 101.5787202
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
                    "latitude": 0.0,
                    "longitude": 0.0
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
                    "latitude": 3.0502735,
                    "longitude": 101.7987514
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
                    "latitude": 3.1672802,
                    "longitude": 101.6033147
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
                    "latitude": 0.0,
                    "longitude": 0.0
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
                    "latitude": 3.056576,
                    "longitude": 101.4598697
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
                    "latitude": 2.2437598,
                    "longitude": 102.2710475
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
                    "latitude": 3.1063608,
                    "longitude": 101.4463085
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
                    "latitude": 3.1620166,
                    "longitude": 101.5125253
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
                    "latitude": 3.128468,
                    "longitude": 101.6755764
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
                    "latitude": 5.4239476,
                    "longitude": 100.321633
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
                    "latitude": 4.584741699999999,
                    "longitude": 101.0853198
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
                    "latitude": 4.6252684,
                    "longitude": 101.1166598
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
                    "latitude": 2.2438132,
                    "longitude": 102.2710332
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
                    "latitude": 2.2437016,
                    "longitude": 102.2715819
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
                    "latitude": 2.2437201,
                    "longitude": 102.2714522
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
                    "latitude": 2.2057318,
                    "longitude": 102.3030236
                },
                "fullAddress": "Jalan Desa Duyong 11, Taman Desa Duyong, 75460 Melaka."
            }
        ],
        "website": ""
    },
    {
        "name": "ELEWSMART",
        "address": [
            {
                "coordinates": {
                    "latitude": 0.0,
                    "longitude": 0.0
                },
                "fullAddress": "It’s almost in all parts of Malaysia.It’s a supermarket such as 99speedmart which provides food and even can put your food which you have at home "
            }
        ],
        "website": "https://elewsmart.com.my/"
    },
    {
        "name": "Shell Setia Alam",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0983607,
                    "longitude": 101.4625411
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
                    "latitude": 4.852113999999999,
                    "longitude": 100.7404729
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
                    "latitude": 2.194246,
                    "longitude": 102.2472845
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
                    "latitude": 4.8309172,
                    "longitude": 100.7372764
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
                    "latitude": 3.0951785,
                    "longitude": 101.4810368
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
                    "latitude": 4.850412599999999,
                    "longitude": 100.7446059
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
                    "latitude": 4.853961000000001,
                    "longitude": 100.7205548
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
                    "latitude": 4.8506525,
                    "longitude": 100.7453762
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
                    "latitude": 3.1401174,
                    "longitude": 101.736773
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
                    "latitude": 4.8396,
                    "longitude": 100.7497138
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
                    "latitude": 4.8396,
                    "longitude": 100.7497138
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
                    "latitude": 3.1401174,
                    "longitude": 101.736773
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
                    "latitude": 3.100621,
                    "longitude": 101.686117
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
                    "latitude": 3.3185296,
                    "longitude": 101.5362625
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
                    "latitude": 0.0,
                    "longitude": 0.0
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
                    "latitude": 4.241808799999999,
                    "longitude": 103.3967247
                },
                "fullAddress": "4101, Jalan Merbau Kampung Mak Cilli, 24000, Kemaman Terengganu"
            }
        ],
        "website": ""
    },
    {
        "name": "DAP kepong",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2135351,
                    "longitude": 101.6411935
                },
                "fullAddress": "\n2, Jalan Prima 1, Metro Prima, 52100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Masjid Cyberjaya FiSabilillah",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9324933,
                    "longitude": 101.647958
                },
                "fullAddress": "Masjid Raja Haji Fi Sabilillah, Persiaran Semarak Api, Cyberjaya, 63000 Cyberjaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Masjid Cyber 10 Cyberjaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9008621,
                    "longitude": 101.6320927
                },
                "fullAddress": "Masjid Cyber 10, Persiaran Rimba Permai, Cyber 10, 63200 Cyberjaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Kayu Ara Kindness Table",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1325768,
                    "longitude": 101.6116499
                },
                "fullAddress": "Shell Kayu Ara 1 Jalan Kenanga PJU6A Vista Damansara Kg Kayu Ara 47400 PJ Selangor"
            }
        ],
        "website": "https://instagram.com/shellkayuara?utm_medium=copy_link"
    },
    {
        "name": "Surau Al Hijrah Foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 0.0,
                    "longitude": 0.0
                },
                "fullAddress": "Block X-00-001 & 002, Subang Perdana Court 2, Jalan USJ 6/1, 47610 Subang Jaya, Selangor Darul Ehsan"
            }
        ],
        "website": ""
    },
    {
        "name": "Rumah Pangsa Taman Merdeka Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.2654819,
                    "longitude": 102.2461717
                },
                "fullAddress": "Block J, Rumah Pangsa Taman Merdeka, 75350 Melaka"
            }
        ],
        "website": ""
    },
    {
        "name": "Bright Child clinic food bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.2463686,
                    "longitude": 102.2249298
                },
                "fullAddress": "29, Jalan Cm 2, Taman Cheng Mutiara, 75260 Melaka"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Kayu Ara Kindness Table",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1325768,
                    "longitude": 101.6116499
                },
                "fullAddress": "Shell Kayu Ara 1 Jalan Kenanga PJU6A Vista Damansara Kg Kayu Ara 47400 PJ Selangor"
            }
        ],
        "website": "https://instagram.com/shellkayuara?utm_medium=copy_link"
    },
    {
        "name": "Klinik Yap & Looi",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1008306,
                    "longitude": 101.7416612
                },
                "fullAddress": "29, Jalan Kaskas 2, Taman Cheras 56100 Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Taman Tadisma Section 13 ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.087299,
                    "longitude": 101.539003
                },
                "fullAddress": "Guard House, Taman Tadisma Section 13, Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Nook Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.9834985,
                    "longitude": 116.0779428
                },
                "fullAddress": "19, Lorong Dewan, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah"
            }
        ],
        "website": "https://www.facebook.com/nookcafekk/"
    },
    {
        "name": "Majlis Belia Sabah",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.941792,
                    "longitude": 116.0567626
                },
                "fullAddress": "Pejabat Arena Belia Kementerian Belia Dan Sukan Pantai Barat Selatan Pusat Giat Belia, Jalan Taman Winley Kepayan, Sabah, 88200 Kota Kinabalu"
            }
        ],
        "website": "https://beliasabah.org.my/"
    },
    {
        "name": "DR.JOE Travel Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 6.000573999999999,
                    "longitude": 116.1300107
                },
                "fullAddress": "Inanam Suria, Block H, Lot 50, Inanam, 88450 Kota Kinabalu, Sabah"
            }
        ],
        "website": "https://www.facebook.com/drjoetravelcafe/"
    },
    {
        "name": "Stanton Hotel",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.965990199999999,
                    "longitude": 116.0720283
                },
                "fullAddress": "No.13, Lorong Karamunsing C, Jalan, Karamunsing, 88100 Kota Kinabalu, Sabah"
            }
        ],
        "website": "https://stantonhotel.com.my/"
    },
    {
        "name": "Segar Borneo",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.9966289,
                    "longitude": 116.1245663
                },
                "fullAddress": "Lot No.2, Lorong Minyak,\nOff KM8, Jalan Tuaran,\nKota Kinabalu, Sabah,\nMalaysia."
            }
        ],
        "website": "https://www.segarborneo.com/"
    },
    {
        "name": "Rumah Ngaji Anak Gelandangan",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.4859577,
                    "longitude": 118.6056317
                },
                "fullAddress": "Kg Bangau Bangau Flat Semporna, Sabah, Malaysia"
            }
        ],
        "website": "https://sites.google.com/view/rumahngajianakgelandangan/home"
    },
    {
        "name": "Arati Villas",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.4492449,
                    "longitude": 100.3041159
                },
                "fullAddress": "9 Jalan Tanjung Park, 11200 Tanjung Bungah, Penang"
            }
        ],
        "website": "https://m.facebook.com/pages/Arati-Villas/112723112148688"
    },
    {
        "name": "Almari Rezeki @ MBBS",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.7025416,
                    "longitude": 101.9932889
                },
                "fullAddress": "Masjid Bandar Baru Senawang, 271, Jalan Bandar Senawang 20, Pusat Bandar Senawang, 70450 Seremban, Negeri Sembilan"
            }
        ],
        "website": "https://www.facebook.com/1479447569002743/posts/2945803955700423/"
    },
    {
        "name": "Surau annur bdr br bangi",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9488648,
                    "longitude": 101.769163
                },
                "fullAddress": "surau An-Nur bdr baru bangi, Jalan 1/7, 43650 Bdr Baru Bangi, selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Tanah aina cafe ",
        "address": [
            {
                "coordinates": {
                    "latitude": 36.0304278,
                    "longitude": -95.79703060000001
                },
                "fullAddress": "No 1&2 jalan mesra 1, taman mesra Batu Tiga "
            }
        ],
        "website": ""
    },
    {
        "name": "Masai Muslim Jamaath",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4916374,
                    "longitude": 103.8844014
                },
                "fullAddress": "Jalan Punai, Bandar Seri Alam, Pasir Gudang"
            }
        ],
        "website": ""
    },
    {
        "name": "Surau Al-Falah",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.15651,
                    "longitude": 101.5747951
                },
                "fullAddress": "No. 32, Jalan Cecawi 6/23, Kota Damansara 47810 Petaling Jaya"
            }
        ],
        "website": "http://alfalahkd6.com/"
    },
    {
        "name": "Beh Brother",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1459204,
                    "longitude": 101.7089731
                },
                "fullAddress": "Jalam alor"
            }
        ],
        "website": ""
    },
    {
        "name": "Klinik Kesihatan Lunas food bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.428914,
                    "longitude": 100.5314216
                },
                "fullAddress": "Jalan Ara kuda, kulim"
            }
        ],
        "website": "Nil "
    },
    {
        "name": "ABDUR ROHIM",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.947471,
                    "longitude": 101.7887363
                },
                "fullAddress": "Kampung sungai tangkas jalan kelise2"
            }
        ],
        "website": ""
    },
    {
        "name": "Persatuan SikhInside Malaysia",
        "address": [
            {
                "coordinates": {
                    "latitude": 37.09024,
                    "longitude": -95.712891
                },
                "fullAddress": "Providing throughout the country"
            }
        ],
        "website": "www.facebook.com/sikhinside"
    },
    {
        "name": "GEMBA TRANS & TOURS SDN BHD",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4008068,
                    "longitude": 104.2105628
                },
                "fullAddress": "NO 3, JALAN MURAI 1, BUKIT PELALI@PENGERANG 81620 PENGERANG JOHOR"
            }
        ],
        "website": "www.gemba.com.my"
    },
    {
        "name": "Skyloona Motion Studio",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.203764,
                    "longitude": 101.7367351
                },
                "fullAddress": "Wangsamaju "
            }
        ],
        "website": ""
    },
    {
        "name": "Rani chandra",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0319123,
                    "longitude": 101.5889249
                },
                "fullAddress": "Rgythm avenue apetmnt jalan usj19/4 persiarn kewajipan 47620 subang"
            }
        ],
        "website": ""
    },
    {
        "name": "Taman Seri Serdang Volunteer Firefighter Team",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0221574,
                    "longitude": 101.7057759
                },
                "fullAddress": "MPSJ Multipurpose Hall, Jalan Besar, Seri Kembangan New Village, 43300 Seri Kembangan, Selangor."
            }
        ],
        "website": "https://www.facebook.com/PBSTSS2018"
    },
    {
        "name": "TCT Automotive Group Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0237227,
                    "longitude": 101.6981787
                },
                "fullAddress": "Serdang Bao Wang, No. 76B, Jalan SK 6/1, 43300 Seri Kembangan, Selangor"
            }
        ],
        "website": "https://www.facebook.com/tctautomotivegroup/"
    },
    {
        "name": "Klinik Navis Olive Hill",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0133302,
                    "longitude": 101.6965557
                },
                "fullAddress": "LG-38, Jalan BS 1/3, Olive Hill Industrial Park, Taman Bukit Serdang, 43300 Seri Kembangan, Selangor."
            }
        ],
        "website": "https://www.facebook.com/kliniknavisolivehill"
    },
    {
        "name": "Gerobok Rezeki - Restoran MakNgah Bukit Jelutong Timor",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1095609,
                    "longitude": 101.5425589
                },
                "fullAddress": "No. 49, Jalan G U8/G, Guthrie Bukit Jelutong, Seksyen U8, 40150 Sha Alam, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Anggun Chitra Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1013205,
                    "longitude": 101.5351755
                },
                "fullAddress": "G-16, Radia Retail, Persiaran Arked, Bukit Jelutong, 40150 Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "BJUCare Food Bank (sebelah Restoran Asam Pedas)",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1030507,
                    "longitude": 101.5284661
                },
                "fullAddress": "17, Jalan Serambi U8/21, Bukit Jelutong, 40150 Shah Alam, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "AEON MALL Tebrau City: Raise The Flag Drive ",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.558694,
                    "longitude": 103.788602
                },
                "fullAddress": "No 1, Jalan Desa Tebrau, Taman Desa Tebrau, 81100 Johor Bahru, Johor"
            }
        ],
        "website": "facebook.com/aeonmalltebraucity"
    },
    {
        "name": "Charity Moment",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0717599,
                    "longitude": 101.6722865
                },
                "fullAddress": "No 66, Jalan Hujan Rahmat 3, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": "https://kinthai.my/"
    },
    {
        "name": "SOS Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1107125,
                    "longitude": 101.6675485
                },
                "fullAddress": "Unit LG-1A, Level LG The Sphere, No. 1, Avenue 1, No. 8, Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Arati Villas",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.4492449,
                    "longitude": 100.3041159
                },
                "fullAddress": "9 Jalan Tanjung Park, 11200 Tanjung Bungah, Penang"
            }
        ],
        "website": "https://m.facebook.com/pages/Arati-Villas/112723112148688"
    },
    {
        "name": "Melati Foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.223633,
                    "longitude": 101.7180878
                },
                "fullAddress": "Taman perwira satu 53100 KL"
            }
        ],
        "website": "https://www.facebook.com/1270035624/posts/10225382774217552/?d=n"
    },
    {
        "name": "Sudut Infaq PETRONAS Geliga",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.207322899999999,
                    "longitude": 103.4338496
                },
                "fullAddress": "STESEN MINYAK PETRONAS GELIGA, LOT 12202, PM 5179 SIMPANG GELIGA MUKIM CHUKAI 24000 KEMAMAN TERENGGANU"
            }
        ],
        "website": ""
    },
    {
        "name": "DAS Niaga",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.37809,
                    "longitude": 101.5324648
                },
                "fullAddress": "33, Jalan Melursari 13, Bandar Sungai Buaya, 48010, Rawang, Selangor"
            }
        ],
        "website": "dasniaga.com"
    },
    {
        "name": "Nice Vision Optic ",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5407456,
                    "longitude": 103.8042666
                },
                "fullAddress": "32, Jalan Dedap 4, Taman Johor Jaya, 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "BAKUL MAKANAN RHH RAUB",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.8030998,
                    "longitude": 101.866362
                },
                "fullAddress": "No.8, Bangunan LKNP, Jalan Padang 27600 Raub Pahang."
            }
        ],
        "website": ""
    },
    {
        "name": "Art Of Bake",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.541403,
                    "longitude": 103.8005934
                },
                "fullAddress": "24, Jalan Dedap 18, Taman Johor Jaya 81100 Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Snailer Express Johor Jaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5351573,
                    "longitude": 103.7938833
                },
                "fullAddress": "25, Jalan Ros Merah 2/1, Taman Johor Jaya, 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Kampung Terengganu",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5328373,
                    "longitude": 103.7931854
                },
                "fullAddress": "23, Jalan Ros Merah 2/7, Taman Johor Jaya 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "JB Yap Brothers Food Sdn. Bhd.",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5406409,
                    "longitude": 103.7962242
                },
                "fullAddress": "30, Jalan Bakawali 49, Taman Johor Jaya 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Green Field Molek",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5280241,
                    "longitude": 103.7929729
                },
                "fullAddress": "28, Jalan Molek 2/1, Taman Molek 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Well Shinning Centre Sdn. Bhd",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.199805,
                    "longitude": 101.716701
                },
                "fullAddress": "Bonjuk and Lunchbox Cafe, G-2 PV128, Jalan Genting Klang, Setapak, Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Delights Kitchen",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5498277,
                    "longitude": 103.8115043
                },
                "fullAddress": "H01, 03, Jalan EJ 1/3, Taman Ehsan Jaya, 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Pachem Thai Food",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5422754,
                    "longitude": 103.8003019
                },
                "fullAddress": "2, Jalan Dedap 15, Taman Johor Jaya 81100, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Parcelhub Gelang Patah",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4587917,
                    "longitude": 103.5831511
                },
                "fullAddress": "44, Jalan Nusaria 11/4, Taman Nusantara 79200 Iskandar Puteri, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Posstore Medini",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4196264,
                    "longitude": 103.635607
                },
                "fullAddress": "S26-01 Pusat Komersial Visi Medini, Persiaran Medini 2, Bandar Medini Iskandar 79250 Iskandar Puteri, Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Kow Hock Building Materials (Gelang Patah) ",
        "address": [
            {
                "coordinates": {
                    "latitude": 37.0331375,
                    "longitude": -95.62561199999999
                },
                "fullAddress": "2&4, Jalan Nusaria 11, Taman Nusantara 81500 Gelang Patah, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Well Pharmacy Nusajaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4598517,
                    "longitude": 103.5842331
                },
                "fullAddress": "No.8, Ground Floor, Jalan Nusaria 11/6, Taman Nusantara 81550 Gelang Patah, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Kow Hock Building Materials (Bukit Indah)",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4791952,
                    "longitude": 103.6497741
                },
                "fullAddress": "6, Jalan Indah 8/15, Taman Bukit Indah 79100 Nusajaya, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Kedai Ubat Fook Yuan 福源药行",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4789867,
                    "longitude": 103.6498438
                },
                "fullAddress": "12, Jalan Indah 8/15, Taman Bukit Indah, 81200 Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Alpha Dental Clinic",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4811996,
                    "longitude": 103.6642437
                },
                "fullAddress": "26, Jalan Indah 16/5, Taman Bukit Indah 81200 Johor Bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Geylang Lor9 Fresh Frog Porridge",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5154315,
                    "longitude": 103.6675783
                },
                "fullAddress": "57, Jalan Sutera Tanjung 8/2, Taman Sutera Utama 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Lao Er Steam Bee Hoon老二蒸米粉",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5156779,
                    "longitude": 103.6700149
                },
                "fullAddress": "118, Jalan Sutera Tanjung 8/3, Taman Sutera Utama, 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Hungry Station 飢餓總部",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5137816,
                    "longitude": 103.6539829
                },
                "fullAddress": "8, Jalan Pendekar 13, Taman Ungku Tun Aminah, 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Hatching Center Food Bank ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0473408,
                    "longitude": 101.7596914
                },
                "fullAddress": "L15-B, Jalan Suarasa 8/3, Bandar Tun Hussein Onn 43200 Cheras Selangor "
            }
        ],
        "website": ""
    },
    {
        "name": "FuCha Tasek",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5133206,
                    "longitude": 103.6555597
                },
                "fullAddress": "No.17, Jalan Pendekar 16, Taman Ungku Tun Aminah, 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "陀中医诊所 TOH TCM & ACUPUNCTURE",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5128389,
                    "longitude": 103.6543564
                },
                "fullAddress": "32, Jalan Pendekar 18 Taman Ungku Tun Aminah Skudai, 81300 Johor Bahru, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "KYFruits TUTA",
        "address": [
            {
                "coordinates": {
                    "latitude": 40.7311398,
                    "longitude": -74.2776813
                },
                "fullAddress": "165 & 167, Jalan Pahlawan 1, Taman Ungku Tun Aminah, Skudai, 81300, Johor Bahru, Taman Ungku Tun Aminah, 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Vipa Thai Mini Market",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5076831,
                    "longitude": 103.6514812
                },
                "fullAddress": "0114,block, 59, Jalan Perkasa 1, Taman Ungku Tun Aminah, 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "vburg Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5252891,
                    "longitude": 103.6670543
                },
                "fullAddress": "72 Jalan Laksamana 2, Taman Ungku Tun Aminah,81300,Skudai,Johor"
            }
        ],
        "website": "vburg.my"
    },
    {
        "name": "9 story cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5142933,
                    "longitude": 103.6531962
                },
                "fullAddress": "45, Jalan Pendekar 9, Taman Ungku Tun Aminah, 81300 Skudai, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Restoran Kuan Kee",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0144255,
                    "longitude": 101.4378858
                },
                "fullAddress": "22, Jalan Batu Unjur 1, Bayu Perdana, 41200 Klang"
            }
        ],
        "website": ""
    },
    {
        "name": "Yayasan Food Bank Malaysia",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9337345,
                    "longitude": 101.8492174
                },
                "fullAddress": "NO. 15, JALAN 4/8 SEKSYEN 4, BANDAR RINCHING 43500 SEMENYIH SELANGOR"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell bota titi gantong",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.3618508,
                    "longitude": 100.8422502
                },
                "fullAddress": "SHELL DN. BATU 30 JALAN AYER TAWAR TITI GANTONG 32600 BOTA PERAK"
            }
        ],
        "website": "Shell dn bota (fb ig) "
    },
    {
        "name": "Klinic Remedic Kodiang",
        "address": [
            {
                "coordinates": {
                    "latitude": 6.3898838,
                    "longitude": 100.3109584
                },
                "fullAddress": "No. 11. ( Tingkat Bawah ), Susuran Seri Kodiang, Taman Seri Kodiang, 06100 Kodiang, Kedah"
            }
        ],
        "website": "https://remedic.com.my/index.php/our-clinics/klinik-remedic-kodiang/"
    },
    {
        "name": "Shell dn bota",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.3618508,
                    "longitude": 100.8422502
                },
                "fullAddress": "Shelldn, batu 30 jalan ayer tawar titi gamtong 32600 bota perak"
            }
        ],
        "website": "SHELL DN BOTA (FB/IG) "
    },
    {
        "name": "Eudermic",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.249204,
                    "longitude": 103.0410588
                },
                "fullAddress": "Eudermic, Jalan Tay Kok Leong, 85400, Chaah, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "MBE Taman Telok",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9035809,
                    "longitude": 101.4676191
                },
                "fullAddress": "1, Jalan Dendang 1, Taman Telok, 42500 Telok Panglima Garang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Miru Dessert Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.137315,
                    "longitude": 101.6210715
                },
                "fullAddress": "62, Jalan SS 21/58, Damansara Utama, 47400 Petaling Jaya, Selangor"
            }
        ],
        "website": "https://www.mirudessertcafe.com/"
    },
    {
        "name": "Mama Mee 夜宵食堂 @ Cheras Taman Yulek",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1014381,
                    "longitude": 101.7418767
                },
                "fullAddress": "111, Jalan Kaskas, Taman Cheras, 56100 Cheras, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": "https://instagram.com/yexiaocanteen?utm_medium=copy_link"
    },
    {
        "name": "Thong Seng Restaurant",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0737134,
                    "longitude": 101.7590467
                },
                "fullAddress": "No. A6, Jalan Prima 1, Taman Rasa Sayang Prima, 43200 Cheras, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "My Pasta Boss x Bray Bakery",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1554496,
                    "longitude": 101.7226835
                },
                "fullAddress": "Menara See Hoy Chan, 374, Jln Tun Razak, Taman U Thant, 50400 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": "https://linktr.ee/mypastaboss"
    },
    {
        "name": "Musolla Mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.121159,
                    "longitude": 101.7666681
                },
                "fullAddress": "5, Jalan 11, Taman Putra, 68000 Ampang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Taman Rasah Jaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.6746386,
                    "longitude": 101.9460428
                },
                "fullAddress": "Lot 10065 main road taman rasah jaya SEREMBAN negeri sembilan "
            }
        ],
        "website": ""
    },
    {
        "name": "CMS",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0295391,
                    "longitude": 103.300415
                },
                "fullAddress": "NO 46,JALAN 1/3,TAMAN SRI KLUANG,86000 KLUANG,JOHORE"
            }
        ],
        "website": ""
    },
    {
        "name": "Taro Yogurt Kluang",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0369516,
                    "longitude": 103.3192196
                },
                "fullAddress": "22 GF，Jalan Langsat ,86000 Kluang Johor"
            }
        ],
        "website": "https://www.facebook.com/groups/156292739518797/user/100054357735682/"
    },
    {
        "name": "Flour Crown Baking studio",
        "address": [
            {
                "coordinates": {
                    "latitude": 6.2373647,
                    "longitude": 100.4399871
                },
                "fullAddress": "M9, (second floor), Taman Melur, Taman Melur, 06000 Jitra, Kedah"
            }
        ],
        "website": "https://instagram.com/flour.crown?utm_medium=copy_link"
    },
    {
        "name": "Nasman fresh mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 6.1641061,
                    "longitude": 100.5031211
                },
                "fullAddress": "No. 14, Taman, Jalan Angsana, Taman Bandar Baru, 06400 Pokok Sena, Kedah"
            }
        ],
        "website": "https://www.facebook.com/Nasman-Fresh-Mart-106241738232514/"
    },
    {
        "name": "Food Bank Masjid Cyberjaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9324933,
                    "longitude": 101.647958
                },
                "fullAddress": "Masjid Cyberjaya"
            }
        ],
        "website": ""
    },
    {
        "name": "FLAVOUR STATION ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1357912,
                    "longitude": 101.6908914
                },
                "fullAddress": "No.6, Jalan Tun Sambanthan 3, Brickfields 50470 Kuala Lumpur "
            }
        ],
        "website": ""
    },
    {
        "name": "Masjid Al Muhajirin",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.2697307,
                    "longitude": 111.8624713
                },
                "fullAddress": "Kpg Usahajaya Baru Sentosa Sibu Sarawak"
            }
        ],
        "website": ""
    },
    {
        "name": "Gerobok Rezeki",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4568802,
                    "longitude": 103.7498903
                },
                "fullAddress": "JABATAN AGAMA ISLAM NEGERI JOHOR"
            }
        ],
        "website": ""
    },
    {
        "name": "Helping Heart Community Suspended meal",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.3977567,
                    "longitude": 100.2919938
                },
                "fullAddress": "6E-22-05, MELODY HOME, LEBUHRAYA THEAN TEIK 11500 PENANG"
            }
        ],
        "website": ""
    },
    {
        "name": "Pertubuhan kebajikan ikhlas kuantan pahang",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.816434,
                    "longitude": 103.2971137
                },
                "fullAddress": "No 188 jalan im 2/95 kuantan 25200 pahang"
            }
        ],
        "website": "Www.facebook.com/ikhlaskuantan"
    },
    {
        "name": "Vijayaletchumy a/p Chellaganu",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.6531076,
                    "longitude": 103.5830524
                },
                "fullAddress": "E4-09 rose villa apartment jln sri putri 11/6 tmn putri kulai 81000 kulai johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Bakul Rezeki Al-Iman Halal Mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0413094,
                    "longitude": 102.6561635
                },
                "fullAddress": "Al-Iman Halal Mart, 22 Jalan Sinar Bakri 3, Pusat Perniagaan Sinar Bakri, 84200 Muar, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "WW kopitiam 2",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.8241864,
                    "longitude": 103.3349548
                },
                "fullAddress": "Lorong Seri Kuantan 48, East Coast Garden, 25250 Kuantan, Pahang"
            }
        ],
        "website": ""
    },
    {
        "name": "IMNI Halal Mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.6865529,
                    "longitude": 101.1208349
                },
                "fullAddress": "IMNI Halal Mart, 32, PERSIARAN KLEBANG PUTRA, PUSAT PERDAGANGAN PUTRA CHEMOR, 31200 Ipoh, Perak"
            }
        ],
        "website": ""
    },
    {
        "name": "Sab Thai Mookata",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4814161,
                    "longitude": 103.6611588
                },
                "fullAddress": "12,jalan Indah 15/1,\nTaman Bukit Indah,\n81200,Johor Bahru,Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Masjid Raja Haji Fi Sabilillah Cyberjaya",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9324933,
                    "longitude": 101.647958
                },
                "fullAddress": "Masjid Cyberjaya (Masjid Raja Haji Fi Sabilillah), Persiaran Semarak Api, 63000 Cyberjaya Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "PCS Funeral Service Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0131843,
                    "longitude": 101.6953212
                },
                "fullAddress": "Thai Best Mookata, G-10, Jalan BS 3/12, Seksyen 3, Taman Bukit Serdang, 43300 Seri Kembangan, Selangor."
            }
        ],
        "website": ""
    },
    {
        "name": "Farm Direct Shop",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5074478,
                    "longitude": 110.3735042
                },
                "fullAddress": "Ground Floor, Sublot 7 Stutong Avenue, Jalan Setia Raja Kuching, Sarawak, Malaysia"
            }
        ],
        "website": "https://www.facebook.com/farmdirectshop2019/about/?ref=page_internal"
    },
    {
        "name": "Charming Look Optical (Lobak)",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.731314100000001,
                    "longitude": 101.9325561
                },
                "fullAddress": "No.6,Matrix Court,Jalan Tan Sri Manickavasagam, Jalan Lobak, 70200 Seremban, Negeri Sembilan."
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Sec 7 depan UiTM",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.065637,
                    "longitude": 101.490972
                },
                "fullAddress": "No. 7 Persiaran Kayangan Sec 7, Fasa 3C, Shah Alam"
            }
        ],
        "website": "https://instagram.com/shell_seksyen7.uitmshahalam?utm_medium=copy_link"
    },
    {
        "name": "Sai Ananda Foundation Malaysia",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2470005,
                    "longitude": 101.677311
                },
                "fullAddress": "152, Jalan Laksamana 2/2, Kampung Laksamana, 68100 Batu Caves, Selangor"
            }
        ],
        "website": "https://www.saiananda.org/"
    },
    {
        "name": "Kemensah Grocer Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2140975,
                    "longitude": 101.7589382
                },
                "fullAddress": "Jalan L1 Kemensah Heights"
            }
        ],
        "website": "https://instagram.com/kemensah_grocer?utm_medium=copy_link"
    },
    {
        "name": "Abiz Mart, Andalas",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.013908,
                    "longitude": 101.44706
                },
                "fullAddress": "19, Jalan Sri Sarawak 21, Taman Sri Andalas, 41200 Klang, Selangor."
            }
        ],
        "website": "https://www.facebook.com/kurukure/posts/10158616341353192"
    },
    {
        "name": " SAPA LAPAR' @ Food Board Cafe & Restaurant",
        "address": [
            {
                "coordinates": {
                    "latitude": 6.113148199999999,
                    "longitude": 102.2322372
                },
                "fullAddress": "PT 482, Lembah Sireh, Kota Bharu, Kelantan."
            }
        ],
        "website": "FB only"
    },
    {
        "name": "Foodbank Petronas KM4 Jalan Salleh",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0789912,
                    "longitude": 102.580208
                },
                "fullAddress": " Lot 1311 GM 3713, Mukim Bandar Muar, Jalan Salleh, 84000 Muar, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Pertubuhan cakna asnaf kelantan",
        "address": [
            {
                "coordinates": {
                    "latitude": 6.011487,
                    "longitude": 102.3747682
                },
                "fullAddress": "Lot 193 kampung rusa jelawat 16370 bachok kelantan"
            }
        ],
        "website": ""
    },
    {
        "name": "Muze Cafe and Bar Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9940657,
                    "longitude": 101.4469305
                },
                "fullAddress": "86, Jalan Mahogani 1, Bandar Botanik, 41200 Klang, Selangor"
            }
        ],
        "website": "-"
    },
    {
        "name": "Masterline",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0751234,
                    "longitude": 101.5868655
                },
                "fullAddress": "Jalan SS15/8B Subang Jaya"
            }
        ],
        "website": ""
    },
    {
        "name": "Sri Hartamas Foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1577922,
                    "longitude": 101.6514714
                },
                "fullAddress": "Jalan Sri Hartamas 3, 50490 KL"
            }
        ],
        "website": ""
    },
    {
        "name": "Council of churches of malaysia",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.112764,
                    "longitude": 101.6513231
                },
                "fullAddress": "\n26, Jln Profesor Diraja Ungku Aziz, Pjs 11, 46200 Petaling Jaya, Selangor"
            }
        ],
        "website": "https://ccmalaysia.org/"
    },
    {
        "name": "T.H.A.S FoodBank ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1947292,
                    "longitude": 101.7112613
                },
                "fullAddress": "Unit 3-3, MH Avenue No. 2 Jalan Bunga Kantan, Off Jalan Genting Kelang, Setapak 53300 Kuala Lumpur."
            }
        ],
        "website": ""
    },
    {
        "name": "Pertubuhan Kebajikan Darul Jariyah",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.417414,
                    "longitude": 101.5980887
                },
                "fullAddress": "No37 Jalan Kemboja 5a, Bukit Sentosa "
            }
        ],
        "website": ""
    },
    {
        "name": "CMS",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0295391,
                    "longitude": 103.300415
                },
                "fullAddress": "46, Jalan 1/3, Taman Sri Kluang, 86000 Kluang, Johor"
            }
        ],
        "website": ""
    },
    {
        "name": "Maxis centre kuala ketil food bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.6068205,
                    "longitude": 100.6422535
                },
                "fullAddress": "No 68 persiaran kkcc 2 09300 kuala ketil kedah"
            }
        ],
        "website": ""
    },
    {
        "name": "Masjid At-Taqwa TTDI",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1460914,
                    "longitude": 101.6296834
                },
                "fullAddress": "Masjid At-Taqwa, Jalan Datuk Sulaiman, TTDI, KL"
            }
        ],
        "website": "https://m.facebook.com/story.php?story_fbid=1914344435399866&id=348563438644648"
    },
    {
        "name": "Lido Plaza Food bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 36.4044372,
                    "longitude": -93.7378064
                },
                "fullAddress": "Lido Plaza,in front of B side cafe. "
            }
        ],
        "website": ""
    },
    {
        "name": "Little Foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0999825,
                    "longitude": 101.6766967
                },
                "fullAddress": "Little People, G-01, Avantas Residences 162, Jalan Klang Lama, 58200 Kuala Lumpur"
            }
        ],
        "website": "Instagram @littlepeople__"
    },
    {
        "name": "Help A Stranger Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1202499,
                    "longitude": 101.6299577
                },
                "fullAddress": "Strangers at 47 - 45, 47 49, Jalan 17/45, Seksyen 17, 46400 Petaling Jaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "#TabungFamilyBatu12",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.4261433,
                    "longitude": 100.4680397
                },
                "fullAddress": "8, Jalan Guar Indah, Taman Guar Indah, 14400 Kubang Semang, Bukit Mertajam"
            }
        ],
        "website": ""
    },
    {
        "name": "The Bao Guys",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.11829,
                    "longitude": 101.621
                },
                "fullAddress": "12M, Jalan SS2/61 , 47300 petaling Jaya "
            }
        ],
        "website": "https://www.instagram.com/thebaoguys"
    },
    {
        "name": "Pasar kecil melawati",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2220361,
                    "longitude": 101.7412869
                },
                "fullAddress": "No 1, jalan e1, fasa 4, taman melawati,53100, selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Pasar kecil melawati",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2220361,
                    "longitude": 101.7412869
                },
                "fullAddress": "No 1, jalan e1, fasa 4, taman melawati,53100, selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Food Bank by Klinik Dr Alyna",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1970308,
                    "longitude": 101.7410641
                },
                "fullAddress": "NO 6, Jalan Wangsa Delima 10, D'Wangsa, Wangsa Maju, 53300 Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Gerobok Rezeki by Surau Darul Huda Seksyen 10",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1867868,
                    "longitude": 101.7358809
                },
                "fullAddress": "Surau Darul Huda Seksyen 10, Wangsa Maju, 53300 KL"
            }
        ],
        "website": ""
    },
    {
        "name": "COOX Food Bank ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.134145,
                    "longitude": 101.6297361
                },
                "fullAddress": "G05, Glo Damansara, 669, Jalan Damansara, 60000 Kuala Lumpur"
            }
        ],
        "website": "https://coox.asia/"
    },
    {
        "name": "Food Bank by PINTO Thai Rice Pot",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1880682,
                    "longitude": 101.7341319
                },
                "fullAddress": "Lot G-3, Seasons Garden,Seksyen 10 Wangsa Maju,53300 KL"
            }
        ],
        "website": ""
    },
    {
        "name": "Melawati Nasi Ayam Hainan Singapore",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2273836,
                    "longitude": 101.744712
                },
                "fullAddress": "No 2, Jalan H 3, Taman Melawati"
            }
        ],
        "website": ""
    },
    {
        "name": "Custom Medz Pharmacy Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1088738,
                    "longitude": 101.6780994
                },
                "fullAddress": "9-2 Medan Kelang Lama 28, Jalan Kelang Lama, 58000, KL"
            }
        ],
        "website": "www.custommedz.com"
    },
    {
        "name": "Kelab Belia Amal Lestari",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0354763,
                    "longitude": 101.6734997
                },
                "fullAddress": "Blok D, Pangsapuri Enggang, Bandar Kinrara 6F, Puchong"
            }
        ],
        "website": "https://instagram.com/kelabbeliaamallestari?igshid=shj4v0p01l2j"
    },
    {
        "name": "Good Samaritan Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1935423,
                    "longitude": 101.6918914
                },
                "fullAddress": "Jalan 2/48b, Taman Sentul Jaya, 51000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Jane Nem Hanoi Authentic spring Roll",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.128828,
                    "longitude": 101.634476
                },
                "fullAddress": "1st Floor, Above 99 Speed Mart, 1081, Jalan 17/27, Seksyen, 46400 Petaling Jaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Oakwood Hotel & Residence Kuala Lumpur",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1611996,
                    "longitude": 101.7291156
                },
                "fullAddress": "222, Jalan Ampang, 50450, Kuala Lumpur, Malaysia"
            }
        ],
        "website": "https://www.facebook.com/OakwoodKualaLumpur/?ref=page_internal"
    },
    {
        "name": "FG PRIHATIN",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.2961922,
                    "longitude": 102.2129129
                },
                "fullAddress": "NO.60,JALAN ORKID 1, TAMAN PAYA RUMPUT PERDANA,76450 MELAKA"
            }
        ],
        "website": "https://www.facebook.com/FarmasiGemilangPayaRumput/"
    },
    {
        "name": "Little Foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0999825,
                    "longitude": 101.6766967
                },
                "fullAddress": "Little People, G-01, Avantas Residences 162, Jalan Klang Lama, 58200 Kuala Lumpur"
            }
        ],
        "website": "Instagram @littlepeople__"
    },
    {
        "name": "OLIVES GROCER",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9881441,
                    "longitude": 101.4547729
                },
                "fullAddress": "12 Jalan Ramin 3, Bandar Botanik Klang 41200 Klang, Selangor, Malaysia"
            }
        ],
        "website": " http://www.olivegrocer.com/"
    },
    {
        "name": "Cikgu Atie Foodbank",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.126648900000001,
                    "longitude": 100.4917187
                },
                "fullAddress": "No 30, Lorong Muhibbah, Jalan Abdul Raof, 34200 Parit Buntar, Perak"
            }
        ],
        "website": ""
    },
    {
        "name": "Bibik Tiffin & Lian Kee Foundation",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.15469,
                    "longitude": 101.5920953
                },
                "fullAddress": "No. 1-G Jalan PJU 5/21 The Strand, Kota Damansara, 47810 Petaling Jaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "DONATION DRIVE by BUKIT JELUTONG COMMUNITY",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1030603,
                    "longitude": 101.5284471
                },
                "fullAddress": "Restoran Asam Pedas, Serambi, Bukit Jelutong, Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Taman Tadisma Section 13 ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.087299,
                    "longitude": 101.539003
                },
                "fullAddress": "Guard House, Taman Tadisma Section 13, Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Marimas Sdn Bhd",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.815839499999999,
                    "longitude": 103.3225958
                },
                "fullAddress": "C-722, Jalan Dato Lim Hoe Lek, 25200 Kuantan, Pahang"
            }
        ],
        "website": ""
    },
    {
        "name": "Al Maqha",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.8347127,
                    "longitude": 103.3013579
                },
                "fullAddress": "Restoran Al Maqha, Lorong IM5/2, Indera Mahkota 5, Kuantan, PAHANG"
            }
        ],
        "website": ""
    },
    {
        "name": "Boon Physiotherapy Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.2408822,
                    "longitude": 101.6498723
                },
                "fullAddress": "Boon Physiotherapy and Rehabilitation Centre, G-7, Kompleks Perniagaan Selayang Point, Jalan SP1, 68100, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Gerobok Anggerik",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0882926,
                    "longitude": 101.5084084
                },
                "fullAddress": "Sekolah Kebangsaan Bandar Anggerik Sek 6 Shah Alam"
            }
        ],
        "website": ""
    },
    {
        "name": "Gerobok Infaq Surau Elmina Gardens",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1918539,
                    "longitude": 101.5139471
                },
                "fullAddress": "5, Jalan Frekuensi U16/110, Elmina East, 40160 Shah Alam, Selangor"
            }
        ],
        "website": "FB Surau Elmina Gardens "
    },
    {
        "name": "Al-Iman Halal Mart",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0296351,
                    "longitude": 102.5827581
                },
                "fullAddress": "No.4, Jalan Sejahtera 1, Taman Sri Temenggong, 84000 Muar, Johor"
            }
        ],
        "website": "https://www.alimanhalmart.com"
    },
    {
        "name": "Barang keperluan makanan",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.4913036,
                    "longitude": 100.4507079
                },
                "fullAddress": "No.2, lorong temenggong 3, taman koskam, 13200 kepala batas, pulau pinang."
            }
        ],
        "website": ""
    },
    {
        "name": "7 Lotus Vegetarian Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0405145,
                    "longitude": 101.7939265
                },
                "fullAddress": "6, Jalan SL 1/2, Bandar Sungai Long, 43000 Kajang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Restaurant Ah Hook",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9864881,
                    "longitude": 101.4658813
                },
                "fullAddress": "No 22 Ground Floor Lorong Sanggul 1c bandar puteri, 41200 Pelabohan Klang, Malaysia"
            }
        ],
        "website": ""
    },
    {
        "name": "SK Sri Damai",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1220284,
                    "longitude": 101.634315
                },
                "fullAddress": "SK Sri Damai, Jalan 17/13, Seksyen 17, 46400 Petaling Jaya, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Musking",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1627229,
                    "longitude": 101.6483124
                },
                "fullAddress": "Durian seller. Jalan 31/70a, Desa Sri Hartamas"
            }
        ],
        "website": ""
    },
    {
        "name": "FOOD BANK PIBG SKOL",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.8356734,
                    "longitude": 101.5876441
                },
                "fullAddress": "SK OLAK LEMPIT, OLAK LEMPIT, 42700 BANTING, SELANGOR"
            }
        ],
        "website": ""
    },
    {
        "name": "Rotary Club Tanjung Bungah",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.4634919,
                    "longitude": 100.284779
                },
                "fullAddress": "Pasar Tanjung Bungah"
            }
        ],
        "website": ""
    },
    {
        "name": "Zamri Basir",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.167375,
                    "longitude": 101.5365352
                },
                "fullAddress": "Taman Puteri Subang"
            }
        ],
        "website": ""
    },
    {
        "name": "Surau al-Syukuriah",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0071531,
                    "longitude": 101.8027247
                },
                "fullAddress": "73, Jalan Prima Saujana 5/1, Taman Puncak Saujana, 43000 Kajang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Iria food bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1314615,
                    "longitude": 101.4397663
                },
                "fullAddress": "No 51, Jalan Meru Batu 6, Pekan Meru, 41050 Klang, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "GEROBOK REZEKI SK LELAKI BANDAR",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.0281593,
                    "longitude": 103.3132742
                },
                "fullAddress": "SK LELAKI BANDAR"
            }
        ],
        "website": ""
    },
    {
        "name": "Pen & Pepper Cafe food bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1001658,
                    "longitude": 101.7158386
                },
                "fullAddress": "1G-3G Jalan Danau Lumayan, Bandar Sri Permaisuri"
            }
        ],
        "website": ""
    },
    {
        "name": "Pen & Pepper Cafe",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1001578,
                    "longitude": 101.715837
                },
                "fullAddress": "1G Jalan Danau Lumayan, Bandar Sri Permaisuri"
            }
        ],
        "website": ""
    },
    {
        "name": "Masjid Kampung Terang, Balik Pulau",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.324845,
                    "longitude": 100.2125858
                },
                "fullAddress": "Jalan Ayer Putih, Kampung Terang, 11000 Balik Pulau, Pulau Pinang"
            }
        ],
        "website": ""
    },
    {
        "name": "SEREMBAN 2 ",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.7403374,
                    "longitude": 101.9720555
                },
                "fullAddress": "NO 53,RUMAH RAKYAT SIKAMAT 2 BATU 3 JALAN JELEBU 70400 SEREMBAN NEGERI SEMBILAN."
            }
        ],
        "website": "https://www.sambalsos.com/report-flag "
    },
    {
        "name": "SEREMBAN 3 ",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.7403374,
                    "longitude": 101.9720555
                },
                "fullAddress": "NO 53,RUMAH RAKYAT SIKAMAT 2 BATU 3 JALAN JELEBU 70400 SEREMBAN NEGERI SEMBILAN."
            }
        ],
        "website": "https://www.sambalsos.com/report-flag"
    },
    {
        "name": "Siti sarah binti che ali ",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1940786,
                    "longitude": 101.6990405
                },
                "fullAddress": "10-20 ppr sentul murni pinggiran dato senu taman dato senu 51000 kuala Lumpur "
            }
        ],
        "website": "Tiada"
    },
    {
        "name": "Ninso",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.09199,
                    "longitude": 101.7004792
                },
                "fullAddress": "Plaza 63, Jalan Sungai Besi, Taman Sungai Besi, 57100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": "https://m.facebook.com/Ninso.Official/posts/1197951304000547"
    },
    {
        "name": "Caltex Bidor",
        "address": [
            {
                "coordinates": {
                    "latitude": 4.112371,
                    "longitude": 101.2869979
                },
                "fullAddress": "Caltex, Bidor, 35500,Bidor,Perak"
            }
        ],
        "website": "https://www.caltex.com/my/"
    },
    {
        "name": "Prasanna nair",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.4580601,
                    "longitude": 103.9096932
                },
                "fullAddress": "Blk 19 a/5 sedc flats 81700 pasir gudang johor"
            }
        ],
        "website": "Pras5320@gmail.com"
    },
    {
        "name": "Nor jeyah binti Mohammad ",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5147678,
                    "longitude": 103.7002617
                },
                "fullAddress": "03-55 , blok23 , lorong cempaka , taman cempaka , 81200 johor bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Nor jeyah binti Mohammad ",
        "address": [
            {
                "coordinates": {
                    "latitude": 1.5147678,
                    "longitude": 103.7002617
                },
                "fullAddress": "03-55 , blok23 , lorong cempaka , taman cempaka , 81200 johor bahru"
            }
        ],
        "website": ""
    },
    {
        "name": "Syarikat Sri Alam",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.0831641,
                    "longitude": 101.5069846
                },
                "fullAddress": "Jalan Murai 6/1F Seksyen 6, Shah Alam, Selangor "
            }
        ],
        "website": ""
    },
    {
        "name": "Good Samaritan Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.1935423,
                    "longitude": 101.6918914
                },
                "fullAddress": "Jalan 2/48b, Taman Sentul Jaya, 51000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            }
        ],
        "website": ""
    },
    {
        "name": "Shell Seksyen 7 Bandar Baru Bangi",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9733088,
                    "longitude": 101.7799266
                },
                "fullAddress": "JALAN 7/1 BANDAR BARU BANGI, 43000, BANGI, MY"
            }
        ],
        "website": ""
    },
    {
        "name": "Petronas Seksyen 3 Bandar Baru Bangi",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9390263,
                    "longitude": 101.7753489
                },
                "fullAddress": "Lot PS 1, Jalan 3/ 1 Seksyen 3, Bandar Baru Bangi, 43650 Bangi, Selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "GOH KIM KIM",
        "address": [
            {
                "coordinates": {
                    "latitude": 3.234718,
                    "longitude": 101.6617471
                },
                "fullAddress": "No 3-8-11 taman sri murni\nJalan 1/2d selayang km 12,jalan ipoh\n68100 batu caves"
            }
        ],
        "website": ""
    },
    {
        "name": "List of Melaka food banks",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.1891264,
                    "longitude": 102.2726758
                },
                "fullAddress": "UJONG PASIR "
            }
        ],
        "website": "https://www.facebook.com/166214060103475/posts/4293892884002218/"
    },
    {
        "name": "smart cool solution",
        "address": [
            {
                "coordinates": {
                    "latitude": 2.9690821,
                    "longitude": 101.797117
                },
                "fullAddress": "21 jln sek 2/9 taman kajang utama 43000 kajang selangor"
            }
        ],
        "website": ""
    },
    {
        "name": "Stanton Hotel",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.966662299999999,
                    "longitude": 116.0724878
                },
                "fullAddress": "Stanton Hotel, Lorong Karamunsing C, Jalan Karamunsing, kota kinabalu "
            }
        ],
        "website": ""
    },
    {
        "name": "Lean Giap Food Bank",
        "address": [
            {
                "coordinates": {
                    "latitude": 5.4181303,
                    "longitude": 100.3415226
                },
                "fullAddress": "Wisma Giap Chew 28 Lebuh Gereja 10200 Penang"
            }
        ],
        "website": "www.leangiap.com"
    }
];

module.exports = { foodbanks }