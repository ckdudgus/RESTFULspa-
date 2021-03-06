import React, {useState , useEffect} from 'react';
import axios from 'axios';

const Cyhmypage = (props) => {
    let [ interviewId, interviewIdUpdate ] = useState([]);
    const [typeData,insertDB] = useState(0);
  
    const interviewDataSetting = async () => {

        axios({
            url : `/getsend?botable=${props.botable}`,
            method : 'GET'
        })
                .then(
                    (result) => {  
                        try{
                            console.log(result);
                            interviewIdUpdate([...result.data]);
                            insertDB(result.data[result.data.length - 1].keyno);
                        }
                        catch(err){ console.log(err.message) }
                    }
                )
                .catch( e => { console.log(e +'에러로 통신 제한') }
                ) 
    }

     useEffect( () => {  interviewDataSetting(); } , [typeData]  )          
        return (  
            <div><h2>{ interviewId.length > 0 ? "사전인터뷰" : "데이터 전송 중" }</h2>
            {
                interviewId.map(( contant, i ) => {
                    return(
                        <li>
                            <h3>{i+1} {contant.subject}</h3><div>{contant.content}</div>
                        </li>
                    )
                })
            }
            </div>
        );   

};


export default Cyhmypage;
