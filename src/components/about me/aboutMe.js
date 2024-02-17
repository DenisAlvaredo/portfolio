import './styles.css'

function AboutMe() {
    return(
        <div id="aboutMe-container">
            <h1 id="aboutMe-title">Sobre mí</h1>
            <br />
            <p id="aboutMe-info">
                Empecé a estudiar programación en 2020, en epoca de pandemia. 
                He empezado estudiando en el Informatorio, un programa creado para la capacitación, 
                formación y especialización en la industria del software.
            </p>
            <p id="aboutMe-info">
                En dicha capacitación llegué a programar en lenguajes como Java, Python, 
                Javascript en Node.js, creando proyectos en HTML5 y CSS3 utilizando ReactJS, 
                y utilizando MySQL para poder conetcar a una base de datos.
            </p>
            <br />
            <h3 id="aboutMe-footer">Actualmente estudio de manera autodidacta y estoy en busqueda de ampliar mi campo laboral en el mundo del Desarrollo Web.</h3>
        </div>
    );
}

export default AboutMe;