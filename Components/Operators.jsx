import React from "react";

export default function Operators(){
    return 
    <div className="operators">
          <div className="incre" 
          onClick={handleIncre}
          > + </div>
          <div 
          onClick={handleDecre}
          className="decre"> - </div>
    </div>
}