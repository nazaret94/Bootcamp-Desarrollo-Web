import React, {useState, useEffect} from 'react';

const Formulario =() =>{

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
    })    

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('formulario', JSON.stringify(formData))
    }

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value.toUpperCase() }))
        
    }

    return(
        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-300'>
            <div className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-700'>
                    Formulario
                </h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                        Nombre
                        </label>
                        <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 roudend-md shadow-sm focus:ring-blue-500 focus:border-blue-500' placeholder='Escribe tu nombre' />              
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Email</label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 roudend-md shadow-sm focus:ring-blue-500 focus:border-blue-500' placeholder='Escribe tu correo'/>
                    </div>
                    <button type='submit' className='w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md transition'>
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Formulario;