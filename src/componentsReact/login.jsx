import logo from '../img/logo.png'

import { Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from 'react';

export default function login() {
    
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    

    useEffect(() => {
        sessionStorage.clear();
    }, [])

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {

            let inputobj={
                "username": username,
                "password": password
            };
            
            fetch("http://18.233.143.65:3000/user/login",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)

                sessionStorage.setItem('username',username);
                sessionStorage.setItem('jwttoken',resp.jwtToken);
                window.location.href = '/admin/dashboard';
                

            }).catch((err) => {
                alert(err);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            alert('Por favor ingrese un usuario');
        }
        if (password === '' || password === null) {
            result = false;
            alert('Por favor ingrese una contraseña');
        }
        return result;
    }

    
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src={logo.src} alt="Innova Car Service"/>
                
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Iniciar Sesion con tu cuenta</h2>
                </div>
            
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={ProceedLogin}>
                    <div>
                    <Input label="Usuario" value={username} onChange={e => usernameupdate(e.target.value)}/>
                    </div>
            
                    <div>
                    <Input type="password" label="Password" value={password} onChange={e => passwordupdate(e.target.value)}/>
                    <Typography
                        variant="small"
                        color="red"
                        className="mt-2 flex items-center gap-1 font-normal"
                    >                    
                    </Typography>
                    </div>
            
                    <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Iniciar Sesion</button>
                    </div>
                </form>
                </div>
            </div>

        </>
    )
}