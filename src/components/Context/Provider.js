import { useState } from "react"
import AppContext from "./Context"

const Provider = (props) => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <AppContext.Provider 
            value={{
                mobileMenu,
                setMobileMenu: (state) => setMobileMenu(state)
            }}
        >
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default Provider;