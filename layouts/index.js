import Footer from "components/Footer";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <main className="animate__animated animate__fadeIn">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
