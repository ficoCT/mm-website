function App() {
  return (
    <Routes>
    <Route
        path="/"
        element={
                <NavbarApp/>
        }
    >
        <Route
            path="home"
            element={
                <Home/>
            }
        />  
    </Route>
    </Routes>
  );
}

export default App;
