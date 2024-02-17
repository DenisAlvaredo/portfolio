import './styles.css'
import profilePicture from '../icons/photo2.png'

function Me() {
    return(
        <>
            <div id='me-container'>
                <h1 id='me-name'>Denis Joaquín Alvaredo Gavilán</h1>
                <p id='me-info'>En camino a ser Desarrollador Web Profesional</p>
                <h2 id='me-welcome'>Bienvenido a mi portfolio</h2>
                <br />
                <p id='me-info'>Si quieres ponerte en contacto conmigo:</p>
                <p id='me-info'>denis.j.alvaredo@gmail.com</p>
                <button id='me-button'>Descarga mi CV</button>
            </div>
            <img src={profilePicture} id='me-photo'/>
        </>
    );
}

export default Me;