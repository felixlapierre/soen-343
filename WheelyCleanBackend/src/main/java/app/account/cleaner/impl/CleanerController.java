package app.account.cleaner.impl;

import app.utils.NoContentException;
import app.account.cleaner.Cleaner;
import app.account.cleaner.CleanerRepository;
import app.account.cleaner.ICleanerController;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import app.request.WashRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CleanerController implements ICleanerController {
    private final CleanerRepository repository;

    @Autowired
    public CleanerController(CleanerRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/cleaner")
    public @ResponseBody Cleaner addNewCleaner(@RequestBody Cleaner cleaner) {
        repository.save(cleaner);
        return cleaner;
    }

    @GetMapping("/cleaner")
    public @ResponseBody Cleaner getCleanerById(@RequestParam int id) {
        Optional<Cleaner> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get();
        } else {
            throw new NoContentException("cleaner", id);
        }
    }

    @GetMapping("/cleaner/all")
    public @ResponseBody List<Cleaner> getAllCleaners() {
       return repository.findAll();
    }

    @GetMapping("/cleaner/requests")
    public @ResponseBody Set<WashRequest> getRequests(@RequestParam int id) {
        Optional<Cleaner> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get().getRequests();
        } else {
            throw new NoContentException("cleaner", id);
        }
    }
}
