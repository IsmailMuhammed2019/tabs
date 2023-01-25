import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)
  const [jobs, setJobs] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const jobs = await response.json()
      setJobs(jobs)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
}, [])

  if(loading) {
    return (
      <section className='section'>
        <h2>Loading</h2>
      </section>
    )
  }
const {id, title, dates, duties, company} = jobs[value]

 return (
   <section className='section'>
     <div className='title'>
       <h2>Experience</h2>
       <div className='underline'></div>
     </div>
     <div className='jobs-center'>
       <div className='btn-container'>
        {jobs.map((item, index) =>{
          return (
            <button key={index} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
          )
        })}
       </div>
       <article className='job-info' key={id}>
         <h3>{title}</h3>
         <h4>{company}</h4>
         <p className='job-date'>{dates}</p>
         {duties.map((duty, index) => {
           return (
             <div className='job-desc'>
               <FaAngleDoubleRight className='job-icon' />
               <p key={index}>{duty}</p>
             </div>
           )
         })}
       </article>
     </div>
   </section>
 )
}

export default App
