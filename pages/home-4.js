import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Banner1 from "@/components/sections/Banner1"
import Blog4 from "@/components/sections/Blog4"
import Client3 from "@/components/sections/Client3"
import Content5 from "@/components/sections/Content5"
import Form3 from "@/components/sections/Form3"
import Funfacts2 from "@/components/sections/Funfacts2"
import Process3 from "@/components/sections/Process3"
import Service6 from "@/components/sections/Service6"
import Service7 from "@/components/sections/Service7"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <Banner1 />
                <Service6 />
                <About4 />
                <Service7 />
                <Content5 />
                <Process3 />
                <Funfacts2 />
                <Form3 />
                <Testimonial3 />
                <Client3 />
                <div className="divider" />
                <Blog4 />
            </Layout>
        </>
    )
}