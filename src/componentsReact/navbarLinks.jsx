
export default function NavbarLinks() {

    const nameLinks = [
        {
            id: 1,
            description: "INICIO",
            href: '/'
        },
        {
            id: 2,
            description: "SERVICIOS",
        },
        {
            id: 3,
            description: "PROMOCIONES",
        },
        {
            id: 4,
            description: "CONTACTO",
        }

    ]

    const classNameul = "grid grid-cols-4 gap-3 text-center";
    const classNameLinks = "text-black-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium inline-block align-middle";  
          
    
    return (
        <>        
            <ul className={classNameul}>
                {nameLinks.map((nameLinks) => {
                    return (
                            <a href={nameLinks.href} key={nameLinks.id}><li className={classNameLinks}>{nameLinks.description}</li></a>   
                        )
                })}
            </ul>
        </>
    )
}