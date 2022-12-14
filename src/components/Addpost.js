import { useState } from 'react';

const AddPost = ({ closeModal }) => {

  //El formulario Addpost contendrá dos campos de entrada(input), es decir, el título y el cuerpo, y un botón de envío. En el envío, validaríamos la entrada para asegurarnos de que haya valores para el título y el cuerpo
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body) return setError('All fields are required');

    console.log({ title, body });
    closeModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input
          type='text'
          placeholder='Enter title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder='Enter body'
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type='submit'>Submit</button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddPost;