import appDataConstant from "../constants/appData.constants";

const appDataReducer = (state, action) => {
  switch (action.type) {
    case appDataConstant.Get_App_Data:
      return {
        ...state,
        packages: action.payload.packages,
        customers: action.payload.customers,
      };

    case appDataConstant.Add_Package: {
      const packages = state.packages;
      const data = action.payload.data;
      //get the first customer customers based on payload data (customerid)
      let customer = state.customers.find(
        (customer) => customer.id === Number(data.customerid)
      );
      //the new package infromation that will add to the packages list
      let newPackage = {
        ...data,
        id: `pak${packages.length + 1}`,
        shippingOrder: packages.length + 1,
        customer,
        weight: `${data.weight}kg`,
      };
      return {
        ...state,
        packages: [...packages, newPackage],
      };
    }
    //make switch between the current package and the previous package
    case appDataConstant.Move_Package_Up: {
      const pacakageIndex = action.payload.pacakageIndex;
      const packages = state.packages;
      const currentPackage = packages[pacakageIndex];
      const prevPackage = packages[pacakageIndex - 1];
      //put the prev Package data inside the current package index except shippingOrder
      packages[pacakageIndex] = {
        ...prevPackage,
        shippingOrder: currentPackage.shippingOrder,
      };
      //put the current Package data inside the prev package index except shippingOrder
      packages[pacakageIndex - 1] = {
        ...currentPackage,
        shippingOrder: prevPackage.shippingOrder,
      };
      //put the new packages inside the state
      return {
        ...state,
        packages: [...packages],
      };
    }
    //make switch between the current package and the next package
    case appDataConstant.Move_Package_Down: {
      const pacakageIndex = action.payload.pacakageIndex;
      const packages = state.packages;
      const currentPackage = packages[pacakageIndex];
      const nextPackage = packages[pacakageIndex + 1];
      //put the next Package data inside the current package index except shippingOrder
      packages[pacakageIndex] = {
        ...nextPackage,
        shippingOrder: currentPackage.shippingOrder,
      };
      //put the current Package data inside the next package index except shippingOrder
      packages[pacakageIndex + 1] = {
        ...currentPackage,
        shippingOrder: nextPackage.shippingOrder,
      };
      //put the new packages inside the state
      return {
        ...state,
        packages: [...packages],
      };
    }
    
    case appDataConstant.Delete_Package:
      return {
        ...state,
        packages: state.packages.filter(
          (pack) => pack.id !== action.payload.id
        ),
      };

    case appDataConstant.Get_Customer_By_Id:
      let customer = state.customers.find(
        (customer) => customer.id === action.payload.id
      );
      return {
        ...state,
        customer,
      };

    case appDataConstant.Delete_Customer:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload.id
        ),
      };

    case appDataConstant.Get_Customer_Packages:
      let customerPackages = state.packages.filter(
        (pack) => pack.customerid === action.payload.customerId
      );
      return {
        ...state,
        customerPackages,
      };

    default:
      return state;
  }
};

export default appDataReducer;
