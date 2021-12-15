import '../styles/App.css';
import Layout from './Layout';
import Nav from './Nav';
import Quize from './pages/Quize';

export default function App() {
    return (
        <div>
            <Nav />
            <Layout>
                <Quize />
            </Layout>
        </div>
    );
}
