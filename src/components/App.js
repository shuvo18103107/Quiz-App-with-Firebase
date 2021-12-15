import '../styles/App.css';
import Layout from './Layout';
import Nav from './Nav';
import Result from './pages/Result';

export default function App() {
    return (
        <div>
            <Nav />
            <Layout>
                <Result />
            </Layout>
        </div>
    );
}
