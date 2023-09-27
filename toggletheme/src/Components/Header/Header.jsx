import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/Context'


const styles = {

    light : {
    margin : "20px auto",
    border : "none",
    background : "none",
    padding : "10px",
    borderRadius : "10px",
    border : "1px solid grey",
    fontSize : "20px",
    backgroundColor : "#fff",
    color : "blue"
    },

    dark : {
        margin : "20px auto",
        border : "none",
        background : "none",
        padding : "10px",
        borderRadius : "10px",
        fontSize : "20px",
        backgroundColor : "royalblue",
        color : "#fff"
    }
}

export const Header = () => {
    const [state, toggleState] = useContext(ThemeContext);

    return (
        <div>
            <button style={styles[state]} onClick={() => toggleState()}>Toggle Theme</button>
        </div>
    )
}
