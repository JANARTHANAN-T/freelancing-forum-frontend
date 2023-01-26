import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';
const ProgressProjects = () => {
  const project = useSelector((state) => (state.projectReducer));
  const [projects, setProjects] = useState(null);
  const status = ['created', 'pending-user', 'pending-admin', 'completed']
  const getData = () => {
    const data = project.data.filter(p => p.project_status === 'assigned' || p.project_status === 'partial' || p.project_status === 'testing')
    setProjects([...data])
  }
  useEffect(() => {
    if (project && project.data != null)
      getData();
  }, [project])
  if (projects == null) {
    return <h1>Loading...</h1>
  }
  /*
  title
  client
  freelancing
  current status
  end date
   */
  return (
    <div>
      <div className='container mt-5 text-center'>
        <table class="table table-hover table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Client</th>
              <th scope="col">Freelancer</th>
              <th scope="col">Current Status</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects == null || projects.length == 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No Projects is On Progress </td>
              </tr> : 
              projects.map((p, i) => (
                <tr key={p._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{p.title}</td>
                  <td>{p.createdBy.first_name} {p.createdBy.last_name}</td>
                  <td>{p.developer.first_name} {p.developer.last_name}</td>
                  <td>{p.project_status}</td>
                  <td>{moment(p.end_date).calendar()}</td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ProgressProjects