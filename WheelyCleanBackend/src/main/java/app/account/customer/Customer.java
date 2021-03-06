/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.account.customer;

import app.request.WashRequest;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Felix & bean
 */
@Entity //This tells Hibernate to make a table out of this class
@Table(name = "customer")
public class Customer implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    @Column(name = "name")
    private String name;
    
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<WashRequest> requests;
    
    public Customer() {}
    public Customer(String name){
        this.name = name;
    }
    
    public int getId(){
        return this.id;
    }
    
    public void setName(String name){
        this.name = name;
    }
    public String getName (){
        return this.name;
    }

    public List<WashRequest> getRequests() {
        return requests;
    }

    public void setRequests(List<WashRequest> requests) {
        this.requests = requests;
    }
}
