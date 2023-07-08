import { Landing } from './components/Landing/Landing';
import { History } from './components/History/History';
import { Climb } from './components/Climb/Climb';

import './App.scss'
import { StickyNav } from './components/StickyNav/StickyNav';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
            <Landing />
            <StickyNav />
            <History />
            <Climb />
            <Footer />
        </>
    );
}

export default App
