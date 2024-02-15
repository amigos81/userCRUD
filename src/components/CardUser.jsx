import React from 'react'

const CardUser = ({ user, deleteUser, setEditUser, setIsOpen, setIsDelete, isDelete }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setEditUser(user)
        setIsOpen(true)
    }

    // const handleDeleteMessage = () => {
    //     setIsDelete(true)
    // }
    // const handleMessageClose = () => {
    //     setIsDelete(false)
    // }

    return (
        <>
            <article className='card'>
                <h3 className='card__name'>{user.first_name} {user.last_name}</h3>
                <hr />
                <ul className='card__list'>
                    <li className='card__item'>
                        <div className='card__campo'>Correo:</div>
                        <div className='card__data'>{user.email}</div>
                    </li>
                    <li className='card__item'>
                        <div className='card__campo'>Cumpleaños:</div>
                        <div className='card__data'>{user.birthday}</div>
                    </li>
                </ul>
                <hr />
                <div className='card__btn'>
                    <button className='btn trash' onClick={handleDelete}><box-icon color='white' name='trash' ></box-icon></button>
                    <button className='btn edit' onClick={handleEdit}><box-icon color='grey' name='edit' type='solid' ></box-icon></button>
                </div>



            </article>
            {/* <div className={`card__message__delete ${isDelete && 'able'}`}>
                <div className='card__message__close'>
                    <box-icon name='x' onClick={handleMessageClose}></box-icon>
                </div>
                <h2>Eliminar usuario</h2>
                <div>El usuario <strong>{user.first_name} {user.last_name}</strong> se ha eliminado</div>
                <button onClick={handleDelete}>Aceptar</button>
            </div>  */}
        </>

    )
}

export default CardUser