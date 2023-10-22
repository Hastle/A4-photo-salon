import Polaroid_1 from "../assets/images/photo-services/polaroid-1.png";
import Polaroid_2 from "../assets/images/photo-services/polaroid-2.png";
import Polaroid_3 from "../assets/images/photo-services/polaroid-3.png";
import Polaroid_4 from "../assets/images/photo-services/polaroid-4.png";

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
                                        quantity: 'от 10 шт.',
                                        price: '16р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '14р'
                                    }
                                ]
                            }
                        ]
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
                                        price: '25р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '20р'
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
                                        price: '40р'
                                    },
                                    {
                                        quantity: 'от 50 шт.',
                                        price: '35р'
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
                                        price: '50р'
                                    },
                                    {
                                        quantity: 'от 30 шт.',
                                        price: '45р'
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
                                        price: '140р'
                                    },
                                    {
                                        quantity: 'от 20 шт.',
                                        price: '120р'
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
                                        price: '220р'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                images: [Polaroid_1, Polaroid_2, Polaroid_3],
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
                                        price: '30р'
                                    },
                                    {
                                        quantity: 'от 100 шт.',
                                        price: '28р'
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
                                        price: '160р'
                                    },
                                    {
                                        quantity: 'от 20 шт.',
                                        price: '150р'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                images: [Polaroid_4],
            },
            {
                name: 'Полароид',
                products: [
                    {
                        title: '7,5х10',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '30р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: '40р'
                            }
                        ]
                    },
                    {
                        title: '9х11',
                        options: [
                            {
                                subtitle: 'Срочно',
                                price: '40р'
                            },
                            {
                                subtitle: 'Не срочно',
                                price: '50р'
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Широкоформатная фотопечать (глянцевая, матовая бумага)',
                products: [
                    {
                        title: 'А2',
                        options: [
                            {
                                subtitle: 'Без натяжки',
                                price: '840р'
                            },
                            {
                                subtitle: 'С натяжкой',
                                price: '1220р'
                            }
                        ]
                    },
                    {
                        title: 'А1',
                        options: [
                            {
                                subtitle: 'Без натяжки',
                                price: '840р'
                            },
                            {
                                subtitle: 'С натяжкой',
                                price: '1220р'
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Фото на документы',
                products: [
                    {
                        title: 'Фото на документы',
                        options: [
                            {
                                subtitle: 'Дополнительный блок фотографий',
                                price: '100р'
                            },
                            {
                                subtitle: 'Подстановка формы и знаков отличия',
                                price: '150р'
                            },
                            {
                                subtitle: 'Фото Green Card',
                                price: '400р'
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Реставрация, дизайн и ретушь',
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
                ]
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
                    // Добавьте остальные размеры и опции
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