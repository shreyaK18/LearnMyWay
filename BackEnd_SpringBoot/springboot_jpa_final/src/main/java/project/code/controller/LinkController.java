package project.code.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.code.dao.LinkDAO;
import project.code.entity.Link;

@CrossOrigin(origins ="http://localhost:3000" )
@RestController
public class LinkController {
	
	@Autowired
	private LinkDAO linkDAO;
	
	@PostMapping("/uploadlinkinfo")
	public Link uploadLinkInfo(@RequestBody Link link) {
		
		Link l=linkDAO.uploadLinkInfo(link);
		System.out.println(l);
		 return l;
		
	}
	
	@GetMapping("/getlink/{cid}/{tid}")
	public String getLink(@PathVariable int cid,@PathVariable int tid)
	{
		Link l= linkDAO.getLink(cid,tid);
		String slink=l.getLink();
		System.out.println(slink);
		return slink;
	}

}
