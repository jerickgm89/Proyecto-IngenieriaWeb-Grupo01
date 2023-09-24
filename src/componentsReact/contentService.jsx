import {mantenimiento, mecanicaEspecializada, planchadoPintura, promociones} from '../tools/cardTools'


export const MantenimientoCard = () => {
    return (
        <>
            {
                mantenimiento.map((mantenimiento) => {
                    return (
                        <div key={mantenimiento.id}  className="grid grid-cols-2 justify-center py-6 lg-max:grid-cols-1">
                            <div className="px-5">
                                <img src={mantenimiento.imagen} alt={mantenimiento.title} className="mx-auto rounded-lg"/> 
                            </div>
                            
                            <div className="grid content-around justify-start">
                                <h3 className="text-gray-800 font-semibold text-2xl lg-max:text-center lg-max:py-3">{mantenimiento.title}</h3>
                                <p className="lg-max:py-2 text-xl lg-max:px-6" >{mantenimiento.description}</p>
                                <p className="text-gray-700 font-light text-xl lg-max:px-6">{mantenimiento.description2}</p>
                                <a href="/cotizacion" className="py-3 justify-self-center"><button className="lg-max:w-72 w-96 py-2 rounded-xl bg-red-700 text-white font-semibold leading-6 hover:bg-red-600">COTIZA TU SERVICIO</button></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export const MecanicEspecializada = () => {
    return (
        <>
            {
                mecanicaEspecializada.map((mecanicaEspecializada) => {
                    return (
                        <div key={mecanicaEspecializada.id}  className="grid grid-cols-2 justify-center py-6 lg-max:grid-cols-1">
                            <div className="px-5">
                                <img src={mecanicaEspecializada.imagen} alt={mecanicaEspecializada.title} className="mx-auto rounded-lg"/> 
                            </div>
                            
                            <div className="grid content-around justify-start">
                                <h3 className="text-gray-800 font-semibold text-2xl lg-max:text-center lg-max:py-3">{mecanicaEspecializada.title}</h3>
                                <p className="lg-max:py-2 text-xl lg-max:px-6">{mecanicaEspecializada.description}</p>
                                <p className="text-gray-700 font-light text-xl lg-max:px-6">{mecanicaEspecializada.description2}</p>
                                <a href="/cotizacion" className="py-3 justify-self-center"><button className="lg-max:w-72 w-96 py-2 rounded-xl bg-red-700 text-white font-semibold leading-6 hover:bg-red-600">COTIZA TU SERVICIO</button></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export const PlanchadoyPintura = () => {
    return (
        <>
            {
                planchadoPintura.map((planchadoPintura) => {
                    return (
                        <div key={planchadoPintura.id}  className="grid grid-cols-2 justify-center py-6 lg-max:grid-cols-1">
                            <div className="px-5">
                                <img src={planchadoPintura.imagen} alt={planchadoPintura.title} className="mx-auto rounded-lg"/> 
                            </div>
                            
                            <div className="grid content-around justify-start">
                                <h3 className="text-gray-800 font-semibold text-2xl lg-max:text-center lg-max:py-3">{planchadoPintura.title}</h3>
                                <p className="lg-max:py-2 text-xl lg-max:px-6">{planchadoPintura.description}</p>
                                <p className="text-gray-700 font-light text-xl lg-max:px-6">{planchadoPintura.description2}</p>
                                <a href="/cotizacion" className="py-3 justify-self-center"><button className="lg-max:w-72 w-96 py-2 rounded-xl bg-red-700 text-white font-semibold leading-6 hover:bg-red-600">COTIZA TU SERVICIO</button></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export const PromocionyDescuento = () => {
    return (
        <>
            {
                promociones.map((promociones) => {
                    return (
                        <div key={promociones.id}  className="grid grid-cols-2 justify-center py-6 lg-max:grid-cols-1">
                            <div className="px-5">
                                <img src={promociones.imagen} alt={promociones.title} className="mx-auto rounded-lg"/> 
                            </div>
                            
                            <div className="grid content-around justify-start">
                                <h3 className="text-gray-800 font-semibold text-2xl lg-max:text-center lg-max:py-3">{promociones.title}</h3>
                                <h4 className="text-red-500 font-semibold text-xl lg-max:px-6 lg-max:text-center">{promociones.precio}</h4>
                                <p className="lg-max:py-2 text-xl lg-max:px-6">{promociones.description}</p>
                                <p className="text-red-600 font-semibold lg-max:py-2 text-xl lg-max:px-6">{promociones.description2}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}