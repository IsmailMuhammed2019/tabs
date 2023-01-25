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


 return (
    <h4>Old Notes</h4>
  )
}

export default App
