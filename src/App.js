import { Routes, Route} from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Home from  './routes/home/home.component';
import Navigation from  './routes/navigation/navigation.component';


const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
