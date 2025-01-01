import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import styles from  '../styles/swiper.module.css'
import PropTypes from 'prop-types'


const MobilePagination = (props) => {
  return (
    <>
      <Swiper
        pagination={{dynamicBullets: false}}
        modules={[Pagination]}
        className= {styles.swiper}
        style={{paddingBottom: props.paddingBottom}}>
        {props.projectCard.map((val, i) => <SwiperSlide key={i} className={styles['swiper-slide']}>{val}</SwiperSlide>)}
      </Swiper>
    </>
  )
}

MobilePagination.propTypes = {
  projectCard: PropTypes.elementType.isRequired,
  paddingBottom: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
}

MobilePagination.defaultProps = {
  paddingBottom: '0px'
}

export default MobilePagination