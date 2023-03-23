package project.code.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Link;
import project.code.repository.LinkRepository;

@Service
public class LinkDAO {
	
	@Autowired
	private LinkRepository linkRepository;

	public Link uploadLinkInfo(Link link) {
		 
		if((linkRepository.findLinkByCidAndTid(link.getCid(), link.getTid())==null))
	return linkRepository.save(link);
		else {
			
			Optional<Link> op=Optional.of(linkRepository.findLinkByCidAndTid(link.getCid(),link.getTid()));
		//	System.out.println(op+"++++++++++++++++++++++++++++++++++++++++++");
			if(op.isPresent()) {
				Link l=op.get();
				
				l.setCid(link.getCid());
				l.setTid(link.getTid());
				l.setLink(link.getLink());
				linkRepository.save(l);
			//	System.out.println(l+"___________________________________________");
				
			}
		
			return link;
		}
			
		
	}

	public Link getLink(int cid, int tid) {
		return linkRepository.findLinkByCidAndTid(cid, tid);
	}
	
	

}
