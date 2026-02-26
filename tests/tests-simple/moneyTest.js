import {formartCurrency} from '../../scripts/utils/money.js';
console.log('Test suite: Format currency')
console.log('converets cents into dollars')
if (formartCurrency(2095) === '20.95'){
  console.log('passed');
}else {
  console.log('failed');
}
console.log('Works with zero')
if (formartCurrency(0)=== '0.00'){
  console.log('passed')
}else {
  console.log('failed');
}
console.log('Rounds up to the nearest cents')
if (formartCurrency(2000.5)==='20.01'){
  console.log('passed')
}else {
  console.log('failed');
}
console.log('round up to the nearest cents')
if (formartCurrency(2000.4)=== '20.00'){
  console.log('passed')
}else {
  console.lof('failed');
}