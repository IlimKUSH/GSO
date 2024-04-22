import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Analysis1 from "@/components/sections/Analysis1"
import Blog2 from "@/components/sections/Blog2"
import Content1 from "@/components/sections/Content1"
import Content2 from "@/components/sections/Content2"
import Content3 from "@/components/sections/Content3"
import Form2 from "@/components/sections/Form2"
import Service3 from "@/components/sections/Service3"
import Service4 from "@/components/sections/Service4"
import Slider2 from "@/components/sections/Slider2"
import Team1 from "@/components/sections/Team1"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Slider2 />
                <Service3 />
                <About2 />
                <Service4 />
                <Content1 />
                <Form2 />
                <Analysis1 />
                <Team1 />
                <Content2 />
                <Blog2 />
                <Content3 />
            </Layout>
        </>
    )
}