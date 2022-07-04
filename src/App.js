import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CustomerPage from "./pages/Thecustomerpage/CustomerPage";
import PackageList from "./pages/packagelist/PackageList";
import InvoiceList from "./pages/InvoiceList/InvoiceList";
import Invoice from "./pages/Invoice/Invoice";
import Bar from "./Layout/Bar";
import SideList from "./Layout/SideList";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import { AppProvider } from "./context/context";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Bar setOpen={setOpen} />
          <Switch>
            <Route path="/PackageList">
              <PackageList />
            </Route>

            <Route path="/InvoiceList">
              <InvoiceList />
            </Route>

            <Route path="/Invoice/:id">
              <Invoice />
            </Route>

            <Route exact path="/">
              <CustomerPage />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <SideList open={open} setOpen={setOpen} />
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
