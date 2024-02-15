import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({ createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen }) => {

    const { handleSubmit, register, reset } = useForm()
    // const [isOpen,setIsOpen]=useState(true)

    useEffect(() => {
        reset(editUser)
    }, [editUser])

    const submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data)
            setEditUser()
        } else {
            createUser('/users', data)
        }

        // console.log(data)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
        setIsOpen(false)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={`form__background ${isOpen && 'able'}`}>
            <form onSubmit={handleSubmit(submit)} className='form__container'>
                <div className='form__close'>
                    <box-icon name='x' onClick={handleClose}></box-icon>
                </div>
                <h2 className='form__title'>Nuevo usuario</h2>
                <div className='form__item'>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" id='email' />
                </div>
                <div className='form__item'>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" id='password' />
                </div>
                <div className='form__item'>
                    <label htmlFor="first_name">First name</label>
                    <input {...register('first_name')} type="text" id='first_name' />
                </div>
                <div className='form__item'>
                    <label htmlFor="last_name">Last name</label>
                    <input {...register('last_name')} type="text" id='last_name' />
                </div>
                <div className='form__item'>
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} type="date" id='birthday' />
                </div>
                <button className='form__btn'>Save</button>
            </form>
        </div>
    )
}

export default FormUser