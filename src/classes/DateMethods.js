import React from 'react';
import moment from 'moment';

function DateMethods() {
     let independenceday =new Date (1947,7,15,0,20,20,200);
     let independenceday2 =new Date (9087654321);
     let independenceday3 =new Date ("14 February 2002");
     let independenceday4 = new Date();

     

     let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
     let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
     <div>
          <h1>Learning date and moment JS</h1>
     <button type='button' onClick={()=>{
          console.log(independenceday.getFullYear());
          console.log(monthsArr[independenceday.getMonth()]);
          console.log(independenceday.getDate());
          console.log(daysArr[independenceday.getDay()]);
          console.log(independenceday.getHours());
          console.log(independenceday.getMinutes());
          console.log(independenceday.getSeconds());
          console.log(independenceday.getMilliseconds());
          console.log(independenceday.getTime());
          

     }}>Date</button>
      <button type='button' onClick={()=>{
          console.log(independenceday2.getFullYear());
          console.log(monthsArr[independenceday2.getMonth()]);
          console.log(independenceday2.getDate());
          console.log(daysArr[independenceday2.getDay()]);
          console.log(independenceday2.getHours());
          console.log(independenceday2.getMinutes());
          console.log(independenceday2.getSeconds());
          console.log(independenceday2.getMilliseconds());
          console.log(independenceday2.getTime());

     }}>milliSeconds</button>
     <button type='button' onClick={()=>{
          console.log(independenceday3.getFullYear());
          console.log(monthsArr[independenceday3.getMonth()]);
          console.log(independenceday3.getDate());
          console.log(daysArr[independenceday3.getDay()]);
          console.log(independenceday3.getHours());
          console.log(independenceday3.getMinutes());
          console.log(independenceday3.getSeconds());
          console.log(independenceday3.getMilliseconds());
          console.log(independenceday3.getTime());

     }}> String Date</button>
        <button type='button' onClick={()=>{
          console.log(independenceday4.getFullYear());
          console.log(monthsArr[independenceday4.getMonth()]);
          console.log(independenceday4.getDate());
          console.log(daysArr[independenceday4.getDay()]);
          console.log(independenceday4.getHours());
          console.log(independenceday4.getMinutes());
          console.log(independenceday4.getSeconds());
          console.log(independenceday4.getMilliseconds());
          console.log(independenceday4.getTime());

     }}> Current Date</button>
     <div>
     <form>
      <div>
          <label>date of birth</label>
          <input type='date'></input>

      </div>
     </form>
     </div>
     <div>
          <button onClick={()=>{
               console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
          }}>Moment</button>
          <button type='button'onClick={()=>{
               console.log(moment().add(60, 'days').calendar())
          }}>moment2</button>
     </div>

    <div>DateMethods</div>
    </div>
  )
}

export default DateMethods