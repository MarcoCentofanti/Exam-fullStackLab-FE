import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`py-4 mt-5 ${styles.footer}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className={`mb-0 ${styles.accent}`}>© 2026 Libreria Verde</p>
        <p className="mb-0">Progetto didattico Full Stack</p>
      </div>
    </footer>
  );
}
