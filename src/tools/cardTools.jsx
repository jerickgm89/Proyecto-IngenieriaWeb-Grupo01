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

export {contentCard, mantenimiento};