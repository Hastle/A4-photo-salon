import Polaroid_1 from "../../public/images/office-services/polaroid-1.png";
import Polaroid_2 from "../../public/images/office-services/polaroid-2.png";
import Polaroid_3 from "../../public/images/office-services/polaroid-3.png";
import Polaroid_4 from "../../public/images/office-services/polaroid-4.png";

const officeServicesList = [
    {
        id: 1,
        services: [
            {
                name: 'Распечатка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'от 21 до 50 стр.',
                                        price: '12р'
                                    },
                                    {
                                        quantity: 'от 51 до 100 стр.',
                                        price: '10р'
                                    },
                                    {
                                        quantity: 'больше 101 стр.',
                                        price: '8р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '24р'
                                    },
                                    {
                                        quantity: 'от 21 до 50 стр.',
                                        price: '22р'
                                    },
                                    {
                                        quantity: 'от 51 до 100 стр.',
                                        price: '18р'
                                    },
                                    {
                                        quantity: 'больше 101 стр.',
                                        price: '14р'
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        title: 'Формат А3',
                        options: [
                            {
                                subtitle: 'от 1 до 5 стр.',
                                price: '100р'
                            },
                            {
                                subtitle: 'от 6 до 15 стр.',
                                price: '80р'
                            },
                            {
                                subtitle: 'больше 15 стр',
                                price: '60р'
                            },
                        ]
                    },
                    {
                        title: 'Формат А2',
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: '370р'
                            },
                            {
                                subtitle: 'Цветная',
                                price: '460р'
                            },
                        ]
                    },
                ],
                sideImages: [Polaroid_1, Polaroid_2, Polaroid_3],
            },
            {
                name: 'Ксерокопия',
                products: [
                    {
                        title: 'Чёрно-белая',
                        price: '15р'
                    },
                    {
                        title: 'Цветная',
                        price: '24р'
                    }
                ],
            },
            {
                name: 'Сканирование',
                price: '30р'
            },
            {
                name: 'Ламинация',
                products: [
                    {
                        title: 'А6',
                        price: '60р'
                    },
                    {
                        title: 'А5',
                        price: '80р'
                    },
                    {
                        title: 'А4',
                        price: '100р'
                    },
                    {
                        title: 'А3',
                        price: '170р'
                    },

                ],
            },
            {
                name: 'Брошюровка',
                products: [
                    {
                        title: 'до 25 листов',
                        price: '160р'
                    },
                    {
                        title: 'до 50 листов',
                        price: '210р'
                    },
                    {
                        title: 'до 100 листов',
                        price: '300р'
                    },
                    {
                        title: 'до 200 листов',
                        price: '360р'
                    },
                    {
                        title: 'до 300 листов',
                        price: '510р'
                    },
                    {
                        title: 'до 500 листов',
                        price: '660р'
                    },
                ],
                sideImages: [Polaroid_4],
            },
            {
                name: 'Твердый переплет',
                products: [
                    {
                        title: 'до 50 листов',
                        price: '400р'
                    },
                    {
                        title: 'до 100 листов',
                        price: '470р'
                    },
                    {
                        title: 'до 150 листов',
                        price: '560р'
                    },
                    {
                        title: 'до 200 листов',
                        price: '640р'
                    },
                    {
                        title: 'до 300 листов',
                        price: '700р'
                    },
                ],
            },
            // Другие товары и услуги
        ],
    },
    {
        id: 2,
        services: [
            {
                name: 'Распечатка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 10 стр.',
                                        price: '12р'
                                    },
                                    {
                                        quantity: 'от 11 стр.',
                                        price: '10р'
                                    },
                                    {
                                        quantity: 'от 51 стр.',
                                        price: '8р'
                                    },
                                    {
                                        quantity: 'больше 101 стр.',
                                        price: '6р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: [
                                    {
                                        quantity: 'до 10 стр.',
                                        price: '18р'
                                    },
                                    {
                                        quantity: 'от 11 стр.',
                                        price: '16р'
                                    },
                                    {
                                        quantity: 'от 51 стр.',
                                        price: '14р'
                                    },
                                    {
                                        quantity: 'больше 101 стр.',
                                        price: '12р'
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        title: 'Формат А3',
                        price: '60р',
                        isBold: true,
                    },
                    {
                        title: 'Формат А2',
                        price: '280р',
                        isBold: true,
                    },
                    {
                        title: 'Формат А1',
                        price: '320р',
                        isBold: true,
                    },
                ],
                sideImages: [Polaroid_1, Polaroid_2],
            },
            {
                name: 'Ксерокопия',
                products: [
                    {
                        title: 'Чёрно-белая',
                        price: '12р'
                    },
                    {
                        title: 'Цветная',
                        price: '18р'
                    }
                ],
            },
            {
                name: 'Сканирование',
                price: '20р'
            },
            {
                name: 'Ламинация',
                products: [
                    {
                        title: 'А6',
                        price: '40р'
                    },
                    {
                        title: 'А5',
                        price: '50р'
                    },
                    {
                        title: 'А4',
                        price: '70р'
                    },
                    {
                        title: 'А3',
                        price: '100р'
                    },

                ],
                sideImages: [Polaroid_3],
            },
            {
                name: 'Брошюровка',
                products: [
                    {
                        title: 'до 25 листов',
                        price: '120р'
                    },
                    {
                        title: 'до 50 листов',
                        price: '180р'
                    },
                    {
                        title: 'до 100 листов',
                        price: '240р'
                    },
                    {
                        title: 'от 100 листов',
                        price: '300р'
                    },
                ],
                sideImages: [Polaroid_4],
            },
        ],
    },
    {
        id: 3,
        services: [
            {
                name: 'Распечатка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '20р'
                                    },
                                    {
                                        quantity: 'от 21 до 50 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'больше 100 стр.',
                                        price: '10р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: [
                                    {
                                        quantity: 'до 10 стр.',
                                        price: '40р'
                                    },
                                    {
                                        quantity: 'от 10 стр.',
                                        price: '35р'
                                    },
                                    {
                                        quantity: 'от 50 стр.',
                                        price: '30р'
                                    },
                                ]
                            }
                        ],
                    },
                ],
                sideImages: [Polaroid_1],
            },
            {
                name: 'Ксерокопия',
                products: [
                    {
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'от 21 стр.',
                                        price: '10р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: '40р'
                            }
                        ]
                    }
                ],
            },
            {
                name: 'Ламинация',
                products: [
                    {
                        title: 'А6',
                        price: '80р'
                    },
                    {
                        title: 'А5',
                        price: '100р'
                    },
                    {
                        title: 'А4',
                        price: '150р'
                    },
                    {
                        title: 'А3',
                        price: '250р'
                    },

                ],
                sideImages: [Polaroid_3],
            },
            {
                name: 'Брошюровка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '200р'
                            },
                            {
                                subtitle: 'до 100 листов',
                                price: '300р'
                            },
                            {
                                subtitle: 'до 200 листов',
                                price: '400р'
                            },
                            {
                                subtitle: 'до 300 листов',
                                price: '500р'
                            },
                        ],
                    },
                    {
                        title: 'Формат А3',
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '500р'
                            },
                        ],
                    },
                ],
                sideImages: [Polaroid_4],
            },
            // Другие товары и услуги
        ],
    },
    {
        id: 4,
        services: [
            {
                name: 'Распечатка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '20р'
                                    },
                                    {
                                        quantity: 'от 21 до 50 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'больше 100 стр.',
                                        price: '10р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: [
                                    {
                                        quantity: 'до 10 стр.',
                                        price: '40р'
                                    },
                                    {
                                        quantity: 'от 10 стр.',
                                        price: '35р'
                                    },
                                    {
                                        quantity: 'от 50 стр.',
                                        price: '30р'
                                    },
                                ]
                            }
                        ],
                    },
                ],
                sideImages: [Polaroid_1],
            },
            {
                name: 'Ксерокопия',
                products: [
                    {
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'от 21 стр.',
                                        price: '10р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: '40р'
                            }
                        ]
                    }
                ],
            },
            {
                name: 'Ламинация',
                products: [
                    {
                        title: 'А6',
                        price: '80р'
                    },
                    {
                        title: 'А5',
                        price: '100р'
                    },
                    {
                        title: 'А4',
                        price: '150р'
                    },
                    {
                        title: 'А3',
                        price: '250р'
                    },

                ],
                sideImages: [Polaroid_3],
            },
            {
                name: 'Брошюровка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '200р'
                            },
                            {
                                subtitle: 'до 100 листов',
                                price: '300р'
                            },
                            {
                                subtitle: 'до 200 листов',
                                price: '400р'
                            },
                            {
                                subtitle: 'до 300 листов',
                                price: '500р'
                            },
                        ],
                    },
                    {
                        title: 'Формат А3',
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '500р'
                            },
                        ],
                    },
                ],
                sideImages: [Polaroid_4],
            },
            // Другие товары и услуги
        ],
    },
    {
        id: 5,
        services: [
            {
                name: 'Распечатка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '20р'
                                    },
                                    {
                                        quantity: 'от 21 до 50 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'больше 100 стр.',
                                        price: '10р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: [
                                    {
                                        quantity: 'до 10 стр.',
                                        price: '40р'
                                    },
                                    {
                                        quantity: 'от 10 стр.',
                                        price: '35р'
                                    },
                                    {
                                        quantity: 'от 50 стр.',
                                        price: '30р'
                                    },
                                ]
                            }
                        ],
                    },
                ],
                sideImages: [Polaroid_1],
            },
            {
                name: 'Ксерокопия',
                products: [
                    {
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'от 21 стр.',
                                        price: '10р'
                                    },
                                ]
                            },
                            {
                                subtitle: 'Цветная',
                                price: '40р'
                            }
                        ]
                    }
                ],
            },
            {
                name: 'Ламинация',
                products: [
                    {
                        title: 'А6',
                        price: '80р'
                    },
                    {
                        title: 'А5',
                        price: '100р'
                    },
                    {
                        title: 'А4',
                        price: '150р'
                    },
                    {
                        title: 'А3',
                        price: '250р'
                    },

                ],
                sideImages: [Polaroid_3],
            },
            {
                name: 'Брошюровка',
                products: [
                    {
                        title: 'Формат А4',
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '200р'
                            },
                            {
                                subtitle: 'до 100 листов',
                                price: '300р'
                            },
                            {
                                subtitle: 'до 200 листов',
                                price: '400р'
                            },
                            {
                                subtitle: 'до 300 листов',
                                price: '500р'
                            },
                        ],
                    },
                    {
                        title: 'Формат А3',
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '500р'
                            },
                        ],
                    },
                ],
                sideImages: [Polaroid_4],
            },
            // Другие товары и услуги
        ],
    },
];

export default officeServicesList;