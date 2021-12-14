import '../styles/App.css';
import Layout from './Layout';
import Nav from './Nav';
import Home from './pages/Home';

export default function App() {
    return (
        <div>
            <Nav />
            <Layout>
                <Home />
            </Layout>
        </div>
    );
}
