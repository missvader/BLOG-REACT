const PostItem = ({ post: { title, id, body } }) => {

  //El componente PostItem utilizará los props de posts que se le pasan para leer el título y el cuerpo de la publicación. También tendríamos un botón de eliminar y editar uno al lado del otro. Como mencionamos antes, solo se usará el botón Eliminar en este artículo, pero creo que para cuando terminemos, sabrá todo lo que necesita para trabajar en la función de edición y hacer posible la edición de publicaciones.

  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <i className='fas fa-edit'></i>
        <i className='fas fa-trash'></i>
      </div>
    </li>
  );
};

export default PostItem;