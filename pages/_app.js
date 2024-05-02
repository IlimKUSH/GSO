import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../public/assets/css/plugins/animate.min.css"
import "../public/assets/css/plugins/bootstrap.min.css"
import "../public/assets/css/plugins/jquery.fancybox.min.css"
import "../public/assets/css/plugins/owl.css"
import "../public/assets/css/plugins/rangeslider.css"
import "../public/assets/css/plugins/select.min.css"
import "../public/assets/css/plugins/slick.css"

import "../public/assets/css/global-settings.css"
import "../public/assets/css/theme.css"

import "../public/assets/css/plugins/flaticon_vankine.css"
import "../public/assets/css/plugins/font-awesome.min.css"
import "../public/assets/css/plugins/uicons-regular-rounded.css"
import "../public/assets/css/plugins/uicons-regular-straight.css"
import {useRouter} from "next/router";
import {NextIntlClientProvider} from "next-intl";

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <NextIntlClientProvider
            locale={router.locale}
            messages={pageProps.messages}
            timeZone="Europe/Vienna"
        >
            <Component {...pageProps} />
        </NextIntlClientProvider>
    )
}

export default MyApp

export async function getStaticProps(context) {
    return {
        props: {
            messages: {
                ...(await import(`public/locales/${context.locale}/common.json`)).default,
            },
        },
    };
}
