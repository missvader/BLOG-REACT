import {useContext,  useState } from 'react';
import { AppContext } from '../context/AppState';
import AddPost from './AddPost';

const Header = () => {
//header contendrá un título y un botón para crear nuevas publicaciones. Este botón activará otro componente que adjuntaremos al encabezado(Addpost)
//agregamos estado para darkTheme como una className
  const { darkTheme } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={`${darkTheme ? 'dark' : ''}`}>
      <h1>DevBlog</h1>
      <button onClick={() => setOpenModal(!openModal)}>Create Post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;