import React from 'react'
import "./Advertisement.css"

export const Advertisement = () => {
    return (
        <>
            <div />
            <div class="webmd_main_care">

                <div class="webmd_main">

                    <div class="webmd_1">

                        <div class="new">
                            <label><div>New</div></label>
                        </div>

                        <div class="webmd_logo">
                            <img src="https://images.squarespace-cdn.com/content/v1/5afcea7785ede15039f34aef/1565035644385-5K34EB2TZSP6LPHP7CXT/webMDRx.jpg" alt="" />
                        </div>

                        <div class="care_logo">
                            <h2>Care</h2>
                        </div>

                    </div>

                    <div class="webmd_2">
                        <h3>Find a reputable provider in your area with WebMD Care.</h3>
                    </div>
{/* .................................................. */}


                    <div class="webmd_input">

                        <div>
                            <input type="text" placeholder="Search Doctors,conditions,procedur" />
                        </div>

                        <div class="webmd_input2">
                            <input type="text" placeholder="Vadodara, GJ,390007" />
                            <button type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>

                

                        <div id="input_search">
                            <input type="Serach " placeholder='Find a Doctors' />
                        </div>
                    </div>

                </div>
{/* ................................................................................ */}
                <div class="coldflu">
                    <h1>See <span class="cold">Cold Flu</span><span class="cold"><i class="fa-solid fa-greater-than"></i></span></h1>
                    <h2>Activity In Your Area</h2>
                </div>

            </div>
{/* ............................................................................................. */}
            <div class="main_rx">

                <div class="rx_img">
                    <img src="https://images.squarespace-cdn.com/content/v1/5afcea7785ede15039f34aef/1565035644385-5K34EB2TZSP6LPHP7CXT/webMDRx.jpg" alt="" />
                </div>

                <div class="rx_img1">
                    <h3>Save Up To 80% on prescriptions</h3>
                </div>

                <div class="rx_img2">
                    <input type="text" placeholder="Enter a Drug Name..." />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="rx_img3">
                    <button>Find Lowest Prices</button>
                </div>
            </div>
        </>

    )
}
