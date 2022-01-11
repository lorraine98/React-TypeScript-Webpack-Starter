import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

export const App = () => {
  return (
    <>
      <h1>Works Well!</h1>
      <ColorContext.Provider value={{ color: 'red' }}>
        <ColorBox />
      </ColorContext.Provider>
    </>
  );
};

export default App;
