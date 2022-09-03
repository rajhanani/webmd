import React from 'react'
import { Nav } from './Nav';
import { Down } from './Down';
import { Expert } from './Expert';
import { Topstories } from './Topstories';
import { Advertisement } from './Advertisement';
import { Trends } from './Trends';
import { Contributors } from './Contributors';
import { Feedback } from './Feedback';
import { Living } from './Living';
import { Footer } from './Footer';
import { Helthaz } from './Helthaz';

export const Home = () => {
  return (
    <div>

    {/* <Nav/> */}
    <Down/>
    <Expert/>
    <Topstories/>
    <Advertisement/>
    <Trends/>
    <Contributors/>
    <Feedback/>
    <Living/>
    <Footer/>
  
    </div>
  )
}
