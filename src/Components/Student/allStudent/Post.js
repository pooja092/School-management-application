  import React,{useState , useEffect} from "react";
  //  import './style.css';
  import ModalCamp from "./ModalCamp";
import View from "./View";
import { Link } from "react-router-dom";

  import { useDispatch, useSelector } from "react-redux";
  import {  useNavigate, useParams } from "react-router-dom";
import Example from "./Modal";
import { DataObject } from "@mui/icons-material";
  // import { updatePost } from "../../../reducer/action/Action";
  //  import { Button, Container, Row, Table } from "react-bootstrap";
  //  import { DataGrid } from "@mui/x-data-grid";





   const Post = ({ post }) => {

  
    // const [product, setProduct] = useState([]);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
   
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // const {id} = useParams();
    // const posts = useSelector(state => state.posts. data)
    // const existingUser = posts.filter(f => f.id == id);
    // const {sr,firstname,lastname,
    //   doa,cla,dob, age,gender,board
    
    // } = existingUser[0];  

  //   const [sr, setsr] = useState("")
  //   const [firstname,setfirstname] = useState("")
  //   const [lastname, setLastname] = useState("");
  //   const [doa, setDoa] = useState("");
  //  const [cla, setCla] = useState("");
  //  const [dob, setDob] = useState("");
  //  const [age, setAge] = useState("");
  //  const [gender, setGender] = useState("");
  //  const [board, setBoard] = useState("");
   const navigate  = useNavigate("");

     
    // const [fullscreen, setFullscreen] = useState(true);
    // const [show, setShow] = useState(false);


    const handleModel = () => {
      setOpen(true);
      setUser(post);

    }



    // const handleShow = (id) => {
    //   setOpen(true);
    //   setUser(id);
    // }

    // function handleShow(item) {
    //   setFullscreen(true);
    //   setShow(item);
    // }


  //  const updatePost = (id, data) => {
  //   dispatch(updatePost({id,data}))
    
  //   }


  //  const  handleUpdate =(event) => {
  //   event.preventDefault();
  //       dispatch(updatePost({
  //            id:id,
  //            post:sr,
  //            post:firstname,
  //            post:lastname,
  //            post:doa,
  //            post:cla,
  //            post:dob,
  //            post:age,
  //            post:gender,
  //            post:board,
         

  //       }))
  //  }


  //   else {
  //     try {
  //         await updatePost(doc(db, "home", id), {
  //             ...data, });state.data.push(action.update)
  //     } catch (error) {
  //         console.log(error)
  //     }

  // }
  
    
  const obj = {

     sr:post.sr,
     firstname:post.firstname,

  }


  



    return (

      <>






        <tbody 
        // onSubmit={handleUpdate}
         >
      
          <tr>

           

          {/* <div>
            <img width={"50%"} src={post.image} />
          </div> */}
            <td>{post.sr}</td>
            <td>{post.firstname}</td>
            <td>{post.lastname}</td>
            <td>{post.doa}</td>
            <td>{post.cla}</td>
            <td>{post.dob}</td>
            <td>{post.age}</td>
            <td>{post.gender}</td>
            <td>{post.board}</td>
            {/* <td>{post.sibling}</td>
            <td>{post.aadhar}</td>
            <td>{post.contact}</td>
            <td>{post.category}</td>
            <td>{post.father}</td>
            <td>{post.mother}</td> 
             <td>{post.foccupation}</td>
            <td>{post.moccupation}</td>
            <td>{post.presentaddress}</td>
            <td>{post.permanentaddress}</td>
            <td>{post.city}</td>
            <td>{post.religion}</td> */}
         
   
           
              {/* <button onClick={()=> navigate(`/edit/${post.id}`) } > Update</button> */}
        
           
                  {/* <Link to="/view" className="view-link" onClick={() => handleShow(post.id)}  >View</Link> */}
                 <button className="view-btn" onClick={() => handleModel()} >View</button>
                 
              {/* <Link to={`/edit/${post.id}`} className="view-btn"> Edit </Link> */}
           {/* <Example onClick={()=>(obj)} />  */}
           
            {/* <button className="view-btn" onClick={() => navigate(`/edit/${post.id}`)}>Update </button> */}
          
           
            

            
      

          {open && (
            <ModalCamp
            
              open={open}
              setOpen={setOpen}
              // updatePost={updatePost}
              {...user}
            />
          )}

        
         
         </tr>
          
        </tbody>


      
     
        
      </>
    );
  };

  export default Post;
