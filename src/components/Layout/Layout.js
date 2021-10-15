import { Children } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout=({children})=>{
    return(<>
            <header>
                <Header />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
          </>)
}
export default Layout;
