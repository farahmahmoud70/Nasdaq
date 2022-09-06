import { Routes, Route } from 'react-router-dom';
import Explore from './app/components/explore/Explore';
import StockDetails from './app/components/stockDetails/StockDetails';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/Stocks" element={<Explore />} />
      <Route path="/StockDetails" element={<StockDetails />} />
    </Routes>
  );
};
export default AppRoutes;
