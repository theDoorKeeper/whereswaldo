import React, { useEffect, useState } from 'react'
import secondsToHms from '../helper-functions/convertHMS';

function Timer(props) {
    const {isDoneLoading, isGameOver} = props ;
    const [time, setTime] = useState('00:00:00');
    const [sec, setSec] = useState(1);

    useEffect(() => {
           if (isDoneLoading && !isGameOver){
        setTimeout(()=>{
           setSec(previousState => {
               return previousState+1
           });
            setTime(secondsToHms(sec));
        },1000)
              }

    }, [sec,isDoneLoading,isGameOver])
    return (
        <div>
            {time}
        </div>
    )
}

export default Timer
