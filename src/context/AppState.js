//CREACION DEL CONTEXT 
/*
React.createContext es una API de contexto de React para crear contextos, es una función que toma un valor predeterminado como único argumento. Este valor podría representar los estados iniciales del context, ya que puede acceder a este valor dondequiera que use el proveedor del context.

const posts = [];
const AppContext = React.createContext({ posts }); -------> esto es un ejemplo

La función createContext devuelve un objeto de context que proporciona un componente Provider y otro Consumer.
El Provider se usa para envolver componentes que usarán nuestro context creado. Cualquier componente que necesite acceso a los valores pasados ​​como valor predeterminado (estado inicial) al createContext, deberá envolverse con el Provider 

const App = () => {
  return (
    <AppContext.Provider>
      <Header />                --------> ejemplo de uso Provider
      <Main />
    </AppContext.Provider>
  );
};

The Header and Main components can all access the posts array we set initially while creating the AppContext context. The provider component provides a value prop which overrides the default value in AppContext. When we assign this prop a new value, the Header and Main components will no longer have access to the posts array. But there is a simple approach in which the values provided in the provider component can coexist with the default value of AppContext, and that is with React states.
*/