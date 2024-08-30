import PropTypes from 'prop-types'
import styles from '../styles/linedTitle.module.css'

const LinedTitle = (props) => {
  return (
    <div className={styles.main} style={{width: '100%'}}>
      <hr style={{backgroundColor: props.lineColor}}/>
      <div className={styles.title} style={{color: props.titleColor, fontSize: props.titleSize}}>
        {props.title}
      </div>
      <hr style={{backgroundColor: props.lineColor}}/>
    </div>
  )
}

LinedTitle.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineColor: PropTypes.string,
  
}

LinedTitle.defaultProps = {
  title: 'Insert Title Here',
  titleColor: '#FFF5BD',
  titleSize: '2rem',
  width: 'auto',
  lineColor: '#D96080'
}

export default LinedTitle