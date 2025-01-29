import userModel from "../models/userModel.js";

//add items to cart

const addItemsToCart = async (request, response) => {
  try {
    let userData = await userModel.findById(request.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[request.body.itemId]) {
      cartData[request.body.itemId] = 1;
    } else {
      cartData[request.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(request.body.userId, { cartData });
    response.json({
      success: true,
      message: "Added To Cart",
    });
  } catch (error) {
    console.log(error);
    response.json({
      success: false,
      message: "Error",
    });
  }
};

const removeItemsFromCart = async (request, response) => {
  try {
    let userData = await userModel.findById(request.body.userId);
    let cartData = await userData.cartData;

    if (cartData[request.body.itemId] > 0) {
      cartData[request.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(request.body.userId, { cartData });

    response.json({
      success: true,
      message: "Removed From Cart",
    });
  } catch (error) {
    console.log(error);
    response.json({
      success: false,
      message: "Error",
    });
  }
};

// fetch user cart items
const getCart = async (request, response) => {
  try {
    const userData = await userModel.findById(request.body.userId);
    let cartData = await userData.cartData;
    response.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    response.json({ success: false, message: "Error" });
  }
};

export { addItemsToCart, removeItemsFromCart, getCart };
