import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Quize from './pages/Quize';
import Result from './pages/Result';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PublicRoute exact path="/signup" component={Signup} />
                        <PublicRoute exact path="/login" component={Login} />

                        <PrivateRoute exact path="/quize/:id" component={Quize} />
                        <PrivateRoute exact path="/result/:id" component={Result} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

// private router er jonno ekta HOC banabo jeta login state check kore route ta return korbe
// component gulai props pathano drkr hoile children hisave use kore props pathate pari oi componnet e like <Route> <Home props ="shuvo"/>

// componnet gulate props pass korar 2nd way holo render props hisave pass kora  <Route exact path="/login" render={()=> <signup props ='active' />} />
