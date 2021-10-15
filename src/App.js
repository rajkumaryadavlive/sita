import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Welcome from './pages/Welcome';
import AppRouter from './routes';

function App() {
  return (
   
       <Layout>
         <AppRouter />
      </Layout>
  );
}

export default App;
