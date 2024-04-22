import Link from "next/link"
import {useTranslations} from "next-intl";

export default function NavbarNav() {
    const t = useTranslations()

    return (
        <>
            <ul className="navbar_nav">
                <li className="menu-item nav-item menu-item-has-children dropdown mennucolumn_full-six">
                    <Link href="/" className="nav_link">
                        <span className="text-link"> {t("About us")} </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Предложения
                        </span>
                    </Link>
                </li>
                <li className="menu-item menu-item-has-children dropdown  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Сервисы
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Портфолио
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_two   nav-item">
                    <Link href="/blog" className="nav_link">
                        <span className="text-link">
                            Наши клиенты
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="/shop" className="nav_link">
                        <span className="text-link">
                            Новости
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
