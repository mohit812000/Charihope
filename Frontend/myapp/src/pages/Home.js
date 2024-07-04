import React, { useEffect } from 'react'
import HeroSection from "../components/home/HeroSection"
import HomeSection2 from "../components/common/HomeSection2"
import AboutUs from "../components/common/AboutUs"
import Compaign from "../components/home/Compaign"
import NumberCounters from "../components/common/NumberCounters"
import Volunteers from '../components/home/Volunteers'
import Map from "../components/home/Map"
import BecomeVolunteer from '../components/home/BecomeVolunteer'
import LatestNews from '../components/home/LatestNews'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()


  return (
    <div>
        <HeroSection/>
        <HomeSection2/>
        <AboutUs/>
        <Compaign/>
        <NumberCounters/>
        <Volunteers/>
        <Map/>
        <LatestNews/>
        <BecomeVolunteer/>

    </div>
  )
}

export default Home