import {Outlet} from 'react-router'
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from 'components';

const Layout = () => {
    return (
        <div className="admin-layout">
            <MobileSidebar />

            <aside className="hidden lg:block w-full max-w-[270px]">
                <SidebarComponent
                    width={270}
                    enableGestures={false}
                >
                    <NavItems />
                </SidebarComponent>
            </aside>

            <aside className="w-full h-full pt-5 lg:px-10 lg:pt-10">
                <Outlet />
            </aside>
        </div>
    )
}
export default Layout
