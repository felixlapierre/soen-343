package app.account.cleaner.impl;

import app.account.cleaner.Cleaner;
import app.account.cleaner.CleanerRepository;
import app.request.WashRequest;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class CleanerControllerTest {


    private CleanerController cleanerController;
    private Cleaner cleanerMock;
    private CleanerRepository cleanerRepositoryMock;
    private Set<WashRequest> washRequestHashSet = new HashSet<>();

    @Before
    public void setUp() {
        cleanerRepositoryMock = mock(CleanerRepository.class);
        cleanerMock = mock(Cleaner.class);
        cleanerController = new CleanerController(cleanerRepositoryMock);
    }

    @After
    public void tearDown() {
        cleanerController = null;
        cleanerMock = null;
        cleanerRepositoryMock = null;
        washRequestHashSet = null;
    }

    @Test
    // check if save is triggered one time when addNewCleaner function is called
    public void addNewCleaner() {
        cleanerController.addNewCleaner(cleanerMock);
        verify(cleanerRepositoryMock, times(1)).save(cleanerMock);
    }

    @Test
    // check if returned value is the same as mocked value
    public void getCleanerById() {
        when(cleanerRepositoryMock.findById(1)).thenReturn(Optional.of(cleanerMock));
        Cleaner returnCleaner = cleanerController.getCleanerById(1);
        assertEquals(returnCleaner, cleanerMock);
    }

    @Test
    // verify findAll() is called once
    public void getAllCleaners() {
        cleanerController.getAllCleaners();
        verify(cleanerRepositoryMock, times(1)).findAll();
    }

    @Test
    // check if returned value requests are the same as mocked requests
    public void getRequests() {
        when(cleanerRepositoryMock.findById(1)).thenReturn(Optional.of(cleanerMock));
        when(cleanerMock.getRequests()).thenReturn(washRequestHashSet);
        Set<WashRequest> returnWashRequestHashSet = cleanerController.getRequests(1);
        assertEquals(returnWashRequestHashSet, washRequestHashSet);
    }
}