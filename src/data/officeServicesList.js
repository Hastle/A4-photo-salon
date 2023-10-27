import Polaroid_1 from "../assets/images/office-services/polaroid-1.png";
import Polaroid_2 from "../assets/images/office-services/polaroid-2.png";
import Polaroid_3 from "../assets/images/office-services/polaroid-3.png";
import Polaroid_4 from "../assets/images/office-services/polaroid-4.png";

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
                                isBold: true,
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '15р'
                                    },
                                    {
                                        quantity: 'до 21 до 50 стр.',
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
                                isBold: true,
                                price: [
                                    {
                                        quantity: 'до 20 стр.',
                                        price: '24р'
                                    },
                                    {
                                        quantity: 'до 21 до 50 стр.',
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
                        options: [
                            {
                                subtitle: 'Чёрно-белая',
                                price: '15р'
                            },
                            {
                                subtitle: 'Цветная',
                                price: '24р'
                            }
                        ]
                    },
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
                        options: [
                            {
                                subtitle: 'А6',
                                price: '60р'
                            },
                            {
                                subtitle: 'А5',
                                price: '80р'
                            },
                            {
                                subtitle: 'А4',
                                price: '100р'
                            },
                            {
                                subtitle: 'А3',
                                price: '170р'
                            },

                        ]
                    },
                ],
            },
            {
                name: 'Брошюровка',
                products: [
                    {
                        options: [
                            {
                                subtitle: 'до 25 листов',
                                price: '160р'
                            },
                            {
                                subtitle: 'до 50 листов',
                                price: '210р'
                            },
                            {
                                subtitle: 'до 100 листов',
                                price: '300р'
                            },
                            {
                                subtitle: 'до 200 листов',
                                price: '360р'
                            },
                            {
                                subtitle: 'до 300 листов',
                                price: '510р'
                            },
                            {
                                subtitle: 'до 500 листов',
                                price: '660р'
                            },
                        ]
                    },
                ],
                sideImages: [Polaroid_4],
            },
            {
                name: 'Твердый переплет',
                products: [
                    {
                        options: [
                            {
                                subtitle: 'до 50 листов',
                                price: '400р'
                            },
                            {
                                subtitle: 'до 100 листов',
                                price: '470р'
                            },
                            {
                                subtitle: 'до 150 листов',
                                price: '560р'
                            },
                            {
                                subtitle: 'до 200 листов',
                                price: '640р'
                            },
                            {
                                subtitle: 'до 300 листов',
                                price: '700р'
                            },
                        ]
                    },
                ],
            },
            // Другие товары и услуги
        ],
    },
    // Другие объекты для других id могут быть добавлены здесь, если необходимо.
];

export default officeServicesList;