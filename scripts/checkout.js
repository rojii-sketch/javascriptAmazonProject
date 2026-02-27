
import { renderPaymentSummary } from './checkout/payementSummary.js';
import { renderOrderSummary } from './checkout/order.js';
import { loadProducts,loadProductsFetch } from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
async function loadPage(){
 
  await loadProductsFetch();

 await new Promise((resolve)=>{
     loadCart(()=>{
      resolve();
     });
  });
 renderOrderSummary();
 renderPaymentSummary();
  
}
loadPage();
/*
Promise.all([
 loadProductsFetch(),
new Promise((resolve)=>{
     loadCart(()=>{
      resolve();
     });
  })
]).then((values)=>{
  console.log(values)
  renderOrderSummary();
    renderPaymentSummary();
});
*/
/*new Promise((resolve)=>{
  
  loadProducts(()=>{
    
    resolve('value1');
  });
}).then((value)=>{
  console.log(value)
  return new Promise((resolve)=>{
     loadCart(()=>{
      resolve();
     });
  });
 
}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/