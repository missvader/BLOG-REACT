import { useContext } from 'react';
import { AppContext } from '../context/AppState';
import PostItem from './PostItem';

const PostList = () => {
  //Este componente es donde recorremos las publicaciones disponibles. Cada publicación activará un componente (el mismo componente) que leerá el título y el cuerpo de la publicación.
  //para obtener los posts que tenemos en AppContext usamos el hook useContext
  const { posts } = useContext(AppContext);
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;