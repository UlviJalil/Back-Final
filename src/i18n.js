import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "browse categories": "Browse categories",
                "home": "Home",
                "shop": "Shop",
                "product": "Product",
                "pages": "Pages",
                "blogs": "Blogs",
                "buy alukas!": "Buy Alukas!",
                "our stores": "Our Stores",
                "search products": "Search Products",
                "(+800) 1234 56": "(+800) 1234 56",
                "news": "News"
               
            }
        },
        az: {
            translation: {
                "browse categories": "Kateqoriyalara baxın",
                "home": "Ana Səhifə",
                "shop": "Mağaza",
                "product": "Məhsullar",
                "pages": "Səhifələr",
                "blogs": "Kataloq",
                "buy alukas!": "Alukas al",
                "our stores": "Bizim Mağazalar",
                "search products": "Məhsul Axtar",
                "(+800) 1234 56": "(+994) 99 700 07 31",
                "news": "Yenilər"
               
            }
        },
        ru: {
            translation: {
                "browse categories": "Просмотреть категории",
                "home": "Дом",
                "shop": "магазины",
                "product": "Продукт",
                "pages": "Страницы",
                "blogs": "Блоги",
                "buy alukas!": "Купить Алукас",
                "our stores": "Наши магазины",
                "search products": "Поиск продуктов ",
                "news": "Новости"
            }
        }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;
