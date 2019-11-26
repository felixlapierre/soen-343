/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.request;

import java.util.List;

/**
 *
 * @author Felix
 */
public interface IRequestController {
    public WashRequest addNewWashRequest(WashRequest washRequest);
    
    public WashRequest updateRequest(WashRequest washRequest);
    
    public WashRequest getWashRequestById(int id);
    
    public List<WashRequest> getAllWashRequests();
}
