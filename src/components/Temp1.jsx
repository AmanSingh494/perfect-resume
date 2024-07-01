import React from 'react'
import '../Temp1.css'
import styled from 'styled-components'

// Function to map and render education items as filled in by the user
const mapEdu = (arr) => {
  // Early return if the first item is empty or any property is empty
  if (
    !arr.length ||
    arr.some((item) => Object.values(item).some((value) => value === ''))
  ) {
    return null
  }

  return (
    <div className='education-section-tempOne'>
      <p className='font-medium-tempOne titillium-web-semibold-tempOne'>
        Education
      </p>
      <div className='education-tempOne'>
        <div className='education-list-tempOne font-bold-tempOne'>
          <div className='education-item-tempOne'>
            <p className='font-small-tempOne'>Course / Examination</p>
          </div>
          <div className='education-item-tempOne'>
            <p className='font-small-tempOne'>Institution</p>
          </div>
          <div className='education-item-tempOne'>
            <p className='font-small-tempOne'>Year of passing</p>
          </div>
          <div className='education-item-tempOne'>
            <p className='font-small-tempOne'>Performance</p>
          </div>
        </div>
        {arr.map((item, index) => (
          <div className='education-list-tempOne' key={index}>
            <div className='education-item-tempOne'>
              <p className='font-ex-small-tempOne'>{item.course}</p>
            </div>
            <div className='education-item-tempOne'>
              <p className='font-ex-small-tempOne'>{item.institution}</p>
            </div>
            <div className='education-item-tempOne'>
              <p className='font-ex-small-tempOne'>{item.year}</p>
            </div>
            <div className='education-item-tempOne'>
              <p className='font-ex-small-tempOne'>{item.marks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapCourse = (arr) => {
  if (
    !arr.length ||
    arr.some((item) => Object.values(item).some((value) => value === ''))
  ) {
    return null
  }
  return (
    <div className='courses-tempOne'>
      <p className='font-medium-tempOne titillium-web-semibold-tempOne'>
        Additional Qualifications and Courses
      </p>
      <div className='black-div-tempOne'></div>
      <div className='all-lists-tempOne font-small-tempOne'>
        {arr.map((item, index) => (
          <div className='list-tempOne' key={index}>
            <div className='list-heading-tempOne titillium-web-semibold-tempOne'>
              <li>{item.course}</li>
              <p>{item.duration}</p>
            </div>
            <div className='indented-list-tempOne'>
              <li>{item.exp}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Function to map and render work experience
const mapWork = (arr, section) => {
  if (
    !arr.length ||
    arr.some((item) => Object.values(item).some((value) => value === ''))
  ) {
    return null
  }
  return (
    <div className='work-tempOne'>
      <p class='font-medium-tempOne titillium-web-semibold-tempOne'>
        {' '}
        {section}
      </p>
      <div className='black-div-tempOne'></div>
      <div className='all-lists-tempOne font-small-tempOne'>
        {arr.map((item, index) => (
          <div className='list-tempOne' key={index}>
            <div className='list-heading-tempOne titillium-web-semibold-tempOne'>
              <li>{item.company}</li>
              <p>
                {item.start} - {item.end}
              </p>
            </div>
            <div className='indented-list-tempOne'>
              <li>Worked as {item.position}</li>
              <li>{item.exp}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Function to map and render achievements
const mapAchievements = (arr) => {
  if (
    !arr.length ||
    arr.some((item) => Object.values(item).some((value) => value === ''))
  ) {
    return null
  }
  return (
    <div className='achievements-tempOne'>
      <p className='font-medium-tempOne titillium-web-semibold-tempOne'>
        Awards / Achievements
      </p>
      <div className='black-div-tempOne'></div>
      <div className='all-lists-tempOne font-small-tempOne'>
        {arr.map((item, index) => (
          <div className='list-tempOne' key={index}>
            <div className='list-heading-tempOne'>
              <li>
                <span className='titillium-web-semibold-tempOne'>
                  {item.name} position
                </span>{' '}
                at {item.event}
                organised by {item.organiser}
              </li>
              <p className='titillium-web-semibold-tempOne'>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Function to map and render skills
const mapSkill = (arr) => {
  if (
    !arr.length ||
    arr.some((item) => Object.values(item).some((value) => value === ''))
  ) {
    return null
  }
  return (
    <div className='skills-tempOne'>
      <p className='font-medium-tempOne titillium-web-semibold-tempOne'>
        Skills
      </p>
      <div className='black-div-tempOne'></div>
      <div className='all-lists-tempOne font-small-tempOne'>
        <div className='list-tempOne'>
          {arr.map((item, index) => (
            <li key={index}>
              <span className='titillium-web-semibold-tempOne'>
                {item.skill}
              </span>
              <span> - {item.level}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

// Styled main container
const MainDiv = styled.main``

// Main component
const Temp1 = ({ formData }) => {
  const { personalDetails, achievements, edu, skill, projects, work, course } =
    formData
  const { personName, email, phone, address, dob, about, linktree } =
    personalDetails[0]
  return (
    <MainDiv>
      <div className='main-tempOne'>
        <div className='header-tempOne'>
          <div>
            <p className='titillium-web-semibold-tempOne font-large-tempOne'>
              {personName}
            </p>
          </div>
          <div className='header-details-tempOne font-small-tempOne'>
            <p>
              <span className='font-bold-tempOne'>DOB:</span> {dob}
            </p>{' '}
            |
            <p>
              <span className='font-bold-tempOne'>Email:</span>
              <a href={`mailto:${email}`}>{email}</a>
            </p>{' '}
            |
            <p>
              <span className='font-bold-tempOne'>Phone:</span> {phone}
            </p>
            |<a href={linktree}>My LinkTree</a>
          </div>
        </div>
        <div className='about-tempOne'>
          <p className='font-small-tempOne'>{about}</p>
        </div>
        {mapEdu(edu)}
        {mapWork(work, 'Work Experience')}
        {mapWork(projects, 'Projects / Internships')}
        {mapAchievements(achievements)}
        {mapSkill(skill)}
        {mapCourse(course)}
        <div className='black-div-tempOne'></div>
      </div>
    </MainDiv>
  )
}

export default Temp1
