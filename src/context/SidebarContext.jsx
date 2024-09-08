import { createContext, useState } from "react";
import { useContext } from "react";


const SidebarContext = createContext();

export const useSidebarContext = () => {
    return useContext(SidebarContext)
}

const SidebarProvider = ({ children }) => {
    const [currentTab, setCurrentTab] = useState('dashboard');

    const handleSetTab = (tab) => setCurrentTab(tab);


    let value = {
        currentTab,
        setCurrentTab,
        handleSetTab
    }

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    )
}


export default SidebarProvider
