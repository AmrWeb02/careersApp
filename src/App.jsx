import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'




// Layouts
import MainLayout from './layouts/MainLayout.jsx'
// Pages
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import NotFound from './pages/NotFound.jsx'
import JobPage from './pages/JobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'
import EditJobPage from './pages/EditJobPage.jsx'

// Loaders
import { jobLoader } from './pages/JobPage.jsx'


function App() {
  // Add Job
  const addJob = async (newJob) =>{
    const res = await fetch('http://localhost:4000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }
  // Delete Job
  const deleteJob = async (id) =>{
    const res = await fetch(`http://localhost:4000/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  // Update Job
  const updateJob = async (job) =>{
    const res = await fetch(`http://localhost:4000/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>}  loader={jobLoader} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>}  loader={jobLoader} />
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ), { basename: '/careersApp' })
  return (
  <>

    <RouterProvider router={router}/>
    </>
  )
}

export default App
