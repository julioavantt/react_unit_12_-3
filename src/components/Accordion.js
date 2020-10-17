import React, { useState } from 'react';

const Accordion = ({ items }) => {
   const [ activeIndex, setActiveIndex ] = useState(0);

   const renderItems = items.map((item, index) => {
      const active = index === activeIndex ? 'active' : '';

      return (
         <React.Fragment key={item.title}>
            <div 
               className={`title ${active}`}
               onClick={() => setActiveIndex(index)}
            >
               <i className="icon dropdown" />
               {item.title}
            </div>
            <div className={`content ${active}`}>
               <p>{item.content}</p>
            </div>
         </React.Fragment>
      );
   });

   return <div className="ui styled accordion">{renderItems}</div>;
}

export default Accordion;