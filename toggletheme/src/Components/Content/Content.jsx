import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/Context'

const contentContainerStyle = {
    light : {
        backgroundColor : "#fff",
        color : "grey",
        fontSize : "20px",
        padding : "20px"
    },
    dark : {
        backgroundColor : "royalblue",
        color : "#fff",
        fontSize : "20px",
        padding : "20px"
    }
}

export const Content = () => {
    const [state, toggleState] = useContext(ThemeContext);

    return (
        <div style={contentContainerStyle[state]} >
            Toggle Theme Application lets you switch between the color profiles. The logic is shared globally by using ContextAPI.
        </div>
    )
}
