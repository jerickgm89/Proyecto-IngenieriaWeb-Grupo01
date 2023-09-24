import { useFetch } from "../tools/useFetch";

import {
    Input,
    Button,
    Select, 
    Option,
    Textarea
  } from "@material-tailwind/react";

export default function formCotizacion(){

    const URL = "http://18.233.143.65:3000/service/all";
    const URL2 = "https://jsonplaceholder.typicode.com/users"

    const { datos, loading } = useFetch(URL);

      
    console.log(datos?.data?.map((item) => item.description))

    return(
        <>
            <div className="sm:mx-10 md:mx-52 max-sm:px-10 align-middle items-center font-semibold pt-3">
                <div>
                    <h2>1. INFORMACION PERSONAL</h2>
                    <div className="mb-4 flex flex-row gap-9 lg-max:flex-col pt-5">
                        <Input size="lg" label="Nombre y Apellidos" />
                        <Input size="lg" label="Telfono" />
                        <Input size="lg" label="Correo Electronico" required />
                    </div>
                </div>
                <div>
                    <h2>2. INFORMACION DEL VEHICULO</h2>
                    <div className="mb-4 grid grid-cols-3 gap-9 pt-5 lg-max:grid-cols-1">
                        <Input size="lg" label="Marca del vehiculo" />
                        <Input size="lg" label="Modelo del vehiculo" />
                        <Input size="lg" label="Numero de placa" />
                        <Input type="tel" size="lg" label="Año de fabricacion" />
                        <Select color="teal" label="Selecione el servicio">
                            <Option>Cambios de aceite</Option>
                            <Option>Mantenimiento preventivo Mayor</Option>
                            <Option>Mantenimiento preventivo Menor</Option>
                            <Option>Mecanica General</Option>
                            <Option>Alineamiento y balanceo</Option>
                            <Option>Reparacion del Sistema de Freno</Option>
                            <Option>Cambio de pastillas</Option>
                            <Option>Reparacion de Motor</Option>
                            <Option>Direccion y suspension</Option>
                            <Option>Kit de distribucion</Option>
                            <Option>Kit de embrague</Option>
                            <Option>Reparacion de Caja MT/AT</Option>
                            <Option>Diagnostico de fallas</Option>
                            <Option>Osciloscopio - escaner alta gama</Option>
                            <Option>Planchado y Pintura</Option>
                            <Option>Tratamiento de pintura</Option>
                            <Option>Pintura en General</Option>
                            <Option>Carga de aire acondicionado</Option>
                            <Option>Undercoating y zincado</Option>
                            <Option>Importacion de repuestos</Option>
                            <Option>Lavado de Salon</Option>
                        </Select>
                    </div>
                </div>
                <div>
                    <h2>3. INFORMACION ADICIONAL</h2>
                    <div className="mb-4 gap-9 pt-5">
                        <Textarea label="Dejanos tu mensaje" />
                    </div>                    
                </div>
                <div className="mb-4 gap-9">
                    <Button className="mt-6" color="red" size="lg" fullWidth>
                        Enviar datos
                    </Button>
                </div>
                
            </div>   
        </>
    )

} 