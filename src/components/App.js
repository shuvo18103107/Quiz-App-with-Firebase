import '../styles/App.css';
import Layout from './Layout';
import Nav from './Nav';
import Login from './pages/Login';

export default function App() {
    return (
        <div>
            <Nav />
            <Layout>
                <Login />
            </Layout>
        </div>
    );
}
