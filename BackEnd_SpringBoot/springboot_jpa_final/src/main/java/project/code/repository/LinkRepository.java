package project.code.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import project.code.entity.Link;

@Repository
public interface LinkRepository extends JpaRepository<Link, Integer> {
	
	//@Query(value="select link from link where cid= ?1 and tid= ?2;",nativeQuery = true)
	public Link findLinkByCidAndTid(@PathVariable int cid,@PathVariable int tid);
	
	
	

}
