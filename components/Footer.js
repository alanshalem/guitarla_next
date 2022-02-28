import Link from "next/link";
import styles from "../styles/Footer.module.css";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`contenedor ${styles.contenido}`}>
				<nav className={styles.navegacion}>
					<Link href='/'>Inicio</Link>
					<Link href='/nosotros'>Nosotros</Link>
					<Link href='/blog'>Blog</Link>
					<Link href='/tienda'>Tienda</Link>
				</nav>
				<p className={styles.copyright}>
					Todos los derechos reservados &copy;{" "}
					{new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
