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
      <PersonalProjects/>
      <FreelanceProjects/>
    </div>
  )
}

export default page