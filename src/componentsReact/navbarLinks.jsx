
export default function NavbarLinks() {

    const nameLinks = [
        {
            id: 1,
            description: "Inicio",
            href: '/'
        },
        {
            id: 2,
            description: "Servicios",
        },
        {
            id: 3,
            description: "Promociones",
        },
        {
            id: 4,
            description: "Contacto",
        }
    ]

    const classNameul = "grid grid-cols-4 gap-3 text-center";
    const classNameLinks = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium inline-block align-middle";        
    
    return (
        <>        
            <ul class={classNameul}>
                {nameLinks.map((nameLinks) => {
                        return (              
                            
                                <a href={nameLinks.href} ><li key={nameLinks.id} class={classNameLinks}>{nameLinks.description}</li></a>   
                            

                        )
                })}
            </ul>
        </>
    )
}