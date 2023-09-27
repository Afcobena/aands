// COMPONENTS
import EventsCard from '@/components/cards/EventsCard/EventsCard';

// DATA
import { eventsData } from '@/data/events';

// RENDER
export default function Events() {
	return (
		<section className='events'>
			<div className='events__container'>
				<h2>Events</h2>
				<div className='events__container--grid'>
					{eventsData.map(eachCard => (
						<EventsCard
							key={eachCard.id}
							image={eachCard.img}
							title={eachCard.title}
							description={eachCard.description}
							location={eachCard.location}
							date={eachCard.date}
						/>
					))}
				</div>
			</div>
		</section>
	);
}