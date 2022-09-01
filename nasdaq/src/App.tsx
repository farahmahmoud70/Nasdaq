import './App.css';
import { Layout } from './app/components/layout/Layout';
import Header from './app/components/header/Header';
import Footer from './app/components/footer/Footer';
import { GlobalStyles } from './app/style/Global';
import AppRoutes from './Routes';

const App = () => {

  return <>
    <GlobalStyles />
    <Layout>
      <Header />
      <AppRoutes />
      <Footer />
    </Layout>
  </>
}

export default App;
