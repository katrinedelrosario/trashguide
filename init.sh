#!/bin/bash

# Define the path to your "for exam" folder on the desktop
TEMPLATE_DIR="$HOME/Desktop/for exam"

# Create a new Vite project with React template in the current directory
npm create vite@latest . -- --template react

# Install dependencies
npm install react-router-dom sass

# Copy the folders from your "for exam" directory to the project's src directory
cp -R "$TEMPLATE_DIR/"* src/
cd src
echo "
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout'
import { Frontpage } from './pages/frontpage/frontpage'
import { Login } from './pages/login/login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path='/forside' element={<Frontpage />} />
          <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

" > App.jsx
cd ..

cd public
rm -rf vite.svg
cd ../src
rm -rf App.css
cd assets
rm -rf react.svg

cd ../..

echo "<!doctype html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' /> 
	<link rel='stylesheet' href='./index.css'>
    <title></title>
  </head>
  <body>
    <div id='root'></div>
    <script type='module' src='/src/main.jsx'></script>
  </body>
</html>" > index.html

echo "* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }" > index.css

# Output a success message
echo "New React project initialized in the current directory - Happy hacking!"

# To run type: bash ./init.sh