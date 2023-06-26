import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";



    function ContentCard({data,handleCount}){
console.log(data.rating);
   let discountPrice=data.price.split(" ");

 
    return (
  
       <div>
                <div className="col mb-5">
            <div className="card h-100">
           {/* && only working when it is true */}
            {data.sale && ( 
              <div className="badge bg-dark text-white position-absolute"  style={{top:"0.5rem", right: "0.5rem"}}> Sale</div>)}
           
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
         
              <div className="card-body p-4">
                <div className="text-center">
               
                  <h5 className="fw-bolder">{data.productName}</h5>
               
                  {data.rating ?  (
                                 
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                   ):<div class="color">empty</div> }



{data.offer ? (
                  <span className="text-muted text-decoration-line-through">{discountPrice[0]}</span>
):( data.price)}{" " }
{data.offer && discountPrice[1]} 
                  
                  
                 

                </div>
              </div>
         
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(click) => handleCount(click)}  >{data.button}</a></div>
              </div>
            </div>
          </div>

            
        
          </div>
    );
  };
export default ContentCard;