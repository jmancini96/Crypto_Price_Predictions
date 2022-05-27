import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import Chart from '../../components/chart/Chart';
import { priceData } from '../../data';
import SmallWidget from '../../components/SmallWidget/SmallWidget.jsx';
import LargeWidget from '../../components/LargeWidget/LargeWidget';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={priceData} title="Price" grid dataKey= "Price"/>
      <div className='homeWidgets'>
        <SmallWidget/>
        <LargeWidget/>
      </div>
    </div>
  )
}
