import CoffeeTracker from '@/components/CoffeeTracker'
import FreelanceProjects from '@/components/FreelanceProjects'
import HeroSection from '@/components/HeroSection'
import PersonalProjects from '@/components/PersonalProjects'
import SkillsSections from '@/components/SkillsSections'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <SkillsSections/>
      <CoffeeTracker/>
      <PersonalProjects/>
      <FreelanceProjects/>
    </div>
  )
}

export default page