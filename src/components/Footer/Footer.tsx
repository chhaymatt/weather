const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://matthewchhay.com/">{`${year} | Made by Matthew Chhay`}</a>
		</footer>
	);
};

export default Footer;
