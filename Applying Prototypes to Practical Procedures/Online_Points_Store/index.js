import Customer from "./Class/User/Customer.js";
import Administrator from "./Class/User/Administrator.js";

const testCustomer = new Customer("Bob", "bob@test.com", "12345", 0);
const testAdmin = new Administrator("Admin", "admin@admin.com", "12345", true);

testCustomer.aloo();

const testProduct = testAdmin.AddProduct("Test", 10, 10, 10, "Test");

testProduct.paloo();