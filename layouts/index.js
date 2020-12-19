import Footer from "components/Footer";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <main className="animate__animated animate__shakeY">
	<h1 style="text-align: center">This is a change!!!!</h1>
		{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
