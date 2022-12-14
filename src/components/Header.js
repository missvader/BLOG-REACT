import { useState } from 'react';
import AddPost from './AddPost';

const Header = () => {
//header contendrá un título y un botón para crear nuevas publicaciones. Este botón activará otro componente que adjuntaremos al encabezado(Addpost)

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header>
      <h1>DevBlog</h1>
      <button onClick={() => setOpenModal(!openModal)}>Create Post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;