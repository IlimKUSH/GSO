import Layout from "@/components/layout/Layout"
import Blog6 from "@/components/sections/Blog6"
import Client5 from "@/components/sections/Client5"
import Content7 from "@/components/sections/Content7"
import Content8 from "@/components/sections/Content8"
import Form5 from "@/components/sections/Form5"
import Funfacts4 from "@/components/sections/Funfacts4"
import Portfolio1 from "@/components/sections/Portfolio1"
import Service9 from "@/components/sections/Service9"
import Slider5 from "@/components/sections/Slider5"
import Testimonial5 from "@/components/sections/Testimonial5"
export default function Home6() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Slider5 />
                <Service9 />
                <Content7 />
                <Content8 />
                <Form5 />
                <Funfacts4 />
                <Portfolio1 />
                <Client5 />
                <div className="divider" />
                <Testimonial5 />
                <Blog6 />
            </Layout>
        </>
    )
}