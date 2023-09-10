
import imagen4 from '../img/card/aire-acondicionado-05.png'
import imagen1 from '../img/card/cambio-aceite-01.png'
import imagen2 from '../img/card/mant-mayor-04.png'
import imagen3 from '../img/card/panos-pintura-04.png'


export default function Card() {
	const contentCard = [
		{
			id: 1,
			title: 'Mantenimiento',
			description: 'En InnovaCarService cuidamos de tu vehículo. Si requieres mantenimiento programado, revisar tus frenos u otro servicio puedes reservar tu cita con nosotros.',
			imagen: imagen1.src,
			href: '/inicio/mantenimiento'
		},	
		{
			id: 2,
			title: 'Mecanica Especializada',
			description: 'Contamos con profesionales y equipos especializados para tender cualquier inconveniente de tu vehículo si necesitas una reparación por desperfecto.',
			imagen: imagen2.src
		},
		{
			id: 3,
			title: 'Planchado y Pintura',
			description: 'Si amas que tu vehículo se vea como nuevo llegaste al lugar indicado. Deja tu auto en manos de los expertos',
			imagen: imagen3.src
		},
		{
			id: 4,
			title: 'Servicios Complementarios',
			description: 'Carga de aire acondicionado | Reparacion de aire acondicionado | Undercoating y zincado | Lavado de salon',
			imagen: imagen4.src
		}
	]

	return(
		<>	
			{
				contentCard.map((contentCard) => {
					return (
						<div class="my-7" key={contentCard.id}>
							<img src={contentCard.imagen} alt="imagen1" class="mx-auto w-full max-h-72 rounded-t-xl"/>
							<a href={contentCard.href} class="rounded-2xl">						
								<p class="bg-gray-300 text-black text-center py-3">{contentCard.title}</p>
								<p class="text-black text-center py-2">{contentCard.description}</p>
							</a>
							<button class="w-full rounded-xl bg-red-700 py-2 text-white font-semibold leading-6 hover:bg-red-600"><a href={contentCard.href}>Mas informacion</a></button>
						</div>
					)				
				})
			}	
		</>
	)

}



