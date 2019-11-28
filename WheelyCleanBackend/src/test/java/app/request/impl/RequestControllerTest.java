package app.request.impl;

import app.account.cleaner.Cleaner;
import app.account.cleaner.CleanerRepository;
import app.account.customer.Customer;
import app.account.customer.CustomerRepository;
import app.request.WashRequest;
import app.request.WashRequestRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class RequestControllerTest {

    private RequestController requestController;
    private WashRequestRepository washRequestRepositoryMock;
    private CustomerRepository customerRepositoryMock;
    private CleanerRepository cleanerRepositoryMock;
    private WashRequest washRequestMock;
    private Customer customerMock;
    private Cleaner cleanerMock;

    @Before
    public void setUp() {
        washRequestRepositoryMock = mock(WashRequestRepository.class);
        customerRepositoryMock = mock(CustomerRepository.class);
        cleanerRepositoryMock = mock(CleanerRepository.class);
        washRequestMock = mock(WashRequest.class);
        customerMock = mock(Customer.class);
        cleanerMock = mock(Cleaner.class);
        requestController = new RequestController(washRequestRepositoryMock, customerRepositoryMock, cleanerRepositoryMock);
    }

    @After
    public void tearDown() {
        requestController = null;
        cleanerRepositoryMock = null;
        customerRepositoryMock = null;
        washRequestRepositoryMock = null;
        washRequestMock = null;
        customerMock = null;
        cleanerMock = null;
    }

    @Test
    // check if save is triggered one time when addNewWashRequest function is called
    public void addNewWashRequest() {
        this.setCustomerIdAndCleanerIdPreConditions();
        requestController.addNewWashRequest(washRequestMock);
        this.validateCustomerIdAndCleanerId();
        verify(washRequestRepositoryMock, times(1)).save(washRequestMock);
    }

    @Test
    // check if save is triggered one time when updateRequest function is called
    public void updateRequest() {
        this.setCustomerIdAndCleanerIdPreConditions();
        requestController.updateRequest(washRequestMock);
        this.validateCustomerIdAndCleanerId();
        verify(washRequestRepositoryMock, times(1)).save(washRequestMock);
    }

    @Test
    // check if returned value is the same as mocked value
    public void getWashRequestById() {
        when(washRequestRepositoryMock.findById(1)).thenReturn(Optional.of(washRequestMock));
        WashRequest returnWashRequest = requestController.getWashRequestById(1);
        assertEquals(washRequestMock, returnWashRequest);
    }

    @Test
    // verify findAll() is called once
    public void getAllWashRequests() {
        requestController.getAllWashRequests();
        verify(washRequestRepositoryMock, times(1)).findAll();
    }

    // set conditions for validation of cleaner and customer
    private void setCustomerIdAndCleanerIdPreConditions() {
        when(washRequestMock.getCustomerAccountId()).thenReturn(1);
        when(customerRepositoryMock.findById(1)).thenReturn(Optional.of(customerMock));
        when(washRequestMock.getCleanerAccountId()).thenReturn(1);
        when(cleanerRepositoryMock.findById(1)).thenReturn(Optional.of(cleanerMock));

    }

    // verify setters functions are called
    private void validateCustomerIdAndCleanerId() {
        verify(washRequestMock, times(1)).setCustomer(customerMock);
        verify(washRequestMock, times(1)).setAssignedCleaner(cleanerMock);
    }
}