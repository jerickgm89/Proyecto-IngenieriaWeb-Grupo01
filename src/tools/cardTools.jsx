import imagen4 from '../img/card/aire-acondicionado-05.png'
import imagen1 from '../img/card/cambio-aceite-01.png'
import imagen2 from '../img/card/mant-mayor-04.png'
import imagen3 from '../img/card/panos-pintura-04.png'

import icambioAceite from "../img/mantenimiento/imagenMantenimiento1.png"
import iMantoPreventivoMenor from "../img/mantenimiento/imagenMantenimiento2.png"
import iMantoPreventivoMayor from "../img/mantenimiento/imagenMantenimiento3.png"
import iDiagMantoFrenos from "../img/mantenimiento/imagenMantenimiento4.png"
import iCambioPastillas from "../img/mantenimiento/imagenMantenimiento5.png"
import iAlineacionBalanceo from "../img/mantenimiento/imagenMantenimiento6.png";

import imecEspec1 from "../img/mecanicaEspecializada/imagen1.png"
import imecEspec2 from "../img/mecanicaEspecializada/imagen2.png"
import imecEspec3 from "../img/mecanicaEspecializada/imagen3.png"
import imecEspec4 from "../img/mecanicaEspecializada/imagen4.png"
import imecEspec5 from "../img/mecanicaEspecializada/imagen5.png"
import imecEspec6 from "../img/mecanicaEspecializada/imagen6.png"
import imecEspec7 from "../img/mecanicaEspecializada/imagen7.png"
import imecEspec8 from "../img/mecanicaEspecializada/imagen8.png"
import imecEspec9 from "../img/mecanicaEspecializada/imagen9.png"
import imecEspec10 from "../img/mecanicaEspecializada/imagen10.png"

import iplanPintura1 from "../img/planchadoPintura/imagen1.png"
import iplanPintura2 from "../img/planchadoPintura/imagen2.png"
import iplanPintura3 from "../img/planchadoPintura/imagen3.png"
import iplanPintura4 from "../img/planchadoPintura/imagen4.png"

const contentCard = [
    {
        id: 1,
        title: 'Mantenimiento',
        description: 'En InnovaCarService cuidamos de tu vehículo. Si requieres mantenimiento programado, revisar tus frenos u otro servicio puedes reservar tu cita con nosotros.',
        imagen: imagen1.src,
        href: '/mantenimiento'
    },	
    {
        id: 2,
        title: 'Mecanica Especializada',
        description: 'Contamos con profesionales y equipos especializados para tender cualquier inconveniente de tu vehículo si necesitas una reparación por desperfecto.',
        imagen: imagen2.src,
        href: '/mecanica-especializada'
    },
    {
        id: 3,
        title: 'Planchado y Pintura',
        description: 'Si amas que tu vehículo se vea como nuevo llegaste al lugar indicado. Deja tu auto en manos de los expertos',
        imagen: imagen3.src,
        href: '/planchado-pintura'
    },
    {
        id: 4,
        title: 'Servicios Complementarios',
        description: 'Carga de aire acondicionado | Reparacion de aire acondicionado | Undercoating y zincado | Lavado de salon',
        imagen: imagen4.src
    }
]

const mantenimiento = [
    {
        id: 1,
        title: 'Cambio de aceite',
        description: 'La importancia del cambio de aceite es lubricar todas las piezas del motor, reducir la fricción, controlar la temperatura y asegurar el rendimiento y vida del motor. Te recomendamos hacerla cada 5.000 para aceite minerales o semi-sintético y 8.000 kilómetros para aceite sintético.',
        description2: 'Cambio de aceite (01 gl. 5w30)     |     Cambio de filtro de aceite (01 und.)',
        imagen: icambioAceite.src
    },
    {
        id: 2,
        title: 'Mantenimiento preventivo Menor',
        description: 'Cambio de aceite (sintético, semi sintético y mineral)   |   Arandela de cárter Cambio de filtro de aceite (01 und.)   |   Analizador de batería Revisión y regulación de frenos   |   Revisión de  Luces   |   Fluidos   |   Presión de llantas   |   Líquido limpiaparabrisas   |   Lavado de motor y carrocería',
        description2: 'Consta de una serie de revisiones que se efectúan en un tiempo determinado para disminuir las probabilidades de fallas o desgastes que amerite una reparación costosa del vehículo.Este servicio debe realizarse cada 5000 km o o según normas del fabricante.',
        imagen: iMantoPreventivoMenor.src
    },
    {
        id: 3,
        title: 'Mantenimiento preventivo Mayor',
        description: 'Cambio de aceite (sintético, semi sintético, mineral)   |   Cambio de 01 Filtro de aceite  01 Filtro de aire   |  Cambio de filtro de polen  A/C |  Arandela de cárter   |   Cambio de bujías (de ser necesario) | Limpieza de obturador |   Ajuste con escáner | Desmontaje de inyectores  | Mantenimiento de inyectores |  Revisión y regulación de frenos Analizador de batería   |   Revisión de Luces   |   Fluidos   |   Presión de llantas   |   Líquido limpiaparabrisas   |   Lavado de motor y carrocería',
        description2: 'Consta de una serie de revisiones que se efectúan en un tiempo determinado para disminuir las probabilidades de fallas o desgastes que amerite una reparación costosa del vehículo.Este servicio debe realizarse cada 5000 km o o según normas del fabricante.',
        imagen: iMantoPreventivoMayor.src
    },
    {
        id: 4,
        title: 'Diagnóstico y mantenimiento de sistema de frenos',
        description: 'Diagnóstico del estado del disco   |   Reparación del sistema de frenos Rectificación de discos   |   Rectificado de zapatas   |   Regulación de freno de mano.',
        description2: 'Los discos de frenos tienen un grosor mínimo para su buen funcionamiento, por la fricción con las pastillas de frenos desgastadas, estos puede sufrir de rayones. Para saber el estado del disco hay que estar atento al chirrido que emite al frenar',
        imagen: iDiagMantoFrenos.src
    },
    {
        id: 5,
        title: 'Cambio de pastillas de frenos',
        description: 'Diagnóstico del sistema de freno   |   Reparación del sistema de freno. Mantenimiento del sistema de frenos   |   Limpieza del sistema de frenos. Regulación del freno de mano.',
        description2: 'La función de las pastillas es generar la fricción necesario para que ralentice el movimiento del disco. El cambio de las patillas se debe hacerse entre los 20,000 y 30,000 kms. Las pastillas se gastan más con el uso prolongado  en la ciudad. Además es normal que las pastillas delanteras sean las primeras en desgastarse.',
        imagen: iCambioPastillas.src
    },
    {
        id: 6,
        title: 'Alineación y balanceo',
        description: 'Ajustes de los ángulos de la llantas   |   Revisar la presión de la llantas',
        description2: 'Alarga la vida útil de la SUSPENSIÓN y las LLANTAS de tu vehículo. Se recomienda hacerlo cada 10,000 kms para así garantizar tu seguridad y la de tus acompañantes',
        imagen: iAlineacionBalanceo.src
    }
]

const mecanicaEspecializada = [
    {
        id: 1,
        title: 'Tablero electronico',
        description: 'Detectamos fallas mecánicas eléctricas y electrónicas. Identificamos las fallas actuales y prevenimos las fallas futuras Escáner homologados para VW, Audi, Seat, Bmw, Peugeot, Renault, entre otros',
        description2: 'El diagnóstico de fallas sirve para detectar los problemas particulares del vehículo; debido a que este funciona con diferentes sistemas que trabajan entre sí, es importante realizar el diagnóstico para solucionar la falla sin hacer cambios de repuestos innecesarios. Cuando sientas que tu carro tiene ruidos extraños, o deficiencia de alguno de los sistemas como suspensión, frenos, motor, entre otros. ¡No esperes el símbolo de “check engine” en el tablero!',
        imagen: imecEspec1.src
    },
    {
        id: 2,
        title: 'Reparacion de motor',
        description: 'Medición, rectificado y cambio de piezas desgastadas    |   Prueba de fugas de compresión   |   Revisión del consumo de aceite   |   Revisión de ruidos anormales del motor.',
        description2: 'Consiste en desarmar el motor, limpiarlo a fondo, medir y rectificar las partes, cambiar las piezas que sufren mayor desgaste y volverlas a ensamblar según especificaciones de la casa matriz. Estamos a la vanguardia de la tecnología, lo que nos permite garantizar un mantenimiento óptimo de su vehículo cuando lo necesite.',
        imagen: imecEspec2.src
    },
    {
        id: 3,
        title: 'Afinamiento electronico',
        description: 'Revisión del sistema eléctrico, Alineamiento de luces, Revisión y/o cambio de batería, Verificación de cargas de baterías, entre otros. <br> Programación del panel electrónico, Verificación de cierre centralizado, Mandos electrónicos, entre otros.',
        description2: 'La Tecnología Automotriz nos muestra avances como los vehículos totalmente eléctricos y vehículos de combustión controlados electrónicamente.Todos los componentes eléctricos de un vehículo están sometidos a condiciones extremas como: agua, polvo, temperaturas, líquidos, corrosión, etc… Por eso es necesario revisarlos y validar su correcto funcionamiento.',
        imagen: imecEspec3.src
    },
    {
        id: 4,
        title: 'Amortiguadores',
        description: 'Cambio de amortiguadores (delanteros o posteriores)   |   Alineación y balanceo   |   Cambio de rotulas, trapecios, entre otros.',
        description2: 'Los amortiguador es la pieza principal del sistema de suspensión del automóvil. Es el encargado de controlar el comportamiento de las ruedas cuando hacen contacto con la vía por la que transitas y son los que dan estabilidad, confort y seguridad a la conducción, pues evitan los movimientos bruscos del carro, entre otras cosas.',
        imagen: imecEspec4.src
    },
    {
        id: 5,
        title: 'Kit de distribucion',
        description: 'Diagnóstico del sistema de distribución   |   Cambio del kit de distribución, correa, polea, tensor, etc    |    Sincronización de motor.',
        description2: 'Conecta y sincroniza el movimiento de las válvulas con los pistones, hace funcionar la bomba de agua que refrigera el motor y/o la bomba de aceite, así que de ella dependen el movimiento del motor y su temperatura. El cambio es necesario porque sufre desgaste natural por su exposición a altas temperaturas y la tensión constante, te recomendamos cambiarlo entre los 40,000 y 50,000 km dependiendo del modelo del vehículo.',
        imagen: imecEspec5.src
    },
    {
        id: 6,
        title: 'Kit de embrague',
        description: 'Diagnóstico del embrague   |   Inspección de disco de embrague, presión, mecanismo   |   La renovación se da entre los 80,000 y 120,000 kms.   |   Aceite de caja',
        description2: 'El embrague es un mecanismo que permite al vehículo circular a diferentes velocidades gracias al uso de las diferentes marchas, funciona acoplando y desacoplando la caja de cambios y el motor de esta forma se igualan las velocidades de ambos. Con el uso y el paso del tiempo, estas piezas comienzan a desgastarse, cuando esto suceda notaremos los fallos al cambiar la marcha, o el motor tendrá problemas al arrancar.',
        imagen: imecEspec6.src
    },
    {
        id: 7,
        title: 'Cajas de Transmision | mecanica | automatica',
        description: 'Diagnóstico de cajas MT  /  AT   |   Revisión de Caja de transmisión manual   |   Revisión de Caja de transmisión automática   |   Aceite de caja',
        description2: 'La caja de cambios administra mediante sincronizadores y engranajes las revoluciones del motor para darle mayor desplazamiento. Los ruidos, el tacto en la palanca y el estado del aceite son tres síntomas que nos pueden proporcionar una valiosa información acerca del estado de salud de la caja de velocidades de nuestro vehículo.',
        imagen: imecEspec7.src
    },
    {
        id: 8,
        title: 'Cajas mecatronicas DSG',
        description: 'Diagnóstico de Cajas de doble embrague DSG   |   Mantenimiento de Cajas DSG   |   Reparación de Cajas Mecatrónicas DSG   |   Aceite de caja DSG',
        description2: 'El mantenimiento básico de las cajas de cambios DSG consiste en la sustitución periódica del aceite y el filtro. Se recomienda realizarlo cada 50.000 km aproximadamente. Es esencial realizar un correcto mantenimiento ya que un aceite contaminado puede afectar tanto a los embragues como a la unidad mecatrónica, pudiendo provocar graves daños en la caja misma',
        imagen: imecEspec8.src
    },
    {
        id: 9,
        title: 'Escaner de alta gama | Osciloscopio',
        description: 'Localizamos la avería de un circuito   |   Medimos la amplitud, fase, frecuencia y distorsiones de señales eléctricas de las partes electrónicas de tu vehículo   |   Reparaciones de las partes electrónicas automotrices',
        description2: 'Escáner de Alta Gama para realizar un diagnóstico acertado en las reparaciones automotrices. Este instrumento permite interpretar gráficamente lo que esta sucediendo con los componentes electrónicos. Trabajamos con vehículos convencionales  y vehículos de alta gama europeos Volkswagen, Audi, Seat, Skoda, BMW, Peugeot, Citroen, Volvo, etc.',
        imagen: imecEspec9.src
    },
    {
        id: 10,
        title: 'Cambio de fluidos',
        description: 'Líquido de frenos    |   La revisión es periódica (02 veces al año) para mayor seguridad Refrigerante   |   Conviene revisarlo cada 20,000 km.  antes que pierda propiedades Hidrolina   |   La dirección asistida se revisa una vez al año',
        description2: 'Durante todo el año, haga frío o calor, cada cierto tiempo debes revisar los niveles de los líquidos del vehículo. De ellos depende que el motor funcione bien y no tengas que visitar el taller antes de tiempo y con consecuencias, generalmente, más graves de lo deseado.',
        imagen: imecEspec10.src
    }
]

const planchadoPintura = [
    {
        id: 1,
        title: 'Planchado - reparación de carrocería',
        description: 'Preparación del vehículo para el trabajo de planchado.Reparación de carrocería   |   Reparación de fibra de vidrio   |   Reconstrucción Desabollado   |   Reparación de rayones   |   Enderezado de chasis   |   Modificaciones, entre otros.',
        description2: 'El proceso consiste en restaurar las piezas que han sido golpeadas, dañadas u otro problema, mientras cuidamos las partes originales no afectadas por el impacto. Reparamos los accidentes leves o graves, o simplemente quieres mejorar la imagen de tu vehículo.',
        imagen: iplanPintura1.src
    },
    {
        id: 2,
        title: 'Pintura en general',
        description: 'Pintado por paños   |   Baño de pintura   |   Corrección de arañones Cambio de color   Pintado de aros, entre otros -  Usamos materiales de alta calidad.',
        description2: 'Contamos con personal de amplia experiencia en el proceso de pintura en general. Trabajamos con materiales de alta calidad para lograr cubrir las expectativas de nuestros clientes hasta alcanzar su total satisfacción. Nuestro compromiso es trabajar arduamente hasta que el cliente se sienta plenamente satisfecho. <br>*Nota: Los precios son referenciales de acuerdo al tipo de pintura de cada vehículo.',
        imagen: iplanPintura2.src
    },
    {
        id: 3,
        title: 'Cambio de color   |   Baño de pintura',
        description: 'Trabajamos con materiales de alta calidad <br>Pintura Monocapa   |   Pintura Tricapa (perlada).',
        description2: 'Contamos con personal de amplia experiencia en el proceso de pintura en general. Trabajamos con materiales de alta calidad para lograr cubrir las expectativas de nuestros clientes hasta alcanzar su total satisfacción.  Nuestro compromiso es trabajar arduamente hasta que el cliente se sienta plenamente satisfecho.<br>*Nota: Los precios son referenciales de acuerdo al tipo de pintura de cada vehículo.',
        imagen: iplanPintura3.src
    },
    {
        id: 4,
        title: 'Tratamiento de pintura',
        description: 'Descontaminado   |   Aplicación de niveles de pulidor para retirar rayones Aplicación de pulidor fino   |   Aplicación de abrillantador   |   Aplicación de protector',
        description2: 'Es un proceso de pulido intenso y detallado, sirve para realzar y levantar el brillo dejando la superficie libre de rayas y marcas superficiales, removiendo rayones tipo tela de araña, brindando un acabado fino o mojado.',
        imagen: iplanPintura4.src
    }
]

export {contentCard, mantenimiento, mecanicaEspecializada, planchadoPintura};