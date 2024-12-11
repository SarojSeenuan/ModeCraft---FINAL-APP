import { Navigation } from '../components/Navbar';

function ErrorPage() {
	return (
		<>
			<Navigation />
			<main>
				<h1>An error occured!</h1>
				<p>Could not find this page!</p>
			</main>
		</>
	);
}

export default ErrorPage;
