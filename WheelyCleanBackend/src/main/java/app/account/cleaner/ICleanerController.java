/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.account.cleaner;

import app.request.WashRequest;
import java.util.List;
import java.util.Set;

/**
 *
 * @author Felix
 */
public interface ICleanerController {
    public Cleaner addNewCleaner(Cleaner cleaner);
    
    public Cleaner getCleanerById(int id);
    
    public List<Cleaner> getAllCleaners();
    
    public Set<WashRequest> getRequests(int id);
}
