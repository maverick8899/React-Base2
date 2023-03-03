import styles from "./Home.module.scss";
// import Video from "../../assets/video-home.mp4";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={styles.container}>
      {/* <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video> */}
      <div className={cx("home")}>
        <div className={cx("title")}>There's a better way to ask</div>
        <div className={cx("content")}>
          You don't want to make a boring form. And your audience won't answer
          one. Create a type form instead—and make everyone happy.
        </div>
        <div className={cx("btn-start")}>
          <button>Get Started - It's free</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
