import React from 'react'
import '../../styles/Temp2.css'

const mapEdu = (arr) => {
  // Early return if the first item is empty or any property is empty
  if (!arr.length || Object.values(arr[0])[0] === '') {
    return null
  }

  return (
    <div className='education-section-tempTwo cont-tempTwo'>
      <div className='heading-tempTwo font-medium-tempTwo font-bold-tempTwo'>
        Education
      </div>
      <div className='line-div-tempTwo'></div>

      {arr.map((item, index) => (
        <div className='edu-tempTwo box-tempTwo' key={index}>
          <div className='degree-year-tempTwo box-top-tempTwo box-item-tempTwo'>
            <div className='degree-tempTwo font-bold-tempTwo'>
              {item.course}
            </div>
            <div className='year-tempTwo'>{item.year}</div>
          </div>
          <div className='institution-tempTwo box-item-tempTwo font-bold-tempTwo'>
            {item.institution}
          </div>
          <div className='grades-tempTwo box-item-tempTwo'>{item.marks}</div>
        </div>
      ))}
    </div>
  )
}

const mapWork = (arr, section) => {
  if (!arr.length || Object.values(arr[0])[0] === '') {
    return null
  }
  return (
    <div className='work-section-tempTwo'>
      <div className='heading-tempTwo font-medium-tempTwo font-bold-tempTwo'>
        {section}
      </div>
      <div className='line-div-tempTwo'></div>

      {arr.map((item, index) => (
        <div className='work-tempTwo box-tempTwo' key={index}>
          <div className='work-year-tempTwo box-top-tempTwo box-item-tempTwo'>
            <div className='work-tempTwo font-bold-tempTwo'>
              {item.position}, {item.company}
            </div>
            <div className='year-tempTwo'>
              {item.start} - {item.end}
            </div>
          </div>
          <div className='box-tempTwo list-tempTwo font-small-tempTwo'>
            {item.exp.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const mapSkill = (arr) => {
  if (!arr.length || Object.values(arr[0])[0] === '') {
    return null
  }
  return (
    <div className='skills-section-tempTwo'>
      <div className='heading-tempTwo font-medium-tempTwo font-bold-tempTwo'>
        Skills
      </div>
      <div className='line-div-tempTwo'></div>

      {arr.map((item, index) => (
        <div className='skills-tempTwo box-top-tempTwo' key={index}>
          <div className='skill-item-tempTwo'> {item.skill}</div>
          <div className='skill-item-tempTwo'> {item.level}</div>
        </div>
      ))}
    </div>
  )
}

const mapAchievements = (arr) => {
  if (!arr.length || Object.values(arr[0])[0] === '') {
    return null
  }
  return (
    <div className='achievements-section-tempTwo'>
      <div className='heading-tempTwo font-medium-tempTwo font-bold-tempTwo'>
        Achievements
      </div>
      <div className='line-div-tempTwo'></div>
      {arr.map((item, index) => (
        <div className='achievements-tempTwo box-tempTwo' key={index}>
          <div className='achievements-year-tempTwo box-top-tempTwo box-item-tempTwo'>
            <div className='achievements-tempTwo font-bold-tempTwo'>
              {item.event}
            </div>

            <div className='year-tempTwo'>{item.year}</div>
          </div>
          <div className='box-tempTwo list-tempTwo'>
            <li className='achievements-tempTwo'>
              <span className='font-bold-tempTwo'>{item.name} position </span>{' '}
              in
              {item.event} at {item.organiser}{' '}
            </li>
          </div>
        </div>
      ))}
    </div>
  )
}

const Temp2 = ({ formData }) => {
  const { personalDetails, achievements, edu, skill, projects, work, course } =
    formData
  const { name, email, phone, address, dob, about, linktree } = personalDetails

  return (
    <div className='main-container-tempTwo'>
      <div className='name-tempTwo font-bold-tempTwo'>{name}</div>
      <div className='big-line-tempTwo'></div>
      <div className='details-section-tempTwo'>
        <div className='left-section-tempTwo'>
          {mapEdu(edu)}
          {mapWork(work, 'Work Experience')}
          {mapWork(projects, 'Projects / Internships')}
          {mapWork(course, 'Additional Courses')}
        </div>
        <div className='right-section-tempTwo font-mid-small-tempTwo'>
          <div className='contacts-section-tempTwo'>
            <div className='heading-tempTwo font-medium-tempTwo font-bold-tempTwo'>
              Contact
            </div>
            <div className='line-div-tempTwo'></div>
            <div className='contacts-tempTwo box-tempTwo'>
              <div className='contact-item-tempTwo'>
                <span className='material-symbols-outlined'>call</span>
                <span>{phone}</span>
              </div>
              <div className='contact-item-tempTwo'>
                <span className='material-symbols-outlined'>mail</span>
                <a href='mailto{{email}}'>{email}</a>
              </div>
              <div className='contact-item-tempTwo'>
                <span className='material-symbols-outlined'>link</span>
                <a href={linktree}>My Linktree</a>
              </div>
            </div>
          </div>
          <div className='about-section-tempTwo'>
            <div className='heading-tempTwo font-medium-tempTwo font-bold-tempTwo'>
              About
            </div>
            <div className='line-div-tempTwo'></div>
            <p>{about}</p>
          </div>
          {mapSkill(skill)}
          {mapAchievements(achievements)}
        </div>
      </div>
    </div>
  )
}

export default Temp2
