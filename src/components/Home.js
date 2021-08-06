import "../styles.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="root">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
