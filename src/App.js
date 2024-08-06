import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // HttpLink,
  // from,
} from "@apollo/client";

// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, location, path }) => {
//       alert(`GraphQL Error: ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({
//     uri: "http://localhost:3000/frontend-react-wouessi-website-v2/",
//   }),
// ]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://alpha.wouessi.ca/admin/graphql", // link to the backend server
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App bg-[#F4F4F4]">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/"
              element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/AboutUs"
              element={<AboutUs />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/Services"
              element={<Services />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/Products"
              element={<Products />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/Portfolio"
              element={<Portfolio />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/ContactUs"
              element={<ContactUs />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/Insights"
              element={<Insights />}></Route>
          </Routes>
          <Routes>
            <Route
              path="frontend-react-wouessi-website-v2/Careers"
              element={<Careers />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
