import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Lazyimg() {
    const img=[
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (1).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (2).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (3).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (4).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (5).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (6).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (7).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (8).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (9).png'},
        {img:'img/Android-10-Wallpapers/Android-10-Wallpapers (10).png'}
    ]
    const style={
      width:'200px',
      padding:'20px',
      
    }
    // const bg={
      
    //   backgroundImage: 'img/Android-10-Wallpapers/low.png'
    // }
  return (
    <>
  {
    img.map((item)=>{
      return(

        <LazyLoadImage
    alt="hi"
    style={style}
    
    effect="blur"
    src={item.img} />
      )
    })
  }
    </>

  )
}

export default Lazyimg