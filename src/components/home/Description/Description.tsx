import Image from "next/image";
import styles from "./Description.module.sass";

export function Description() {
  return (
    <section className={styles.Description}>
      <Image
        src="/images/description.jpeg"
        alt="products marketplace"
        width={500}
        height={300}
      />
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a
          facilis quod commodi quisquam maxime distinctio expedita rem, natus
          nisi!
        </p>
      </div>
    </section>
  );
}
