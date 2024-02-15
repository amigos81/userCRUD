import { useState, useEffect } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'

function App() {
  const url = 'https://users-crud.academlo.tech/'
  const [isOpen, setIsOpen] = useState(false)
  // const [isDelete, setIsDelete] = useState(false)
  const [editUser, setEditUser] = useState()
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users/')
  }, [])
  // console.log('-------------------users')
  // console.log(users)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className='app'>
      <div className='app__bar'>
        <h1 className='app__title'>Crud de Usuarios</h1>
        <button className='app__btn' onClick={handleOpen}>+ Crear nuevo Usuario</button>
      </div>
      <FormUser
        createUser={createUser}
        updateUser={updateUser}
        editUser={editUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='app_card'>
        {
          users?.map(user => (
            <CardUser
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditUser={setEditUser}
              setIsOpen={setIsOpen}
              // setIsDelete={setIsDelete}
              // isDelete={isDelete}
            />
          )
          )
        }
      </div>
    </div>
  )
}

export default App
