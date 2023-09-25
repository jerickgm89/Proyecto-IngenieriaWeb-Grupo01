import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
  } from "@material-tailwind/react";

import {contentCard} from '../tools/cardTools.jsx';

export default function CardDefault() {

	return(
		<>	
			{
				contentCard.map((contentCard) => {
					return (
						<Card className="mt-6 w-96" key={contentCard.id}>
							<CardHeader color="blue-gray" className="relative h-56">
								<img
								src={contentCard.imagen}
								alt={contentCard.title}
								/>
							</CardHeader>
							<CardBody>
								<Typography variant="h5" color="blue-gray" className="mb-2">
								{contentCard.title}
								</Typography>
								<Typography>
								{contentCard.description}
								</Typography>
							</CardBody>
							<CardFooter className="pt-0">
								<a href={contentCard.href}>
									<Button color="red" className="w-full">Mas informacion</Button>
								</a>
								
							</CardFooter>
						</Card>						
					)				
				})
			}	
		</>
	)

}



