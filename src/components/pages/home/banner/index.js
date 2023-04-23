
import styles from './banner.module.scss';

const Banner = () => {


    return (
        <div class="container">
            <div className={styles.bannerContiner}>


                <div className="row h-100 ">
                    <div className="col-md-6 h-100 d-flex align-items-center justify-content-center">

                        <div className={styles.bannerTitleContiner}>
                            <h4 className={styles.bannerTitle}>Next generation</h4>
                            <h4 className={styles.bannerTitle}>Software and Technology solutions </h4>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                        </div>

                    </div>

                    <div className='col-md-6'>
                        <img className={`img-fluid ${styles.bannerImage}`} src='/why-us.png' />

                    </div>
                </div>
            </div>
        </div>
    )


};

export default Banner;