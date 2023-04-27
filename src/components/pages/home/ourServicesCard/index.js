// .module.scss


import styles from './ourServicesCard.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
const OurServicesCard = (props) => {


    let {
        isSwiper = true
    } = props;


    return (
        <div className={`${!isSwiper ? 'container' : "container-fluid "} container-fluid mt-5 mb-5`}>
            <div className={styles.ourServicesCardContiner}>
                {isSwiper && <div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <h4 className={styles.ourServicesTitle}>Our Services</h4>
                        <p className={styles.ourServicesSubTitle}>We are focused on understanding client’s business first, and dedicated to solve their business problems.</p>

                    </div>
                </div>}
                {isSwiper ? <Swiper
                    spaceBetween={30}
                    slidesPerView={4.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, i) =>
                        <SwiperSlide key={i}>

                            <div className="card shadow border-0 mb-3">
                                <div className={`card-body ${styles.servicesCardBody}`}>
                                    <img className='mb-3' src='https://certontech.com/assets/images/element/online.svg' />
                                    <h4 className={styles.ourServicesCardTitle}>UI/UX & DESIGN THINKING</h4>
                                    <p className={styles.ourServicesCardSubText}>Our unparalleled group of professionals provide adept UI/UX services that {`aren't`} about designs alone. We make design a scientific process. We combine deeper methods of heuristic evaluation to build predictability in design decisions made for digital experiences.</p>
                                </div>
                            </div>
                            {/* </div> */}

                        </SwiperSlide>

                    )}
                </Swiper> :
                    <div className='row'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, i) =>
                            <div className="col-md-4 mb-3" key={i}>
                                <div className="card shadow border-0" key={i}>
                                    <div className={`card-body ${styles.servicesCardBody}`}>
                                        <img className='mb-3' src='https://certontech.com/assets/images/element/online.svg' />
                                        <h4 className={styles.ourServicesCardTitle}>UI/UX & DESIGN THINKING</h4>
                                        <p className={styles.ourServicesCardSubText}>Our unparalleled group of professionals provide adept UI/UX services that {`aren't`} about designs alone. We make design a scientific process. We combine deeper methods of heuristic evaluation to build predictability in design decisions made for digital experiences.</p>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                }

            </div>
        </div>
        // </div>
    )


};

export default OurServicesCard;