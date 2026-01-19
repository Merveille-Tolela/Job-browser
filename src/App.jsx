
import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Mainlayout from './layouts/Mainlayout'
import JobsPage  from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => {

  // add new job

  const addJob = async (newJob) =>{
    const res = await fetch ('api/jobs', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    });

    return;

  };

   // delete job

    const deleteJob =  async (id) => {
       const res = await fetch (`api/jobs/${id}`, {
      method: 'DELETE',
    });

    return;

    };

    // Update Job

    const updateJob = async (job) => {
      const res = await fetch (`api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    });


    }

  const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path='/' element ={<Mainlayout />}>
    <Route index element ={<HomePage />} />
    <Route path ='/jobs' element ={<JobsPage />} />
    <Route path ='/add-job' element ={<AddJobPage  addJobSubmit={addJob}/>} />
    <Route path ='/edit-job/:id' element ={<EditJobPage updateJobSubmit ={updateJob} />} loader ={jobLoader} />


    <Route path ='/jobs/:id' element ={<JobPage deleteJob ={deleteJob} />} loader ={jobLoader} />

    <Route path ='*' element ={<NotFoundPage />} />


  </Route>
  )
);
  return <RouterProvider router ={router}  />  /* (
    <>


    <Navbar />
    <Hero title='Test Title' subtitle ='This is the subtitle'/>
    <HomeCards />
    <JobListing />
    <ViewAllJobs /> 
    

   
    </> 
  ) */
}

export default App