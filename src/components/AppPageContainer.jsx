import './AppPageContainer.css';

const AppPageContainer = ({ children, style }) => {

  const containerStyles = {
    ...style,
  };

  return (
    <main className='app-container' style={containerStyles} role="region" aria-label="Application Container">
      {children}
    </main>
  );
};


export default AppPageContainer;