/* eslint-disable no-unused-vars */
import LinedTitle from "../components/LinedTitle"
import ProjectCard from "../components/ProjectCard"
import Headers from '../components/Headers'
import ParallaxTitle from "../components/ParallaxTitle"
import MobilePagination from "../components/MobilePagination"

const test = () => {
  return (
    <>
      <div style={{position: 'relative'}}>
        <MobilePagination
          projectCard={[
            <ProjectCard
              key={0}
              link='https://kurisudevu.itch.io/pong-defense'
              image='https://img.itch.zone/aW1nLzExMzAxODM5LnBuZw==/315x250%23c/5%2B7DRe.png'
              title='Pong Defense'
              description="Pong defense is a survival game with only one goal: make it as big as possible while dodging the hexagonal enemies using your paddle.\nThe challenge is: As you get bigger, your paddle will be smaller and smaller, more enemy type will come, and it's spawn in a faster rate."
              prompt='Click to Play'
              promptIcon='games'
            />,
            <ProjectCard
              key={0}
              link='https://kurisudevu.itch.io/pong-defense'
              image='https://img.itch.zone/aW1nLzExMzAxODM5LnBuZw==/315x250%23c/5%2B7DRe.png'
              title='Pong Defense'
              description="Pong defense is a survival game with only one goal: make it as big as possible while dodging the hexagonal enemies using your paddle.\nThe challenge is: As you get bigger, your paddle will be smaller and smaller, more enemy type will come, and it's spawn in a faster rate."
              prompt='Click to Play'
              promptIcon='games'
            />,
            <ProjectCard
              key={0}
              link='https://kurisudevu.itch.io/pong-defense'
              image='https://img.itch.zone/aW1nLzExMzAxODM5LnBuZw==/315x250%23c/5%2B7DRe.png'
              title='Pong Defense'
              description="Pong defense is a survival game with only one goal: make it as big as possible while dodging the hexagonal enemies using your paddle.\nThe challenge is: As you get bigger, your paddle will be smaller and smaller, more enemy type will come, and it's spawn in a faster rate."
              prompt='Click to Play'
              promptIcon='games'
            />,
          ]}
        />
      </div>
    </>
  )
}

export default test