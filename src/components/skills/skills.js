import './styles.css'

function Skills() {
    return(
        <div id='skills-container'>
            <h1 id='skills-title'>Habilidades</h1>
            <br />
            <h3 id='skills-list'>Lenguajes de programación</h3>
            <ul id='skills-items'>
                <li id='skills-item'>Javascript</li>
                <li id='skills-item'>Python</li>
                <li id='skills-item'>Java</li>
            </ul>
            <br />
            <h3 id='skills-list'>Frameworks y Librerias</h3>
            <ul id='skills-items'>
                <li id='skills-item'>ReactJS</li>
                <li id='skills-item'>VueJS</li>
                <li id='skills-item'>Boostrap</li>
            </ul>
            <br />
            <h3 id='skills-list'>Software y Herramientas</h3>
            <ul id='skills-items'>
                <li id='skills-item'>Visual Studio Code</li>
                <li id='skills-item'>Adobe Photoshop</li>
                <li id='skills-item'>Adobe Illustrator</li>
                <li id='skills-item'>GIMP</li>
                <li id='skills-item'>Inkscape</li>
            </ul>
        </div>
    );
}

export default Skills;