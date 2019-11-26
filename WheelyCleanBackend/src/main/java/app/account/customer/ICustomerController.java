/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.account.customer;

import app.request.WashRequest;
import java.util.List;

/**
 *
 * @author Felix
 */
public interface ICustomerController {
    public Customer addNewCustomer(Customer cleaner);
    
    public Customer getCustomerById(int id);
    
    public List<Customer> getAllCustomers();
    
    public List<WashRequest> getAllRequestsOfCustomer(int id);
    
}
