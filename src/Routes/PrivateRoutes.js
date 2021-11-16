// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// export default function PrivateRoute({
//   children,
//   redirectTo = '/auth',
//   ...routeProps
// }) {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
