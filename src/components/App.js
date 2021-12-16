import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Layout from './Layout';
import Nav from './Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Quize from './pages/Quize';
import Result from './pages/Result';
import Signup from './pages/Signup';

export default function App() {
    return (
        <Router>
            <Nav />
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/quize" component={Quize} />
                    <Route exact path="/result" component={Result} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
}
