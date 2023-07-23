import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Header from "./components/header";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <>
    <Header/>
      

      {/* -----nav bar ends----- */}

      <main>
      <div className="container mt-3">


          {/*----------------- latest products start ----------------- */}
        <h3 className="mb-4">Latest Products <a href="#" className="float-end btn btn-sm btn-dark"> View All Products <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></a></h3>
 
          <div className="row mb-4">
            {/* Product box start here */}
            <div className="col-12 col-md-3 mb-4 ">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}
                  {/* Product box start here */}
            <div className="col-12 col-md-3 mb-4 ">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}
              {/* Product box start here */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}
             {/* Product box start here */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}
             {/* Product box start here */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}{/* Product box start here */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Category Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}{/* Product box start here */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}{/* Product box start here */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                     
                    <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      title="add to cart"
                      className="btn btn-success btn-sm "
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="x"
                        className="mr-3"
                      />
                    </button>
                    <button
                      title="add to whishlist"
                      className="btn btn-danger btn-sm ms-2"
                    >
                      <FontAwesomeIcon
                        icon="fa-regular fa-heart ml-3"
                        size="x"
                      />
                    </button>
                  </Card.Footer>
                </Card>
               
              </div>
            </div>
             {/* product box end here */}
             
             
             
          </div>
            {/*----------------- latest products ends ----------------- */}



            {/* --------------------------------------------------------------------- */}
             {/*----------------- popular products start ----------------- */}
        <h3 className="mb-4">popular Products <a href="#" className="float-end btn btn-sm btn-dark"> View All Catergoires <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></a></h3>
 
 <div className="row mb-4">
   {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4 ">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
         {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4 ">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Category Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
         
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
     {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
    {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
    {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}{/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}{/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}{/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>Catergory Title</Card.Title>
            
           <Card.Text className="text-muted"><span className="text-muted ms-1"></span></Card.Text>
         </Card.Body>
         <Card.Footer>
           Product Downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
    
    
    
 </div>
   {/*----------------- popular products ends ----------------- */}

   {/*----------------- popular seller start ----------------- */}
  
  <h3 className="mb-4">Latest Products <a href="#" className="float-end btn btn-sm btn-dark"> View All Products <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></a></h3>
 
 <div className="row mb-4">
   {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4 ">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
         {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4 ">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
     {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
    {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
    {/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}{/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}{/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}{/* Product box start here */}
   <div className="col-12 col-md-3 mb-4">
     <div className="card shadow">
       <Card style={{ width: "16rem" }}>
         <Card.Img variant="top" src={logo} />
         <Card.Body>
           <Card.Title>seller Title</Card.Title>
            
           <Card.Text className="text-muted">Price:<span className="text-muted ms-1">500</span></Card.Text>
         </Card.Body>
         <Card.Footer>
          product downloads:69
         </Card.Footer>
       </Card>
      
     </div>
   </div>
    {/* product box end here */}
    
    
    
 </div>
   {/*----------------- popular seller ends ----------------- */}

        </div>
      </main>
    </>
  );
}

export default App;
