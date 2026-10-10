import { SideKickClient } from 'sidekick-client';
import 'sidekick-client/dist/index.css';
import './App.css';
import { Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {

  return (
    <SideKickClient
      appRoutes={[
        {
          path: '/',
          element: <Navigate to="/app/home" />,
        },
        {
          path: '/app/home',
          element: <HomePage />,
        },
      ]}
    />
  );
}

export default App;
