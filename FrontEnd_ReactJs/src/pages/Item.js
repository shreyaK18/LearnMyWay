import React ,{useEffect, useNavigate, useState}from "react";
import { Link, Outlet,NavLink  } from "react-router-dom";
import Axios from "axios";




// React Component to display individual item
const Item= ({ course_name, teacher,course_start_date ,course_fee,course_id,course_teacher_id})=>{

  const [myData, setMyData] = useState([]);
  const [name, setName] = useState("");
  const tname=name

//get teacher name buy teacher id
// const getData = async () => {
//   try {

//       const res = await Axios.get(`http://localhost:8080/getteacher/${course_teacher_id}`)
//       if (res.data !== "") {
//           setMyData(res.data);
//           setName(myData.teacher_fname+" "+myData.teacher_lname)
//           console.log(name);
//       }
//       else { alert("Error!!!") }
//   }
//   catch (err) {
//       console.log(err)
//   }
// }

// useEffect(() => {
//   getData();+


// }, []);

  const handleClick = (event, param) => {
   // console.log(event);
    //console.log(param);
    localStorage.setItem("courseid", param);
    localStorage.setItem("tc_id",course_teacher_id);
  };

  // localStorage.setItem("courseid",course_id)


return(
  
  <div className="item-container1 ">
    <div>

    <div className="boxx">
    <img src="../assets/images/img7.jpg"/>
    <span className="item-label1">Name:</span>{course_name}<br/>
    {/* <span className="item-label1">Teacher Name:</span>{tname}<br/> */}
    <span className="item-label1">start date:</span>{course_start_date}<br/>
    <span className="item-label1">Fee :</span>{course_fee}<br/>
    <Link className=" btn btn-success" style={{ 'border': 'none', 'width': '50%' ,'font':'caption' }} to="/coursedetails" onClick={event=>handleClick(event,course_id)}>Register</Link>
  </div>
      {/* <span className="item-label1">Name:</span>
      {course_name}
    </div>
    <div>
      <span className="item-label1">Category:</span>
      {course_category}
    </div> */}
  </div>
  </div>
  );
};
  

export default Item;