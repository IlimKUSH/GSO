import Link from "next/link"
import { useState } from "react"
import {useTranslations} from "next-intl";

export default function Sidebar() {
    const t = useTranslations()

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navbar_nav getmobilemenu">
                <li className="menu-item nav-item menu-item-has-children dropdown mennucolumn_full-six">
                    <Link href="#about" className="nav_link">
                        <span className="text-link">
                            {t("About us")}
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item">
                    <Link href="#offers" className="nav_link">
                        <span className="text-link">
                            {t("Offers")}
                        </span>
                    </Link>
                </li>
                <li className="menu-item menu-item-has-children dropdown  nav-item">
                    <Link href="#services" className="nav_link">
                        <span className="text-link">
                            {t("Services")}
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#process" className="nav_link">
                        <span className="text-link">
                           {t("Working process")}
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_two   nav-item">
                    <Link href="/clients" className="nav_link">
                        <span className="text-link">
                            {t("Our clients")}
                        </span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#news" className="nav_link">
                        <span className="text-link">
                            {t("News")}
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
