import Layout from "@/components/layout/Layout";
import Slider3 from "@/components/sections/Slider3";
import About3 from "@/components/sections/About3";
import Offer1 from "@/components/sections/Offer1";
import Service5 from "@/components/sections/Service5";
import Cta1 from "@/components/sections/Cta1";
import Process2 from "@/components/sections/Process2";
import Content4 from "@/components/sections/Content4";
import Client2 from "@/components/sections/Client2";
import Testimonial2 from "@/components/sections/Testimonial2";
import Blog3 from "@/components/sections/Blog3";
import Blog7 from "@/components/sections/Blog7";
import { useState } from "react";
import Resite from "@/components/resite/Resite";
export default function Home1() {
  const [view, setView] = useState(false);

  return (
    <>
      {view ? (
        <Layout headerStyle={3} footerStyle={3} pageCls="s_color_three">
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
      ) : (
        <Resite />
      )}
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: {
        ...(await import(`public/locales/${context.locale}/common.json`))
          .default,
      },
    },
  };
}
