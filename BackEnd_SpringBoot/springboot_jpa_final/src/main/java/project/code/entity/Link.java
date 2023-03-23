package project.code.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.relational.core.mapping.Table;

@Entity
@Table(name="Link")
public class Link {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int id;
	private int cid;
	private int tid;
	private String link;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	@Override
	public String toString() {
		return "Link [id=" + id + ", cid=" + cid + ", tid=" + tid + ", link=" + link + "]";
	}
	public Link() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Link(int id, int cid, int tid, String link) {
		super();
		this.id = id;
		this.cid = cid;
		this.tid = tid;
		this.link = link;
	}
	
	
	
	
	
	
	

}
