
import {contentCard} from '../tools/cardTools.jsx'


export default function Card() {

	return(
		<>	
			{
				contentCard.map((contentCard) => {
					return (
						<div className="max-w-2xl mx-auto py-5 ">							
							<div className="bg-white shadow-md border rounded-lg max-w-sm bg-cover bg-center">
								<a href={contentCard.href}>
									<img src={contentCard.imagen} alt="imagen" classNameName="rounded-lg"/>
									
								</a>
								<div className="p-5">
									<a href={contentCard.href}>
										<h5 className="text-black-900 font-bold text-2xl tracking-tight mb-2">{contentCard.title}</h5>
									</a>
									<p className="font-normal text-gray-700 mb-3">{contentCard.description}</p>
									<a href={contentCard.href} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
										Mas informacion
										<svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
									</a>
								</div>
							</div>
						</div>
			
						
					)				
				})
			}	
		</>
	)

}



