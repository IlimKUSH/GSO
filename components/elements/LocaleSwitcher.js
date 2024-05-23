import { useRouter } from "next/router";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const locales = router.locales ?? [];

  const handleLocaleSwitch = (locale) => {
    const scrollPosition = window.scrollX;
    router.push(router.pathname, undefined, { locale, scroll: scrollPosition });
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
