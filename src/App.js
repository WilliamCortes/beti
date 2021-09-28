// import React from 'react';
// import { Login } from './components/Login';
// // import { SignUp } from './components/SignUp';
// import { Home } from './components/Home';
// import { Register } from './components/Register'

// // import { AuthProvider } from './context/AuthContext';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import { PrivateRoute } from './components/PrivateRoute';
// import './App.css';

// function App() {
//   return (
//     <>
//       <Router>
//         {/* <AuthProvider> */}
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route exact path='/login' component={Login} />
//             <Route exact path='/register' component={Register}/>
//             {/* <Route exact path='/signup' component={SignUp} /> */}
//           </Switch>
//         {/* </AuthProvider> */}
//       </Router>
//     </>
//   );
// }

// export default App;

import './App.css';

import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';

import { AuthProvider } from './context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
