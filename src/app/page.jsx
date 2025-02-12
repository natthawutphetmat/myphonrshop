import React from 'react'
import Pages from './components/Pages';
import Sliders from './components/Sliders';
import Item from './components/Item';
import Header from './components/Header';

import Videos from './components/Videos';


export default function page() {

  return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด PG-V9 PRO </title>
        <meta name="description" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD"/>
        <meta name="keywords" content="มือถือ, สมาร์ทโฟน, ร้านขายมือถือ, ราคามือถือ, สั่งซื้อมือถือออนไลน์, ผ่อนมือถือ"/>
        <meta property="og:title" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด" />
        <meta property="og:description" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:height" content="2000"/>
        <meta property="og:image:width" content="2000"/>
        <meta property="og:image" content="https://www.mypgphone.com/img/phone-1.jpg"/>

      

    <Header/>
    <Videos/>
    <Pages/>
    <Sliders/>
    <Item/>
 
    
    </>
  )
}
