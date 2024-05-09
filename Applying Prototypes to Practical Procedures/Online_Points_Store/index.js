import Customer from "./Class/User/Customer.js";
import Administrator from "./Class/User/Administrator.js";
import ProductCategory from "./Class/ProductCategory.js";

const testCustomer = new Customer("Bob", "bob@test.com", "12345", 0);
const testAdmin = new Administrator("Admin", "admin@admin.com", "12345", true);

const testProduct = testAdmin.AddProduct("Test", 10, 10, 10, new ProductCategory("test", "test"));
const testProduct2 = testAdmin.AddProduct("Test2", 20, 20, 20, new ProductCategory("test", "test"));

console.log(testProduct);

const testArray = [testProduct, testProduct2];

const testNewOrder = testCustomer.CreateOrder(testArray);
console.log(parseInt(testArray.reduce((a, b) => a + b.price, 0) / 3));

console.log(testNewOrder);

testNewOrder.sendOrder();

if (testNewOrder.sentState) {
    testCustomer.totalPoints += testNewOrder.activity.awardedPoints;
}

console.log(testCustomer);
console.log(testNewOrder);