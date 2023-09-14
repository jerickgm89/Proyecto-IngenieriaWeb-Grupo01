
import {contentCard} from '../tools/cardTools.jsx';
import { Icon } from 'astro-icon'


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
									<a href={contentCard.href} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center w-full justify-center">Mas informacion</a>
								</div>
							</div>
						</div>
			
						
					)				
				})
			}	
		</>
	)

}



