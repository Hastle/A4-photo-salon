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
                        titleFirst: 'Размер',
                        titleSecond: 'Без натяжки',
                        titleThird: 'С натяжкой',
                        options: [
                            {
                                subtitle: '30х40 см',
                                price: '2230р',
                                priceAddition: '3230р'
                            },
                            {
                                subtitle: '40х40 см',
                                price: '2330р',
                                priceAddition: '3470р'
                            },
                            {
                                subtitle: '40х50 см',
                                price: '2500р',
                                priceAddition: '3580р'
                            },
                            {
                                subtitle: '40х60 см',
                                price: '2650р',
                                priceAddition: '3720р'
                            },
                            {
                                subtitle: '40х90 см',
                                price: '2700р',
                                priceAddition: '3550р'
                            },
                            {
                                subtitle: '50х50 см',
                                price: '2600р',
                                priceAddition: '3630р'
                            },
                            {
                                subtitle: '50х60 см',
                                price: '2950р',
                                priceAddition: '3970р'
                            },
                            {
                                subtitle: '50х70 см',
                                price: '3300р',
                                priceAddition: '4460р'
                            },
                            {
                                subtitle: '60х60 см',
                                price: '3550р',
                                priceAddition: '4570р'
                            },
                            {
                                subtitle: '60х80 см',
                                price: '4450р',
                                priceAddition: '5630р'
                            },
                            {
                                subtitle: '70х90 см',
                                price: '5750р',
                                priceAddition: '7050р'
                            },
                            {
                                subtitle: '70х100 см',
                                price: '6350р',
                                priceAddition: '7750р'
                            },
                            {
                                subtitle: '100х100 см',
                                price: '8450р',
                                priceAddition: '10650р'
                            }
                        ]
                    }
                ],
                isFullWidth: true,
            },
            {
                name: 'Печать на пенокартоне',
                products: [
                    {
                        titleFirst: 'Размер',
                        titleSecond: 'Без рамки',
                        titleThird: 'С рамкой',
                        options: [
                            {
                                subtitle: '30х40 см',
                                price: '1400р',
                                priceAddition: '2380р'
                            },
                            {
                                subtitle: '40х40 см',
                                price: '1550р',
                                priceAddition: '2640р'
                            },
                            {
                                subtitle: '40х50 см',
                                price: '1600р',
                                priceAddition: '2720р'
                            },
                            {
                                subtitle: '40х60 см',
                                price: '1750р',
                                priceAddition: '2975р'
                            },
                            {
                                subtitle: '50х60 см',
                                price: '2100р',
                                priceAddition: '3570р'
                            },
                            {
                                subtitle: '60х80 см',
                                price: '2200р',
                                priceAddition: '3740р'
                            },
                            {
                                subtitle: '80х100см',
                                price: '4200р',
                                priceAddition: '7140р'
                            },
                            {
                                subtitle: '100х100 см',
                                price: '4300р',
                                priceAddition: '7310р'
                            },
                        ]
                    }
                ],
                isFullWidth: true,
            },
        ],
    },
    {
        id: 2,
        services: [
            {
                name: 'Фотопечать на матовой или глянцевой фотобумаге',
                products: [
                    {
                        title: '7,5х10',
                        price: '12р',
                        isBold: true
                    },
                    {
                        title: '10х15',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '20р'
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
                                        price: '14р'
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
                                price: '30р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '25р'
                                    },
                                    {
                                        quantity: 'от 50 шт.',
                                        price: '20р'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '15х21 (с полями 3мм)',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '40р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '30р'
                                    },
                                    {
                                        quantity: 'от 30 шт.',
                                        price: '25р'
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
                                price: '100р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '80р'
                                    },
                                    {
                                        quantity: 'от 20 шт.',
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
                                price: '180р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 5 шт.',
                                        price: '100р'
                                    },
                                ]
                            }
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
                                price: '24р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '20р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '16р'
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
                                price: '140р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: [
                                    {
                                        quantity: 'от 10 шт.',
                                        price: '100р'
                                    },
                                    {
                                        quantity: 'от 20 шт.',
                                        price: '85р'
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
                        price: '150р'
                    }
                ],
                sideImages: [Polaroid_4],
            },
            {
                name: 'Широкоформатная фотопечать (глянцевая, матовая бумага)',
                products: [
                    {
                        title: 'A2',
                        price: '840р'
                    },
                    {
                        title: 'A1',
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
                price: 'от 300р',
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
                        titleFirst: 'Размер',
                        titleSecond: 'Без натяжки',
                        titleThird: 'С натяжкой',
                        options: [
                            {
                                subtitle: '30х40 см',
                                price: '2230р',
                                priceAddition: '3230р'
                            },
                            {
                                subtitle: '40х40 см',
                                price: '2330р',
                                priceAddition: '3470р'
                            },
                            {
                                subtitle: '40х50 см',
                                price: '2500р',
                                priceAddition: '3580р'
                            },
                            {
                                subtitle: '40х60 см',
                                price: '2650р',
                                priceAddition: '3720р'
                            },
                            {
                                subtitle: '40х90 см',
                                price: '2700р',
                                priceAddition: '3550р'
                            },
                            {
                                subtitle: '50х50 см',
                                price: '2600р',
                                priceAddition: '3630р'
                            },
                            {
                                subtitle: '50х60 см',
                                price: '2950р',
                                priceAddition: '3970р'
                            },
                            {
                                subtitle: '50х70 см',
                                price: '3300р',
                                priceAddition: '4460р'
                            },
                            {
                                subtitle: '60х60 см',
                                price: '3550р',
                                priceAddition: '4570р'
                            },
                            {
                                subtitle: '60х80 см',
                                price: '4450р',
                                priceAddition: '5630р'
                            },
                            {
                                subtitle: '70х90 см',
                                price: '5750р',
                                priceAddition: '7050р'
                            },
                            {
                                subtitle: '70х100 см',
                                price: '6350р',
                                priceAddition: '7750р'
                            },
                            {
                                subtitle: '100х100 см',
                                price: '8450р',
                                priceAddition: '10650р'
                            }
                        ]
                    }
                ],
                isFullWidth: true,
            },
            {
                name: 'Печать на пенокартоне',
                products: [
                    {
                        titleFirst: 'Размер',
                        titleSecond: 'Без рамки',
                        titleThird: 'С рамкой',
                        options: [
                            {
                                subtitle: '30х40 см',
                                price: '1400р',
                                priceAddition: '2380р'
                            },
                            {
                                subtitle: '40х40 см',
                                price: '1550р',
                                priceAddition: '2640р'
                            },
                            {
                                subtitle: '40х50 см',
                                price: '1600р',
                                priceAddition: '2720р'
                            },
                            {
                                subtitle: '40х60 см',
                                price: '1750р',
                                priceAddition: '2975р'
                            },
                            {
                                subtitle: '50х60 см',
                                price: '2100р',
                                priceAddition: '3570р'
                            },
                            {
                                subtitle: '60х80 см',
                                price: '2200р',
                                priceAddition: '3740р'
                            },
                            {
                                subtitle: '80х100см',
                                price: '4200р',
                                priceAddition: '7140р'
                            },
                            {
                                subtitle: '100х100 см',
                                price: '4300р',
                                priceAddition: '7310р'
                            },
                        ]
                    }
                ],
                isFullWidth: true,
            },
            // Другие товары и услуги
        ],
    },
];

export default photoServicesList;