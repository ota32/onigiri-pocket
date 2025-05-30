import {Outlet} from 'react-router'
import {SidebarComponent} from '@syncfusion/ej2-react-navigations'

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      MobileSidebar
      <aside className="w-full max-w-[270px] hidden lg:block">
        Sidebar
      </aside>
      
    <aside className="children">
        <Outlet />
      </aside>
      </div>
  )
}

export default AdminLayout