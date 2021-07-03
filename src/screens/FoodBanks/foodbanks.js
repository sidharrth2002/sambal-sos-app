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
    }
];

module.exports = { foodbanks }