import { lazy } from 'react'
import Setemail from '../../views/dashboard/Setemail'
import Checkemail from '../../views/dashboard/Checkemail'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))


const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/setemail',
    element: <Setemail />
  },
  {
    path: '/merchant/setemail/checkemail',
    element: <Checkemail />
  }
]

export default Dashboard_Routes