import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../contexts/AuthContext';

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return !currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route> // je component pathacii setai o jodi props pathai taile render props paatern e evabe pathabo
    ) : (
        <Redirect to="/" />
    );
}

// user login state e thakle signup ba login er jonno abar oi page gulai pathabo na just home e redirect kore dibo r na hole as usual signup ba login route define kore dibo
