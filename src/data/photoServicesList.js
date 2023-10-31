import Polaroid_1 from "../../public/images/photo-services/polaroid-1.png";
import Polaroid_2 from "../../public/images/photo-services/polaroid-2.png";
import Polaroid_3 from "../../public/images/photo-services/polaroid-3.png";
import Polaroid_4 from "../../public/images/photo-services/polaroid-4.png";
import CommonCard from "../../public/images/photo-services/common-card.png";

const photoServicesList = [
    {
        id: 1,
        services: [
            {
                name: 'Фотопечать на матовой или глянцевой фотобумаге',
                products: [
                    {
                        title: '7,5х10',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '12р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 20 шт.',
                                        price: '10р'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        title: '10х15',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '25р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '16р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '12р'
                                    },
                                    {
                                        quantity: 'от 300 шт.',
                                        price: '10р'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '13х18',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '35р'
                            },
                        ]
                    },
                    {
                        title: '15х21 (с полями 3мм)',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '48р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '34р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '22р'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '21х30',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '120р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '85р'
                                    },
                                    {
                                        quantity: 'от 15 шт.',
                                        price: '70р'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '30х40',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '240р'
                            },
                        ]
                    },
                ],
                sideImages: [Polaroid_1, Polaroid_2, Polaroid_3],
            },
            {
                name: 'Фотопечать на сатиновой или шёлковой фотобумаге',
                products: [
                    {
                        title: '10х15',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '35р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 15 шт.',
                                        price: '22р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '18р'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '21х30',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '150р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 15 шт.',
                                        price: '100р'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Полароид 7,5х10',
                        price: '30р'
                    },
                    {
                        title: 'Полароид 9х11',
                        price: '40р'
                    },
                    {
                        title: 'Печать на самоклеющейся бумаге',
                        price: '200р'
                    }
                ],
                sideImages: [Polaroid_4],
            },
            {
                name: 'Широкоформатная фотопечать (глянцевая, матовая бумага)',
                products: [
                    {
                        title: '40x60',
                        price: '840р'
                    },
                    {
                        title: '50x70',
                        price: '1043р'
                    },
                    {
                        title: '60x90',
                        price: '1220р'
                    },
                ]
            },
            {
                name: 'Фото на документы',
                products: [
                    {
                        description: 'В стоимость услуги входит: съемка, базовая ретушь, печать фотографий. Вы также можете получить электронный вариант фотографии на почту бесплатно.'
                    },
                    {
                        title: 'Фото на документы',
                        price: '350р'
                    },
                    {
                        title: 'Дополнительный блок фотографий',
                        price: '100р'
                    },
                    {
                        title: 'Подстановка формы и знаков отличия',
                        price: '150р'
                    },
                    {
                        title: 'Фото Green Card',
                        price: '400р'
                    }
                ],
                isCompareImage: true,
            },
            {
                name: 'Реставрация, дизайн и ретушь',
                price: 'от 400р',
                products: [
                    {
                        description: 'Реставрация — это восстановление поврежденной фотографии. Комплекс действий для каждого кадра индивидуальный, в результате чего и формируется стоимость услуги.',
                    },
                    {
                        description: 'Дизайн — это разработка уникального материала, который впоследствии отправляется в печать. Обрщаем Ваше внимание, что мы занимаемся разработкой дизайн-макетов только для печати на бумаге и сувенирной продукции.',
                    },
                    {
                        description: 'Ретушь — это обработка фотографии с целью улучшения и исправления внешнего вида кадра.',
                    },
                ],
                lowerImages: [CommonCard],
            },
            {
                name: 'Печать на холсте',
                products: [
                    {
                        title: '30х40 см',
                        options: [
                            {
                                subtitle: 'Без натяжки',
                                price: '2230р'
                            },
                            {
                                subtitle: 'С натяжкой',
                                price: '2330р'
                            }
                        ]
                    },
                    {
                        title: '40х40 см',
                        options: [
                            {
                                subtitle: 'Без натяжки',
                                price: '2500р'
                            },
                            {
                                subtitle: 'С натяжкой',
                                price: '2650р'
                            }
                        ]
                    },
                    {
                        title: '40х50 см',
                        options: [
                            {
                                subtitle: 'Без натяжки',
                                price: '2700р'
                            },
                            {
                                subtitle: 'С натяжкой',
                                price: '2600р'
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Печать на пенокартоне',
                products: [
                    {
                        title: '30х40 см',
                        options: [
                            {
                                subtitle: 'Без рамки',
                                price: '1400р'
                            },
                            {
                                subtitle: 'С рамкой',
                                price: '1550р'
                            }
                        ]
                    },
                    {
                        title: '40х40 см',
                        options: [
                            {
                                subtitle: 'Без рамки',
                                price: '1600р'
                            },
                            {
                                subtitle: 'С рамкой',
                                price: '1750р'
                            }
                        ]
                    },
                    // Добавьте остальные размеры и опции
                ]
            },
            // Другие товары и услуги
        ],
    },
    // Другие объекты для других id могут быть добавлены здесь, если необходимо.
];

export default photoServicesList;