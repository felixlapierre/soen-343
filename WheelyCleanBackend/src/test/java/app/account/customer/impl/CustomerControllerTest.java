package app.account.customer.impl;

import app.account.customer.Customer;
import app.account.customer.CustomerRepository;
import app.request.WashRequest;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.*;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;


public class CustomerControllerTest {

    private CustomerController customerController;
    private Customer customerMock;
    private CustomerRepository customerRepositoryMock;
    private List<WashRequest> washRequestArrayList = new ArrayList<>();

    @Before
    public void setUp() {
        customerMock = mock(Customer.class);
        customerRepositoryMock = mock(CustomerRepository.class);
        customerController = new CustomerController(customerRepositoryMock);
    }

    @After
    public void tearDown() {
        customerMock = null;
        customerRepositoryMock = null;
        customerController = null;
        washRequestArrayList = null;
    }

    @Test
    // check if save is triggered one time when addNewCleaner function is called
    public void addNewCustomer() {
        customerController.addNewCustomer(customerMock);
        verify(customerRepositoryMock, times(1)).save(customerMock);
    }

    @Test
    // check if returned value is the same as mocked value
    public void getCustomerById() {
        when(customerRepositoryMock.findById(1)).thenReturn(Optional.of(customerMock));
        Customer returnCustomer = customerController.getCustomerById(1);
        assertEquals(returnCustomer, customerMock);
    }

    @Test
    // verify findAll() is called once
    public void getAllCustomers() {
        customerController.getAllCustomers();
        verify(customerRepositoryMock, times(1)).findAll();
    }

    @Test
    // check if returned value requests are the same as mocked requests
    public void getAllRequestsOfCustomer() {
        when(customerRepositoryMock.findById(1)).thenReturn(Optional.of(customerMock));
        when(customerMock.getRequests()).thenReturn(washRequestArrayList);
        List<WashRequest> returnWashRequestList = customerController.getAllRequestsOfCustomer(1);
        assertEquals(returnWashRequestList, washRequestArrayList);
    }
}