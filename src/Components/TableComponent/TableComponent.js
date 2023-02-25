import React, { useContext } from "react";
import styles from "./Table.module.css";
import { isNullOrEmpty } from "../../Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Utils/AuthContext";

const Table = (props) => {
  const ctx=useContext(AuthContext);
  const editChangeHandler=(event)=>{
    console.log(event);
    ctx.openForm();
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Action</th>
          {isNullOrEmpty(props.columns)?[]:props.columns.map((column,index)=>{
            return (
              <th key={index}>{column.title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {isNullOrEmpty(props.data)?[]: props.data.map((item)=>{return(
            <tr key={item.id}>
                 <td>
              <span className={styles.action} onClick={editChangeHandler}>
                <FontAwesomeIcon icon={faEdit} />
              </span>
              <span className={styles.action} onClick={() => {console.log("Deleted Clicked...")}}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </td>
            {isNullOrEmpty(props.columns)?[]:props.columns.map((column,index)=>{
              return(
               <td key={index}>{item[column.field]}</td>
              )
            })}
          </tr>
        )
        })}
          
         
      </tbody>
    </table>
  );
};

export default Table;
