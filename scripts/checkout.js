
import {cart,removeFromCart,updateDeliveryOption} from '../data/cart.js';
import {products} from '../data/products.js';
import {formartCurrency} from './utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../data/deliveryOption.js'
import { renderOrderSummary } from './checkout/order.js';

renderOrderSummary();