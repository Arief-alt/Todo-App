// @ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { NavItems } from "components";

const MobileSidebar = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle();
    }

    return (
    <div className="gap-5 px-6 py-6 border-b border-gray-100 lg:hidden">
        <header className="w-full flex justify-between items-center">
            <h1 className="text-green-600 font-bold text-3xl">
                TaskFlow
            </h1>

            <button onClick={toggleSidebar}>
                <img
                    src="/assets/icons/menu.png"
                    alt="menu"
                    className="size-6"
                />
            </button>
        </header>

        <SidebarComponent
            width={270}
            ref={(Sidebar) => sidebar = Sidebar}
            className="hidden-initially"
            created={() => {
                sidebar.hide();
                sidebar.element.classList.remove("hidden-initially");
            }}
            closeOnDocumentClick={true}
            showBackdrop={true}
            type="over"
        >
            <NavItems handleClick={toggleSidebar}/>
        </SidebarComponent>
    </div>
  )
}

export default MobileSidebar