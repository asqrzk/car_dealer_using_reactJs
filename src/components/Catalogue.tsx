import React from 'react';
import {cars} from '../services/DataService';

type car= { name:string, price:number, image:string};

export default class Catalogue extends React.Component<{},{name:string,price:number,image:string}> {

    constructor(props:any)
    {
        super(props);
        this.state={name:"",price:0,image:""};
        
    }
    carsData:car[]=cars;
    

    showModal(el:car)
    {
        this.setState({
            name:el.name,
            price:el.price,
            image:el.image
        })
        console.log(this.state.name);
        setTimeout(() => {
            document.getElementById("showModalButton")?.click();
        }, 500);
    }

    render()
    {
        return(
            <div className="contentContainer">

                <h2>Catalogue</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    this.carsData.map(el=>
                        
                            <div className="col">
                                <div className="card">
                                    <img src={'images/'+el.image+'.jpg'} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{el.name}</h5>
                                        <p className="card-text">₹{el.price}</p>
                                        <a className="btn btn-primary" href="/#" onClick={()=>{this.showModal(el)}}>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        
                        )
                }
                </div>


                
                <button type="button" className="btn btn-primary concealed" data-bs-toggle="modal" data-bs-target="#exampleModal" id="showModalButton">
                Launch demo modal
                </button>

                
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.state.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={'images/'+this.state.image+'.jpg'} className="card-img-top" alt="..."/>
                        {this.state.price}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                    </div>
                    </div>
                </div>
                </div>


            </div>
        );
    }
}