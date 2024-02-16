import './styles.css'
import ghIcon from './github-icon.svg'
import igIcon from './instagram-icon.svg'
import linkedinIcon from './linkedin-icon.svg'
import mailIcon from './mail-icon.svg'
import resumeIcon from './resume-icon.svg'

function Icons() {
    return(
        <div id='icons-container'>
            <img src={ghIcon} id='icon'/>
            <img src={igIcon} id='icon'/>
            <img src={linkedinIcon} id='icon'/>
            <img src={mailIcon} id='icon'/>
            <img src={resumeIcon} id='icon'/>
        </div>
    );
}

export default Icons;