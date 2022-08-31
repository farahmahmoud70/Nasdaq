import './App.css';
import { Layout } from './app/components/layout/Layout';
import Header from './app/components/header/Header';
import MainSection from './app/components/mainSection/MainSection';
import Footer from './app/components/footer/Footer';
import { GlobalStyles } from './app/style/Global';

function App() {

  return <>
    <GlobalStyles />
    <Layout>
      <Header />
      <MainSection />
      <Footer />
    </Layout>
  </>
}

export default App;
