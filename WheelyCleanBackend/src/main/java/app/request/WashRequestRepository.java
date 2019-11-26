package app.request;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WashRequestRepository extends JpaRepository<WashRequest, Integer> {
    
}
