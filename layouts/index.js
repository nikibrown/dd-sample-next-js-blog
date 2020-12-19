import Footer from "components/Footer";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <main className="animate__animated animate__shakeY">
	<h1>This is a change!!!!111111</h1>
		{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
