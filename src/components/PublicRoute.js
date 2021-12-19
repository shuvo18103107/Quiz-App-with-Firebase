import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../contexts/AuthContext';

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return !currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Redirect to="/" />
    );
}
