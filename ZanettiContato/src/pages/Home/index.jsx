import { useEffect, useState, useRef } from 'react';
import './style.css';
import api from '../../services/api';

function Home() {
  Const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputCellphone = useRef()
  const inputMessage = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/contato')

    setUsers(usersFromApi.data)
}

  async function createUsers() {
    await api.post('/contato',{
      name: inputName.current.value,
      email: inputEmail.current.value,
      cellphone: inputCellphone.current.value,
      message: inputMessage.current.value
  })

}

  async function deleteUsers(id) {
   await api.delete(`/contato/${id}`)
}



  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <div className="container">
      <form>
        <h1>Contato</h1>
        <input name="Nome" type="text" placeholder="Seu nome" ref={inputName}/>
        <input name="E-mail" type="email" placeholder="Seu e-mail" ref={inputEmail} />
        <input name="tell" type="tel" placeholder="Seu telefone" ref={inputCellphone} />
        <input name="Mensagem" type="text" placeholder="Sua mensagem" ref={inputMessage} />
        <button type="button" onClick={createUsers}>Solicitar Agendamento</button>
      </form>
    </div>
  );
}

export default Home;