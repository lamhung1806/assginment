/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllUser, nextPageUserAction, PreviosPageUserAction} from '../../redux/actions/userActions'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function User() {
  const userList = useSelector(state => state.user.userList)
  const currentPage = useSelector(state => state.user.currentPage)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUser())
  },[currentPage])
  const handleClickNext =()=>{
    if(currentPage < 10){
      dispatch(nextPageUserAction(currentPage))
    }
  }
  const handleClickPrev =()=>{
  if(currentPage > 1) {
    dispatch(PreviosPageUserAction(currentPage))
  }
  }
    return (
        <> 
        <div className="text-center">

    <FontAwesomeIcon onClick={handleClickPrev} icon={faAngleLeft}/>
    <span className="m-4" >{currentPage}</span>
    < FontAwesomeIcon onClick={handleClickNext} icon={faAngleRight}/>
        </div>
           <table className="table">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Thumbnail Icon</th>
         
          </tr>
        </thead>
        <tbody>
          { ( userList).map((data,id)=>(
             <tr key={id}>
             <td>{`${data.name.title}  ${data.name.first}  ${data.name.last} ` }</td>
             <td>{data.login.username}</td>
             <td>
               <img src={data.picture.thumbnail} alt="Thumbnail Icon" />
             </td>
           </tr>
          ))}
         
        
        </tbody>
      </table>
        </>
     
    );
}

export default User;