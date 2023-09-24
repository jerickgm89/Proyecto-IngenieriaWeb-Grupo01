import {
    Input,
    Button,
    Select, 
    Option,
    Textarea
  } from "@material-tailwind/react";

export default function formCotizacion(){
    return(
        <>
            <div className="sm:mx-10 md:mx-52 max-sm:px-10 align-middle items-center font-semibold pt-3">
                <div>
                    <h2>1. INFORMACION PERSONAL</h2>
                    <div className="mb-4 flex flex-row gap-9 lg-max:flex-col pt-5">
                        <Input size="lg" label="Name" />
                        <Input size="lg" label="Telf" />
                        <Input size="lg" label="Email" required />
                    </div>
                </div>
                <div>
                    <h2>2. INFORMACION DEL VEHICULO</h2>
                    <div className="mb-4 grid grid-cols-3 gap-9 pt-5 lg-max:grid-cols-1">
                        <Input size="lg" label="Marca del vehiculo" />
                        <Input size="lg" label="Modelo del vehiculo" />
                        <Input size="lg" label="Numero de placa" />
                        <Input type="tel" size="lg" label="Año de fabricacion" />
                        <Select label="Elige tu servicio">
                            <Option>Cambio de aceite</Option>
                            <Option>Mantenimiento Preventivo Mayor</Option>
                            <Option>Mantenimiento Preventivo Menor</Option>
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