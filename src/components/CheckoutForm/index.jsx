import React, {  useContext } from 'react';
import './styles.css';
import { Button } from '@mui/material';
import { Form } from '../../context/FormProvider';
import { Shop } from '../../context/ShopProvider';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import generarOrden from '../../services/generacionOrden';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';

  const FooBarForm = () => {
   
    const {getDataForm, formData} = useContext(Form);
    const {cart, calcularTotal} = useContext(Shop);
 
    const handleChange = (e) => {
        getDataForm(e);
      };

      const handleSubmit= async(e)=>{
        e.preventDefault();
        const importeTotal = calcularTotal();
        const orden = generarOrden(formData.firstname, formData.lastname, formData.username, formData.email, formData.adress, formData.number, cart, importeTotal);
        const docRef = await addDoc(collection(db, "orders"), orden);
            
        cart.forEach(async(productInCart)=>{
          const productRef = doc(db, "products", productInCart.id);
          const productSnap = await getDoc(productRef);
          await updateDoc(productRef, {
            stock: productSnap.data().stock - productInCart.quantity,
          });      
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Gracias por su compra!',
          text: 'Su código de compra es: ' + docRef.id,
          showConfirmButton: true,
        })
      }
          
          
      return (
        <>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First name</label>
              <input type="text" className="form-control" name= "firstname" id="firstName" required onChange={handleChange} />
                <div className="invalid-feedback">
                    Valid first name is required.
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" name ="lastname" id="lastName" required onChange={handleChange}/>
                <div className="invalid-feedback">
                    Valid last name is required.
                </div>
            </div>
            <div className="mb-3">
                <label>Username</label> <span> (Opcional)</span>
                <div className="input-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                    </div>
                    <input  type="text" className="form-control" name="username" id="username" onChange={handleChange} placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="you@example.com"onChange={handleChange} />
                <div className="invalid-feedback">
                    Por favor, ponga bien su correo electrónico.
                </div>
            </div>
            <div className="mb-3">
                <label>Dirección</label>
                <input type="text" className="form-control" name = "adress" id="address" placeholder="1234 Main St" required onChange={handleChange}/>
                <div className="invalid-feedback">
                    Por favor, ponga bien su dirección.
                </div>
            </div>
            <div className="mb-3">
                <label>Teléfono <span className="text-muted"></span></label>
                <input type="number" className="form-control" name ="number" id="telefono" placeholder="111111111" onChange={handleChange}/>
            </div>
            <Button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Enviar</Button>
        </div>
        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">&copy; 2022-2023</p>
          <ul className="list-inline">
            <li className="list-inline-item">Privacy</li>
            <li className="list-inline-item">Terms</li>
             <li className="list-inline-item">Support</li>
          </ul>
        </footer>
            </>
          );
  }


export default FooBarForm;