import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import IndexSectionNavigations2 from '../components/navigations/IndexSectionNavigations2';
import IndexSection__structures3 from '../components/__structures/IndexSection__structures3';
import IndexSectionLogoClouds4 from '../components/logo-clouds/IndexSectionLogoClouds4';
import IndexSection__structures5 from '../components/__structures/IndexSection__structures5';
import IndexSection__structures18 from '../components/__structures/IndexSection__structures18';
import IndexSection__structures17 from '../components/__structures/IndexSection__structures17';
import IndexSection__structures7 from '../components/__structures/IndexSection__structures7';
import IndexSection__structures8 from '../components/__structures/IndexSection__structures8';
import IndexSection__structures9 from '../components/__structures/IndexSection__structures9';
import IndexSection__structures10 from '../components/__structures/IndexSection__structures10';
import IndexSectionTestimonials11 from '../components/testimonials/IndexSectionTestimonials11';
import IndexSectionFaqs12 from '../components/faqs/IndexSectionFaqs12';
import IndexSectionTeam13 from '../components/team/IndexSectionTeam13';
import IndexSectionFooters14 from '../components/footers/IndexSectionFooters14';

const Index: React.FC = () => {
  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src =
      'js/948456.js?v=1776335738';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <Head>
        <title></title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
      </Head>
      <IndexSectionNavigations2 />
      <IndexSection__structures3 />
      <IndexSectionLogoClouds4 />
      <IndexSection__structures5 />
      <IndexSection__structures18 />
      <IndexSection__structures17 />
      <IndexSection__structures7 />
      <IndexSection__structures8 />
      <IndexSection__structures9 />
      <IndexSection__structures10 />
      <IndexSectionTestimonials11 />
      <IndexSectionFaqs12 />
      <IndexSectionTeam13 />
      <IndexSectionFooters14 />
    </>
  );
};

export default Index;

