import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Blog3 from "@/components/sections/Blog3"
import Blog7 from "@/components/sections/Blog7"
import Client2 from "@/components/sections/Client2"
import Content4 from "@/components/sections/Content4"
import Cta1 from "@/components/sections/Cta1"
import Offer1 from "@/components/sections/Offer1"
import Process2 from "@/components/sections/Process2"
import Service5 from "@/components/sections/Service5"
import Slider3 from "@/components/sections/Slider3"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} pageCls="s_color_three pd_left_100">
                <Slider3 />
                <About3 />
                <Offer1 />
                <Service5 />
                <Cta1 />
                <Process2 />
                <Content4 />
                <Client2 />
                <div className="divider" />
                <Testimonial2 />
                <Blog3 />
                <Blog7 />
            </Layout>
        </>
    )
}