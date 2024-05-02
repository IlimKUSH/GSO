import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            <title>ГСО - Государственная Страховая Организация</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
            <body className='theme-vankine scrollbarcolor'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
