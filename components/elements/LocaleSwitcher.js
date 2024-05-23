import { useRouter } from "next/router";
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function LocaleSwitcher() {
    const router = useRouter();
    const locale = useLocale();
    const locales = router.locales ?? [];

    const handleLocaleSwitch = async (newLocale) => {
        // Сохранение текущей позиции прокрутки в sessionStorage
        sessionStorage.setItem('scrollPosition', window.scrollY);

        // Переход на новую локаль
        await router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: newLocale });

        // Восстановление позиции прокрутки из sessionStorage
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
            sessionStorage.removeItem('scrollPosition');
        }
    };

    return (
        <div className="language">
            <a className="language-dropdown-active">
                {locale.toUpperCase()} <i className="fi-rs-angle-small-down" />
            </a>
            <ul className="language-dropdown">
                {locales.map((itemLocale) => (
                    <li key={itemLocale} onClick={() => handleLocaleSwitch(itemLocale)}>
                        {itemLocale.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
