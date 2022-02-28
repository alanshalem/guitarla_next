import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pagina }) => {
	return (
		<div>
			<Head>
				<title>GuitarLA - {pagina}</title>
				<meta
					name='description'
					content='Sitio Web de venta de guitarras '
				/>
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
