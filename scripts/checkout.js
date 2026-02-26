
import { renderPaymentSummary } from './checkout/payementSummary.js';
import { renderOrderSummary } from './checkout/order.js';
import { loadProducts } from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadProducts(()=>{
renderOrderSummary();
renderPaymentSummary();
});
