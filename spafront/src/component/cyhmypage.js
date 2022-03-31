import React, {useState , useEffect} from 'react';
import axios from 'axios';

function Cyhmypage() {
    const[ mytext , mytextUpdate ] = useState('세팅된 DB값');
  
    useEffect( async () => {
        axios({
            url : '/getsend',
            method : 'GET'
        })
        .then(res => {
            mytextUpdate(res.data)
        })
    } , [])
    return(
        <div>
            <h3>함수형 컴포넌트</h3>
            <p>useState에 의해 컴포넌트가 새로고침된다.</p>
            <p>get은 axios.get으로 응답받는다 : {mytext}</p>
        </div>
    )

};

export default Cyhmypage;
