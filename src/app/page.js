import CoffeeTracker from '@/components/CoffeeTracker'
import HeroSection from '@/components/HeroSection'
import PersonalProjects from '@/components/Projects'
import SkillsSections from '@/components/SkillsSections'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <SkillsSections/>
      <CoffeeTracker/>
      <PersonalProjects/>
    </div>
  )
}

export default page