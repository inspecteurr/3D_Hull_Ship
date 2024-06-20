//import { OrbitControls } from './jsm/OrbitControls.js';
///////////// TAKE JSON DATA /////////////////////////
var JSON_Data = {
    "attributes": {},
    "designState": {
        "calculationParameters": {
            "LWL_design": 126.4,
            "LOA_design": 134,
            "Draft_design": 7.7,
            "Cb_design": 0.626,
            "Depth_1_Deck": 10.55,
            "Breadth_Moulded": 22,
            "speed": "",
            "crew": "",
            "K": "",
            "Co": "",
            "tripDuration": ""
        },
        "objectOverrides": {
            "common": {
                "fullness": ""
            }
        }
    },
    "data": {},
    "structure": {
        "hull": {
            "attributes": {
                "LOA": 36.25,
                "BOA": 9.6,
                "Depth": 6.6,
                "APP": 2,
                "bulb": true,
                "transom": true,
                "cstern": 0,
                "prismaticLengthRatio": 0.6,
                "appendices": {}
            },
            "halfBreadths": {
                "waterlines": [0, 1, 2, 3, 4, 5, 6, 7, 7.65, 10, 12, 14, 16],
                "stations": [-0.59, -0.26, 0, 0.24, 0.52, 0.76, 1, 1.26, 1.52, 1.77, 2.02, 2.28, 2.53, 2.78, 3.04, 3.29, 3.54, 3.8, 4.04, 4.31, 4.55, 4.82, 5.04, 5.32, 5.56, 5.83, 6.06, 6.34, 6.6, 6.84, 7.07, 7.36, 7.58, 7.86, 8.09, 8.38, 8.59, 8.88, 9.1, 9.38, 9.61, 9.9, 10.15, 10.41],
                "table": [
                    [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.92414, 10.54483, 10.21609, 9.50805, 8.77471, 7.51035, 6.22069, 4.07126, null],
                    [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.97471, 10.89885, 10.5954, 10.1908, 9.38161, 8.49655, 7.2069, 5.71494, 3.41379, null],
                    [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11.02529, 10.7977, 10.29195, 9.65977, 8.54713, 7.4092, 5.7908, 4.07126, 1.11264, null],
                    [10.31724, 10.62069, 10.7977, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.84828, 10.51954, 9.73563, 8.82529, 7.38391, 6.1954, 4.34943, 2.6046, null],
                    [null, 2.8, 7, 8.57241, 9.68506, 10.24138, 10.5954, 10.82299, 11.02529, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.87356, 10.64598, 10.08966, 9.4069, 8.11724, 7.10575, 5.48736, 4.29885, 2.27586, null, null],
                    [null, null, 0.12644, 5.33563, 8.44598, 9.53333, 10.1908, 10.54483, 10.82299, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.72184, 10.24138, 9.50805, 8.62299, 7.23218, 6.1954, 4.57701, 3.31264, 1.08736, null, null],
                    [null, null, null, null, 3.23678, 7.0046, 9.0023, 9.78621, 10.31724, 10.67126, 10.87356, 10.97471, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.87356, 10.62069, 10.08966, 9.38161, 8.24368, 7.30805, 5.74023, 4.62759, 3.03448, 1.66897, null, null, null],
                    [null, null, null, null, null, 1.54253, 5.7908, 8.14253, 9.35632, 10.03908, 10.49425, 10.7977, 10.97471, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.82299, 10.44368, 9.91264, 9.02759, 8.11724, 6.85287, 5.76552, 4.22299, 3.13563, 1.44138, null, null, null, null],
                    [null, null, null, null, null, null, null, 4.14713, 7.28276, 8.8, 9.71035, 10.26667, 10.67126, 10.87356, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.87356, 10.64598, 10.29195, 9.63448, 8.90115, 7.76322, 6.62529, 5.28506, 4.07126, 2.70575, 1.84598, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, 3.0092, 5.96782, 8.09195, 9.28046, 10.01379, 10.46897, 10.77241, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10.72184, 10.3931, 9.96322, 9.35632, 8.47126, 7.56092, 6.06897, 4.98161, 3.56552, 2.65517, 1.87126, 1.23908, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, 0.70805, 3.81839, 6.8023, 8.3954, 9.4069, 10.06437, 10.54483, 10.7977, 10.94943, 11, 11, 11, 11, 11, 10.97471, 10.92414, 10.7977, 10.49425, 10.08966, 9.45747, 8.72414, 7.96552, 6.75172, 5.63908, 4.29885, 3.36322, 2.4023, 1.87126, 1.54253, 0.98621, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, 0.68276, 3.74253, 6.34713, 8.09195, 9.28046, 10.01379, 10.46897, 10.67126, 10.82299, 10.82299, 10.82299, 10.77241, 10.57011, 10.34253, 9.91264, 9.33103, 8.54713, 7.68736, 6.62529, 5.71494, 4.47586, 3.61609, 2.65517, 2.09885, 1.74483, 1.56782, 1.3908, 0.78391, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2.2, 5.66437, 7.96552, 9.12874, 9.25517, 9.25517, 8.97701, 8.26897, 7.45977, 6.34713, 5.2092, 4.04598, 2.98391, 2.09885, 1.51724, 1.01149, 0.78391, 0.65747, 0.68276, 0.68276, 0.35402, null, null, null, null, null, null, null]
                ]
            },
            "style": {
                "upperColor": "green",
                "lowerColor": "pink",
                "opacity": 0.6
            },
            "buttockHeights": {}
        },
        "decks": {
            "Deck_A": {
                "affiliations": {
                    "group": "Deck"
                },
                "zFloor": 6.686,
                "thickness": 0.1,
                "xAft": 15.5,
                "xFwd": 35.6,
                "yCentre": 0,
                "breadth": 9.6,
                "density": 7700
            }
        },
        "bulkheads": {
            "AB": {
                "affiliations": {
                    "group": "Bulkheads"
                },
                "xAft": 5,
                "thickness": 0.1,
                "density": 7850
            }
        }
    },
    "baseObjects": [
        {
            "id": "engine_room.stl",
            "affiliations": {
                "group": "Compartment"
            },
            "boxDimensions": {
                "length": 10.0,
                "breadth": 9.6,
                "height": 4.216
            },
            "capabilities": {},
            "file3D": "",
            "baseState": {
                "fullness": 0.5
            },
            "weightInformation": {
                "lightweight": 0,
                "cg": [0, 0, 0]
            }
        }
    ],

    "derivedObjects": [
        {
            "id": "Propulsion room",
            "baseObject": "engine_room.stl",
            "affiliations": {
                "Deck": "",
                "SFI": "109"
            },
            "referenceState": {
                "xCentre": 9.150,
                "yCentre": 0,
                "zBase": 2.385
            },
            "style": {
                "color": "#aabbcc",
                "opacity": 1
            }
        }
    ]
}

var Waterline = JSON_Data["structure"]["hull"]["halfBreadths"]["waterlines"];
var Buttockline = JSON_Data["structure"]["hull"]["halfBreadths"]["table"];
var Stations = JSON_Data["structure"]["hull"]["halfBreadths"]["stations"];


// Center the ship in the middle
const Stations_min = Math.min(...Stations);
var Stations_Sum = 0;

for (let i = 0; i < Stations.length; i++) {
    Stations[i] -= (Stations_min);
    Stations_Sum += Stations[i];
}

const Stations_average = Stations_Sum / (Stations.length)
for (let i = 0; i < Stations.length; i++) {
    Stations[i] -= Stations_average;
}
///

function Center_Data_Table(Table) {
    const max = Math.max(...Table);
    for (let i = 0; i < Table.length; i++) {
        Table[i] = Table[i] / max;
    }
    return Table;
}
function Center_Data_Matrix(Matrix) {
    const Max_By_Ligne = Matrix.map(row => Math.max(...row));
    const max = Math.max(...Max_By_Ligne);
    var New_Matrix = [];

    for (let i = 0; i < Matrix.length; i++) {
        for (let j = 0; j < Matrix[i].length; j++) {
            if (Matrix[i][j] != null) {
                Matrix[i][j] = Matrix[i][j] / max;
            }
        }
        New_Matrix.push(Matrix[i])
    }

    return New_Matrix;
}

// Put the Data between 0 and 1
Stations = Center_Data_Table(Stations);
Waterline = Center_Data_Table(Waterline);
Buttockline = Center_Data_Matrix(Buttockline);
console.log(Buttockline)
///


var Half_B = JSON_Data["designState"]["calculationParameters"]["Breadth_Moulded"] / 2;
var Length = JSON_Data["designState"]["calculationParameters"]["LWL_design"];
var Depth = JSON_Data["designState"]["calculationParameters"]["Depth_1_Deck"];
////////////////////////////////////////////////////////////

function Multiply_Table(Table, n) {
    for (let i = 0; i < Table.length; i++) {
        Table[i] = Table[i] * n;
    }
    return Table
}

function Multiply_Matrix(Matrix, n) {
    for (let i = 0; i < Matrix.length; i++) {
        for (let j = 0; j < Matrix[i].length; j++) {
            if (Matrix[i][j] != null) {
                Matrix[i][j] = Matrix[i][j] * n;
            }
        }

    }
    return Matrix
}

// Multiply the tables to get the real values
Buttockline = Multiply_Matrix(Buttockline, Half_B)
Stations = Multiply_Table(Stations, Length);
Waterline = Multiply_Table(Waterline, Depth);
///////////////////////////////////////////////////////////////

////////// CREATE THE SCENE, CAMERA, RENDER ////////////////
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)

const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);
////////////////////////////////////////////////////////////////


/////////// CREATE THE POINTS ///////////////////////

// Create the geometry
const geometry = new THREE.Geometry();

for (let i = 0; i < Buttockline.length; i++) {

    for (let j = 0; j < Buttockline[i].length; j++) {
        if (Buttockline[i][j] != null) {
            geometry.vertices.push(new THREE.Vector3(Waterline[i], Buttockline[i][j], Stations[j]));
        }

    }
}

for (let i = 0; i < Buttockline.length; i++) {
    for (let j = 0; j < Buttockline[i].length; j++) {
        if (Buttockline[i][j] != null) {
            geometry.vertices.push(new THREE.Vector3(Waterline[i], -Buttockline[i][j], Stations[j]));
        }
    }
}
/////////////////////////////////////////////////////////
console.log("geom = " + geometry.vertices[1])
console.log("B = " + Buttockline.length)
console.log("Bi = " + Buttockline[1].length)
/////////// CREATE THE TRIANGLE //////////////////////////
//if ((i == 0) || (i == 1) || (i == Buttockline[0].length - 1)) {
var j = 0;
for (let i = 0; i < geometry.vertices.length; i++) {
    //if (Buttockline[i][j] != null) {

    if (i < 10) {
        const face = new THREE.Face3(i, i + 1, Buttockline[0].length - 1 + i);
        face.vertexColors[0] = new THREE.Color(0x0000FF + i);
        face.vertexColors[1] = new THREE.Color(0x0000FF + i);
        face.vertexColors[2] = new THREE.Color(0x0000FF + i);
        geometry.faces.push(face

        );
        const face2 = new THREE.Face3(i + 1, Buttockline[0].length - 1 + i, Buttockline[0].length + i)
        face2.vertexColors[0] = new THREE.Color(0x0000FF + i);
        face2.vertexColors[1] = new THREE.Color(0x0000FF + i);
        face2.vertexColors[2] = new THREE.Color(0x0000FF + i);
        geometry.faces.push(face2

        );

    }
    else {
        const face = new THREE.Face3(i, i + 1, Buttockline[0].length - 1 + i);
        face.vertexColors[0] = new THREE.Color(0x0000FF );
        face.vertexColors[1] = new THREE.Color(0x0000FF );
        face.vertexColors[2] = new THREE.Color(0x0000FF );
        geometry.faces.push(face

        );
        const face2 = new THREE.Face3(i + 1, Buttockline[0].length - 1 + i, Buttockline[0].length + i)
        face2.vertexColors[0] = new THREE.Color(0x0000FF);
        face2.vertexColors[1] = new THREE.Color(0x0000FF);
        face2.vertexColors[2] = new THREE.Color(0x0000FF);
        geometry.faces.push(face2

        );
    }



    //}

}
//  for (let i = 0; i < Buttockline.length - 1; i++) {
//      for (let j = 0; j < Buttockline[i].length - 1; j++) {
//          const index = i * Buttockline[i].length + j + a;
//          if(Buttockline[i][j] != null){
//              geometry.faces.push(
//                  new THREE.Face3(index, index + 1, index + Buttockline.length),
//                  new THREE.Face3(index + Buttockline.length, index + 1, index + Buttockline.length + 1)
//              );
//          }
//      }
//  }
////////////////////////////////////////////////////////////

//(j, j + 1, j + (i+1)*Buttockline[0].length)

////////////// CREATE THE STRUCTURE AND ANIMATE //////////////////////
const colors = [];
// Parcourir chaque sommet
for (let i = 0; i < geometry.vertices.length; i++) {
    if ((i == Buttockline[0].length + 1) || (i == Buttockline[0].length - 1 + Buttockline[0].length) || (i == Buttockline[0].length + Buttockline[0].length)) {
        console.log("test = " + Buttockline[0].length)
        const hue = (i / geometry.vertices.length) * 120; // Calculer la teinte en fonction de l'index du point
        const color = new THREE.Color(0xF01B13 + i / 4); // Utiliser la couleur de base verte
        color.offsetHSL(0, hue / 360, 0); // Ajouter une teinte
        // Ajouter la couleur au tableau
        colors.push(color);
    }
    else {
        const hue = (i / geometry.vertices.length) * 120; // Calculer la teinte en fonction de l'index du point
        const color = new THREE.Color(0x00ff00 + i / 4); // Utiliser la couleur de base verte
        color.offsetHSL(0, hue / 360, 0); // Ajouter une teinte
        // Ajouter la couleur au tableau
        colors.push(color);

    }

}

// Parcourir chaque sommet


// Assigner les couleurs aux sommets de la géométrie
geometry.colors = colors;
// Créer un matériau utilisant les couleurs des points
const material1 = new THREE.MeshBasicMaterial({
    vertexColors: THREE.VertexColors, // Activer l'utilisation des couleurs des sommets
    transparent: true, // Activer la transparence
    opacity: 0.5 // Définir l'opacité à 50%
});

//const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
const material = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.02 });
//const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
const cylinder = new THREE.Points(geometry, material)
//const cylinder = new THREE.Mesh(geometry, material1)
scene.add(cylinder)
camera.position.z = 180


renderer.setSize(600, 300)
document.body.appendChild(renderer.domElement)
//const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    cylinder.rotation.x = 6.5
    cylinder.rotation.y += 0.01
    cylinder.rotation.z = -1.5
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
cylinder.frustumCulled = false;
const newTarget = new THREE.Vector3(0, 0, 0);

// Définition du nouveau point de rotation de la caméra
camera.lookAt(newTarget);

//////////////////////////////////////////////////////////////////

/*

///////////////// MOOVE WITH THE MOUSE /////////////////////////
let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;

// Écouteur pour l'événement mousedown
document.addEventListener('mousedown', onMouseDown, false);

// Écouteur pour l'événement mouseup
document.addEventListener('mouseup', onMouseUp, false);

// Fonction appelée lorsque le bouton de la souris est enfoncé
function onMouseDown(event) {
    isDragging = true;
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
}

// Fonction appelée lorsque le bouton de la souris est relâché
function onMouseUp() {
    isDragging = false;
}

// Écouteur pour l'événement mousemove
document.addEventListener('mousemove', onMouseMove, false);

// Fonction appelée lors du déplacement de la souris
function onMouseMove(event) {
    if (isDragging) {
        const deltaX = event.clientX - previousMouseX;
        const deltaY = event.clientY - previousMouseY;

        camera.rotation.y += deltaX * 0.01;
        camera.rotation.x += deltaY * 0.01;

        previousMouseX = event.clientX;
        previousMouseY = event.clientY;
    }
}
//////////////////////////////////////////////////
*/
animate()