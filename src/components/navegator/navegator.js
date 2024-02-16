import "./styles.css"
import List from "../list/list";
import Icons from "../icons/icons";

function Navegator() {
    return(
        <div id="nav-container">
            <List />
            <hr id="separator"></hr>
            <Icons />
        </div>
    );
}

export default Navegator;