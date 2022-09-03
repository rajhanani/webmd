import React from 'react'
import './Contributors.css'

export const Contributors = () => {
  return (
    <div>
<div class="main_card">
    <h1>Blogs: Patient Contributors</h1>
        <div class="cards">

     <div class="card_1">   
<div class="card_img">
  <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/biographies/600x600_michele_jordan.jpg"></img>
</div>

<div className='card_name'>
    <h3>Michele Jordan</h3>
    <p>Diagnosed since 1992</p>
</div>

<div class="card_title">
    <h3>Migraines Don’t See Color, but the Health Care World Seems to ....</h3>
    <i class="fa-solid fa-arrow-right"></i>
</div>

</div>
{/* ...............  card-2 .............................................. */}

<div class="card_1">   
<div class="card_img">
  <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/biographies/600x600_tammy_hader.jpg"></img>
</div>

<div className='card_name'>
    <h3>Tammy Hader</h3>
    <p>Diagnosed since 1986</p>
</div>

<div class="card_title">
    <h3>Managing Your Mental Health With AS</h3>
    <i class="fa-solid fa-arrow-right"></i>
</div>

</div>
{/* .............................. card-3 ................................ */}
<div class="card_1">   
<div class="card_img">
  <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/biographies/600x600_amanda_pieper.jpg"></img>

</div>

<div className='card_name'>
    <h3>Amanda Pieper</h3>
    <p>Diagnosed since 1987</p>
</div>

<div class="card_title">
    <h3>What’s an Asthma Flare-Up and How Does it Feel?</h3>
    <i class="fa-solid fa-arrow-right"></i>
</div>

</div>

</div>

</div>

    </div>
  )
}
