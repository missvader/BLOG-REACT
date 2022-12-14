# REACT CONTEXT
## Creación del context

React.createContext es una API de contexto de React para crear contextos, es una función que toma un valor predeterminado como único argumento. Este valor podría representar los estados iniciales del context, ya que puede acceder a este valor dondequiera que use el proveedor del context.

`const posts = [];
const AppContext = React.createContext({ posts });`

La función createContext devuelve un objeto de context que proporciona un componente Provider y otro Consumer.
El Provider se usa para envolver componentes que usarán nuestro context creado. Cualquier componente que necesite acceso a los valores pasados ​​como valor predeterminado (estado inicial) al createContext, deberá envolverse con el Provider


The Header and Main components can all access the posts array we set initially while creating the AppContext context. The provider component provides a value prop which overrides the default value in AppContext. When we assign this prop a new value, the Header and Main components will no longer have access to the posts array. But there is a simple approach in which the values provided in the provider component can coexist with the default value of AppContext, and that is with React states.
### Cómo acceder a los valores de contexto:
Los componentes que acceden y utilizan los valores de AppContext se denominan consumidores. React proporciona dos métodos para acceder a los valores de contexto
#### componente Consumer

Dentro del componente Consumer, creamos una función que tiene un parámetro de valor (proporcionado por React), este valor es el AppContext valor actual (el estado inicial).
Recuerde que dijimos que el componente Provider también podría proporcionar el valor de context actual y, como tal, anulará el valor predeterminado, así que veamos eso en acción.


Echemos un vistazo al otro método (el más usado) para acceder a un valor de context.
### HOOK useContext
Simplemente acepta un objeto de context y devuelve el valor de context actual tal como lo proporciona el valor predeterminado de context o el proveedor de context más cercano.


Nota: cualquier componente que use el componente del proveedor no puede usar el gancho useContext y esperar el valor proporcionado por el componente del proveedor, es decir:


Obviamente, esto se debe a que el useContext  no tiene acceso a los valores proporcionados por el componente del proveedor. Si necesita acceder a él, debe estar al menos un nivel por debajo del componente del proveedor.
Pero eso no es para preocuparse porque difícilmente tendría la necesidad de acceder a ella de inmediato, ya que su aplicación siempre estará dividida en componentes (me refiero a que está llena de componentes).

### HOOK useReducer
React proporciona un hook useReducer que lo ayuda a realizar un seguimiento de múltiples estados, es similar al gancho useState y permite una lógica de estado personalizada.

Debido a que necesitaremos realizar una serie de actualizaciones en nuestro contexto usando estados (como hicimos en el ejemplo anterior), a menudo es conveniente usar useReducer para manejar todos los estados en él.

useReducer toma dos argumentos requeridos, el primero es la función reductora y el segundo los estados iniciales del hook. Entonces, cada estado que requiera en su contexto (debería) estar incluido en los estados iniciales. Luego, la función devuelve una matriz que contiene el estado actual y una función para manejar los estados (al igual que useState).

En la función  reducer, el parámetro de acción contiene el objeto que pasamos a la función. El parámetro de estado contiene el estado actual de los estados iniciales pasados ​​a  useReducer. 

La función reducer siempre debe devolver un estado para actuar como los estados actuales del useReducer, podría ser simplemente el estado sin cambios o el estado actualizado, pero se debe devolver algo.


