import React from 'react';
import Resite from "@/components/resite/Resite";

export default function ResitePage() {
  return (
    <Resite />
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: {
        ...(await import(`public/locales/${context.locale}/common.json`)).default,
      },
    },
  };
}
