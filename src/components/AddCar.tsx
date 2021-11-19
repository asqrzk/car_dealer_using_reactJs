import React from 'react';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  
import {cars} from '../services/DataService';
import {useNavigate} from 'react-router-dom';

type initialState = {name:"",price:0};

 class AddCar extends React.Component<{navigate:any},initialState> {
    
    constructor(props:any)
    {
        super(props);
        this.state={name:"",price:0};
    }

    ListCar(e:any)
    {
        e.preventDefault();
        if(this.state.name===""||this.state.price<=0) toast.error("Please check input");
        else 
        {
            cars.push({name:this.state.name,price:this.state.price,image:"car"});
            toast.success("Successfully listed car !");
            setTimeout(() => {
                this.RedirectToHome();
            }, 1000);
        }
    }

    RedirectToHome()
    {
        this.props.navigate("/");
    }


    UpdateName(e:any)
    {
        this.setState({
            name:e.target.value
        })
    }

    UpdatePrice(e:any)
    {
        this.setState({
            price:e.target.value
        })
    }
    
    

    render()
    {
        return(
            <div className="contentContainer">
                <h2>Add New Car</h2>
                <br/><br/>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={e=>this.UpdateName(e)} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" value={this.state.price} onChange={e=>this.UpdatePrice(e)} className="form-control" id="price" />
                    </div>
                    <button className="btn btn-primary" onClick={(e)=>this.ListCar(e)} >Submit</button>
                </form>
                <ToastContainer/>
            </div>
        );
    }
}


function WithNavigateAddCar(props:any) {
    let navigate = useNavigate();
    return <AddCar {...props} navigate={navigate} />
}

export default WithNavigateAddCar