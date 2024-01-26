import React from 'react'
import Card_css from './EventCard.module.css'

function EventCard(props) {
  return (
    <>
    <div className={Card_css.main}>

      		<div className={Card_css.card} role="button">
			<span className={Card_css.glow}></span>
			<div className={Card_css.inner}>
				<span>Events</span>GCOEA <br/>
				{props.txt}
			</div>
		</div>
    </div>
    </>
  )
}

export default EventCard
