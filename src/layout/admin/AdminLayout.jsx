import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const AdminLayout = () => {
   return (
      <>
         <Header
            title="Тесттин"
            endpoint="/admin/test"
            resultEndpoint="/admin/submit-result"
         />
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default AdminLayout
