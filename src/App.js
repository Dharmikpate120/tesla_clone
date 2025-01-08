import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/fillUserInfo" element={<FillUserInfo />} />

        <Route path="/Profile" element={<ProfileNavbar />}>
          <Route path="personalInformation" element={<ProfilePage />} />
          <Route path="SellerInformation" element={<SellerProfile />} />
          <Route path="previousorders" element={<PreviousOrder />} />
          <Route path="Sellerform" element={<SellerForm />} />
          <Route path="addNewProduct" element={<AddProducts />} />
        </Route>
        <Route path="/userDetails" element={<UserDetails />} />

        <Route path="/Favourites" element={<LikedItems />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        <Route path="/paymentPage" element={<PaymentPage1 />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
