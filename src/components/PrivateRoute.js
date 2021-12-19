import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Redirect to="/login" />
    );
}

// note:

// ekahne props akare componnet er vitor quize ace direct route e componnet use korbo na cg tokhn eta r ekta component expect korbe karon amra route e component ={quize} evabe dei , ekhane component e kicu nai tai dicii na jodi deowar drkr hoto tokhn  <PrivateRoute exact path="/quize" component={<Quize result ="5" />} /> evabe pathatam
/*
important note : routing e  component e props pathate chaile  2 ta way ekta holo children akare use kore cg component ba children 2 vabei route oi component take denote kore
/*
 1. <Route>
 <Component props =" shuvo" />

 </Route>
 2. <Route render = {()=> countercomponent tick="5"}> or 
 <Route >
  {()=> countercomponent tick="5"}
  </Route>
cg render props children ba props 2 vabei kaj kore Route ta children ba props hisavei etake call kore component ke denote korbe
 / ekhn Route ta children ba component ba render props sob khetrei je component dibo etake call kore dei , ekhane render props style dici amra jani render props hiseve ba child hisave dile je component e render props use hoi seta children ba oi render props call kore e rmodee data vore dei , ekhane router ta render props children ba props hisave use hoice so router call korbe ekhn 
 */
/*
amra chaile component ta just props hisave nite partam ekhane component ta {quize} component ke denote kore kintu jodi quize component er abar props thakto ei khetre jodio nai kintu jodi thakto tokhn sei quize component er props gula amra r petam na , tai component ke direct props hisave na niye aliasing kore render props hisave pass korle quize er vtorer props o pabo 
*/
