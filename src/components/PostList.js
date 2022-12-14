import PostItem from './PostItem';

const PostList = () => {
  //Este componente es donde recorremos las publicaciones disponibles. Cada publicación activará un componente (el mismo componente) que leerá el título y el cuerpo de la publicación.
  const posts = [{ id: 1, title: 'a title', body: 'a body' }];

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;