import styles from "@/styles/Product.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Comments = ({ data }) => {
  return (
    <div className={styles["container-fluid pt-5"]}>
      <div className={styles.container}>
        <div className={styles["section-title "]}>
          <h4
            className={styles["text-primary text-uppercase "]}
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className={styles["display-4"]}>Product Comments</h1>
        </div>
        <div className={styles.row}>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {data.slice(0, 6).map((comment) => (
              <SwiperSlide className={styles.swiper_slide} key={comment.id}>
                <div className={styles["testimonial-item"]}>
                  <div className={styles["d-flex align-items-center mb-3"]}>
                    <img
                      className={styles["img-fluid"]}
                      width={100}
                      src={comment.profile}
                      alt=""
                    />
                    <div className={styles["ml-3"]}>
                      <h4>{comment.username}</h4>
                      <p className={styles["text-left mb-0"]}>User</p>
                    </div>
                  </div>
                  <p className={styles["m-0 mb-4"]}>{comment.body}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Comments;
