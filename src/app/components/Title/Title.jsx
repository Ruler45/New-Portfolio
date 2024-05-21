import styles from "./Title.module.scss";

const Title = ({ title = "Title" }) => {
  return (
    <div className={styles.title}>
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
