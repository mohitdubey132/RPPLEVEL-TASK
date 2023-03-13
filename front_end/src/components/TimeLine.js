import React from 'react'
import data from '../assets/timeLineData.json';
const TimeLine = () => {
  return (
    <div id='timeline'>
    
      <div className='timeLineBox'>
        {
          data.timeLine.map((item,index)=>
            <TimeLineItem   
              passYear={item.Ending_year}
              course={item.class}
              clg={item.course}
              index={index}
              key={item.Ending_year}
              location={item.location}

          />)
        }

      </div>
    </div>
  );
};

const TimeLineItem =({passYear,course ,clg, location ,index})=><div className={`timeLineItems ${index % 2=== 0 ?
"leftTimeLine"
:"rightTimeLine"}`}>
<div><h2>{passYear} place  {location}  </h2>
<p>{clg} {course} </p>
</div>
</div>

export default TimeLine