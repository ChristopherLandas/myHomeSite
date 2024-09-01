import { AiFillGithub } from 'react-icons/ai'
import styles from '../styles/projectCard.module.css'
import Proptypes from 'prop-types'
import { IoLogoGameControllerB } from 'react-icons/io'

const ProjectCard = (props) => {
  return (
    <div className={styles.main}>
      <a href={props.link === '#'? '##': props.link} target= {props.link === '#'? '': '_blank'} >
        <div className={styles.outer}>
          <div className={styles.imgCon}>
            <img src={props.image } alt="" />
          </div>
          <div className={styles.titleCon}>
            <div className={styles.title}>
              <hr />
              <h3>{props.title}</h3>
              <hr />
            </div>
            <div className={styles.description}>
                <div>
                  {props.description}
                </div>
            </div>
            <div className={styles.prompt}>
              {props.promptIcon == 'github'
                ? <AiFillGithub size={30} color='white'/>
                : <IoLogoGameControllerB size={30} color='white'/>}
              <span>{props.prompt}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

ProjectCard.propTypes = {
  link: Proptypes.string,
  image: Proptypes.string,
  title: Proptypes.string,
  description: Proptypes.string,
  prompt: Proptypes.string,
  promptIcon: Proptypes.arrayOf(Proptypes.oneOf(['github', 'games']))
}

ProjectCard.defaultProps = {
  link: '#',
  image: 'https://placehold.co/315x250',
  title: 'Title Here',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, unde! Alias recusandae non voluptate consequuntur, aut expedita, facilis molestias, beatae quisquam doloremque aliquam delectus dicta perferendis eaque sequi quas amet.',
  prompt: 'Click Here',
  promptIcon: 'github'
}

export default ProjectCard