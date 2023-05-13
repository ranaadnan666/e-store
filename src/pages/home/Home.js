import React from 'react'
import Slider from '../../component/slider/Slider'
import FlashSale from '../../component/home/flashsale/FlashSale'
import Category from '../../component/category/Category'
import JustFor from '../../component/home/justforyou/JustFor'

function Home() {
  return (
 < div style={{
  background: '#eff0f5',
 }}>
 <Slider/>
 <FlashSale/>
 <Category/>
 <JustFor/>
 </div>
  )
}

export default Home