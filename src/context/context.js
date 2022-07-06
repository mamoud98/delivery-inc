import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";

import appDataConstant from "../constants/appData.constants";
import appDataReducer from "../reducers/appData.reducer";

const AppContext = React.createContext();

const initialState = {
  customers: [],
  packages: [],
  customer: null,
  customerPackages: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appDataReducer, initialState);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getAppData();
  }, []);

  //create invoices dynamiclly based on packages and customers
  const createInvoices = useCallback(() => {
    //to hold the invoices inside the array
    let invoices = [];

    state.customers.forEach((customer, index) => {
      //get the customer,s packages by customer ID
      let customerPackages = state.packages.filter(
        (pack) => pack.customerid === customer.id
      );
      //cheack if the customer has Packages
      if (customerPackages.length > 0) {
        let waightSum = 0;
        let priceSum = 0;
        customerPackages.forEach((pack) => {
          //removing "kg" and converting the weight to number to calculate the sum of the weight
          waightSum += Number(pack.weight?.replace("kg", ""));
          //converting the price to number to calculate the sum of the price
          priceSum += Number(pack.price);
        });

        let invoice = {
          id: Date.now() + index,
          customer: customer,
          totalWeight: waightSum,
          totalPrice: priceSum,
        };

        invoices.push(invoice);
      }
    });
    setInvoices(invoices);
  }, [state.customers, state.packages]);

  useEffect(() => {
    createInvoices();
  }, [createInvoices]);

  // get customers and packages from json file and sort responsed packages
  const getAppData = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        //make sort based on the shipping Order
        let sortedPackages = data.packages.sort(
          (prev, next) => prev.shippingOrder - next.shippingOrder
        );
        //make a new sorted Packages array that has the customer name for each package
        sortedPackages = sortedPackages.map((pack) => {
          let customers = data.customers;
          //get the first customer,s packages by customer ID
          let customer = customers.find(
            (customer) => customer.id === pack.customerid
          );
          pack.customer = customer;
          return pack;
        });

        dispatch({
          type: appDataConstant.Get_App_Data,
          payload: {
            customers: data.customers,
            packages: sortedPackages,
          },
        });
      });
  };
  //delete Customer based on Customer Id
  const deleteCustomer = (id) => {
    dispatch({
      type: appDataConstant.Delete_Customer,
      payload: {
        id,
      },
    });
  };
  //delete Package based on Package Id
  const deletePackage = (id) => {
    dispatch({
      type: appDataConstant.Delete_Package,
      payload: {
        id,
      },
    });
  };

  // reorder packages up in table and swap orderShipping
  const movePackageUp = (pacakageIndex) => {
    if (pacakageIndex > 0) {
      dispatch({
        type: appDataConstant.Move_Package_Up,
        payload: {
          pacakageIndex,
        },
      });
    }
  };
  // reorder packages up in table and swap orderShipping
  const movePackageDown = (pacakageIndex) => {
    if (pacakageIndex < state.packages.length - 1) {
      dispatch({
        type: appDataConstant.Move_Package_Down,
        payload: {
          pacakageIndex,
        },
      });
    }
  };

  const addPackage = (data) => {
    dispatch({
      type: appDataConstant.Add_Package,
      payload: {
        data,
      },
    });
  };

  const getCustomerById = useCallback((id) => {
    dispatch({ type: appDataConstant.Get_Customer_By_Id, payload: { id } });
  }, []);

  const getCustomerInvoice = useCallback(
    (customerId) => {
      //get the first customer,s packages by customer ID
      let invoice = invoices.find(
        (invoice) => invoice.customer.id === customerId
      );
      return invoice;
    },
    [invoices]
  );

  const getCustomerPackages = useCallback((customerId) => {
    dispatch({
      type: appDataConstant.Get_Customer_Packages,
      payload: { customerId },
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        getCustomerInvoice,
        getCustomerPackages,
        getCustomerById,
        addPackage,
        movePackageDown,
        movePackageUp,
        deletePackage,
        deleteCustomer,
        packages: state.packages,
        customers: state.customers,
        customer: state.customer,
        customerPackages: state.customerPackages,
        invoices,
        getAppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
