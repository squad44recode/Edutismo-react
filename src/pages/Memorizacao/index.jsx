import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ant from "/src/assets/img/edutismo/ant.svg";
import apple from "/src/assets/img/edutismo/apple.svg";
import egg from "/src/assets/img/edutismo/egg.svg";
import ball from "/src/assets/img/edutismo/ball.svg";
import big from "/src/assets/img/edutismo/big.svg";

import styles from "/src/pages/Memorizacao/memo.module.css";


export default function Memorizacao() {
  return (
    <>
      <Header />
      <main className={styles.memoryGame}>
        <div className={styles.card}>
            <img className={styles.cardFront} src={ant} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card} data-card="luigi">
            <img className={styles.cardFront} src={ball} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card}>
            <img className={styles.cardFront} src={egg} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card}>
            <img className={styles.cardFront} src={big} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card}>
            <img className={styles.cardFront} src={ant} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card}>
            <img className={styles.cardFront} src={ball} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card}>
            <img className={styles.cardFront} src={egg} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
        <div className={styles.card}>
            <img className={styles.cardFront} src={big} alt="Face da carta"/>
            <img className={styles.cardBack} src={apple} alt="Verso da carta"/>
        </div>
    </main>
      <Footer />
      <script src="./script.js"></script>
    </>
  )
}
