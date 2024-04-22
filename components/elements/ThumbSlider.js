import { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const data = [
    {
        id: 1,
        image: "/assets/images/shop/product-1-min.png",
        bigImage: "/assets/images/shop/product-1-min.png"
    },
    {
        id: 2,
        image: "/assets/images/shop/product-2-min.png",
        bigImage: "/assets/images/shop/product-2-min.png"
    },
    {
        id: 3,
        image: "/assets/images/shop/product-3-min.png",
        bigImage: "/assets/images/shop/product-3-min.png"
    },
    {
        id: 4,
        image: "/assets/images/shop/product-4-min.png",
        bigImage: "/assets/images/shop/product-4-min.png"
    },
    {
        id: 5,
        image: "/assets/images/shop/product-5-min.png",
        bigImage: "/assets/images/shop/product-5-min.png"
    },
    {
        id: 6,
        image: "/assets/images/shop/product-4-min.png",
        bigImage: "/assets/images/shop/product-6-min.png"
    },
]

const ThumbSlider = () => {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider2, slider1])

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
    }

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: "0px",
        arrows: false
    }

    return (
        <>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
            >
                {data.map((item, index) => (
                    <img
                        src={item.bigImage}
                        alt="image"
                        key={index}
                    />
                ))}
            </Slider>

            <div className="mt-5"></div>
            <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
            >
                {data.map((item) => (
                    <div key={item.id}>
                        <img
                            src={item.image}
                            alt=""
                            className="p-2"
                        // style={{
                        //     width: "100%",
                        //     height: 100,
                        //     objectFit: "cover",
                        //     cursor: "pointer"
                        // }}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default ThumbSlider