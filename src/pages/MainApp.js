import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import BigButton from '../components/buttons/BigButton';

const MainApp = _ => {
    const randomHandler = _ => {
        
    }

    return (
        <div
            className = "bg-white text-black text-center"
        >
            <Header />
            <h3>Deck Name</h3>
            <h2>Restaurant Name</h2>
            {/* Image Viewer */}
            <BigButton text="Random" onClick={randomHandler} />
            <Footer />
        </div>
    );
}

export default MainApp;