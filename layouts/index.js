import Footer from "components/Footer";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <main >
	<h1 className="animate__animated animate__heartBeat">This is a change!!!!2222</h1>
		{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
