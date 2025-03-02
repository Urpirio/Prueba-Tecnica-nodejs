import React from 'react';
import Img from '../assets/image.png';
import '../style/Login.less';
import { useState } from 'react';

export default function Login() {

    const [showpassword, SetshowPassword] = useState(true);
    const ShowPassword = () => {
        SetshowPassword(!showpassword);
        showpassword ? document.getElementById('Password').type = 'Text' : 
        document.getElementById('Password').type = 'password';
        showpassword ? document.getElementById('IconShowPassword').className = 'bx bx-low-vision' : 
        document.getElementById('IconShowPassword').className = 'bx bx-show' ;
    };

    let InicioSesion;
    const IniciarSesion = async (event) => {
        event.preventDefault();
        const conexion =  await fetch('http://localhost:4500/usuarios');
        const Data = await conexion.json()

        const largoArray = Data.data.length;
        for(let x = 0; x< largoArray; x++){
            if(document.getElementById('Email').value == Data.data[x].Email && document.getElementById('Password').value == Data.data[x].Password ){
                ValidacionExitosa(Data.data[x].Email,Data.data[x].Name)
                InicioSesion = true;

            }else{
                InicioSesion = false;
                continue;
            }
        }

        if(InicioSesion == false){
            document.getElementById('warnning').style.display = 'flex';
            document.getElementById('warnning').style.color = 'red';
            document.getElementById('warnning').style.fontWeight = '600';
            document.getElementById('warnning').style.fontSize = '10px';
            document.getElementById('warnning').style.padding = '2px';

        }else{
            document.getElementById('warnning').style.display = 'none';
        }
    };

    const ValidacionExitosa = (Email,Nombre) => {
        document.querySelector('.Login__div__div').remove();
        document.querySelector('.Img').remove();

        document.querySelector('.Login__div').innerHTML = `<div id='Bienvenida'>
        <h1>Welcome<span>, ${Nombre}</span></h1>
        </div>`;

        let btn = document.createElement('button');
        btn.innerText = 'Volver al Inicio';
        btn.addEventListener('click',()=>{
            window.location.href = '/';
        })
        document.getElementById('Bienvenida').append(btn)


    };

    








  return (
    <section className='Login'>
        <div className='Login__div'>

            <div className='Login__div__div'>
                <form onSubmit={IniciarSesion} className='Login__dv_dv__form'>
                    <div className='Form__div1'>
                        <div className='Form__div1_i'>
                            <i class='bx bx-building-house' ></i>
                        </div>
                        <div className='Form__div1_title'>
                            <h1>Welcome home</h1>
                            <h4>Please enter your details</h4>
                        </div>
                    </div>
                    <div className='Form__div2'>
                        <div className='Form__div2_inputs'>
                            <input type="Email" name="" id="Email" placeholder='Email' required/>
                            <i className='bx bxs-envelope'></i>
                        </div>
                        
                        <div>
                        <div className='Form__div2_inputs'>
                            <input type="Password" name="" id="Password" placeholder='Password' required />
                            {/* <i  className='bx bx-lock-alt'></i> */}
                            <i id='IconShowPassword' onClick={ShowPassword} class='bx bx-show'></i>
                        </div>
                        <span style={{display: 'none'}} id='warnning'>Email o contraseña no son validos</span>
                        </div>
                        <div className='Form__div2_Things'>
                            <span>
                                <input type="checkbox" name="" id="" required />
                                <span>Remenber for 30 days</span>
                            </span>
                            <a href="">Forget password?</a>
                        </div>
                    </div>
                    <div className='Form__div3'>
                        <button>Login</button>
                    </div>

                </form>
                <div className='Login__div__div_d1' >
                    <span className='Span'><span >or</span></span>
                    <div>
                        <i className='bx bxl-apple' ></i>
                        <i className='bx bxl-google' ></i>
                        <i className='bx bxl-facebook-circle' ></i>
                    </div>
                </div>

            </div>



            <div className='Img'>
                <img src={Img} alt="Buo" />   
            </div>

        </div>
    </section>
  )
}
