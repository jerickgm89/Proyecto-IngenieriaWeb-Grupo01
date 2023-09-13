import {mantenimiento} from '../tools/cardTools'


export default function ContentService() {
    return (
        <>
            {
                mantenimiento.map((mantenimiento) => {
                    return (
                        <div key={mantenimiento.id}  className="grid grid-cols-2 justify-center py-6 max-sm:grid-cols-1">
                            <div>
                                <img src={mantenimiento.imagen} alt={mantenimiento.title} className="mx-auto rounded-lg"/> 
                            </div>
                            
                            <div className="grid content-around justify-start">
                                <h3 className="text-gray-800 font-medium text-2xl max-sm:text-center max-sm:py-3">{mantenimiento.title}</h3>
                                <p>{mantenimiento.description}</p>
                                <p className="text-gray-700 font-light text-base max-sm:py-3">{mantenimiento.description2}</p>
                                <a href=""><button className="w-full rounded-xl bg-red-700 py-2 text-white font-semibold leading-6 hover:bg-red-600">COTIZA TU SERVICIO</button></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
