const Container1 = `
        <div id="container1" class="expandable-container">
                <h4 class="mb-2">Contenedor 1</h4><br>
                <p>Haz clic aquí para expandir.</p><br>
                <div class="extra-info">
                    <h5>Información Adicional</h5>
                    <p>Contenido del Contenedor 1.</p>
                </div>
        </div>`;

const Container2 = `
        <div id="container2" class="expandable-container">
            <h4 class="mb-2">C</h4>
            <p>Haz clic aquí para expandir.</p>
            <div class="extra-info">
                <h5>Información Adicional</h5>
                <p>Contenido del Contenedor 2.</p>
            </div>
        </div>`;
//Busca el id del contenedor donde se pondra el contenedor
const Contenedor1 = document.getElementById('Contenedor1');
const Contenedor2 = document.getElementById('Contenedor2');

//añade cada contenedor al div correspondiente
Contenedor1.innerHTML = Container1; 
Contenedor2.innerHTML = Container2; 

