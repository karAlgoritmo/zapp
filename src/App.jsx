import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='zapp-img'></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="#primero" className='text-header-black'>¿como funciona?</Nav.Link>
              <Nav.Link href="#segundo" className='text-header-black'>Testimonios</Nav.Link>
              <Nav.Link href="#tercero" className='text-header-black'>Preguntas Frecuentes</Nav.Link>
              <Nav.Link href="#cuarto" className='text-header-black'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black pt-3'><div className='btnwhats-img'></div></Nav.Link>
        </Container>
      </Navbar>

      <section className='seccionOne'>
      <div className='col-6 conttextone mt-5'>
        <p className='text-big-white'>Envía dinero a México</p>
        <p className='text-big-white' >tan fácil como chatear</p>
        <p className='text-big-white'>por WhatsApp</p>
       </div>
       <Card className='col-3 card-white'>
          <Card.Body>
            <p className='text-lit-black4'>Escríbenos por WhatsApp </p>
            <p className='text-lit-black4'>y haz tu primer envío por</p>
            <Card.Text className='text-mid-green'>
              !0$ de comisión!
            </Card.Text>
            <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black pt-3'><div className='btnwhats-img'></div></Nav.Link>
          </Card.Body>
        </Card>
       <div className='whats3-img'></div>
       <div className='pais-img'></div>
       <div className='plane-img'></div>
       <div className='phone-img'></div>
       <div className='nube-img'></div>
       <div className='edificios-img'></div>
      </section>
      <section className='seccionTwo'>
        <p className='d-flex justify-content-center text-mid-black'>Tus seres queridos podrán recibir su dinero en mas de <span className='text-mid-green2 mx-2'> 40.000 </span> <span className='text-mid-green2 mx-2'> puntos </span> de pago</p>
        <p className='d-flex justify-content-center text-mid-black mb-5'>o directo a su cuenta bancaria.</p>
        <div className=' d-flex justify-content-center col-12'>
          <div className='col-8 row d-flex justify-content-between'>
            <div className='electra-img col-3'></div>
            <div className='oxxo-img col-3'></div>
            <div className='coppel-img col-3'></div>
            <div className='walmart-img col-3'></div>
            <div className='banorte-img col-3'></div>
          </div>
        </div>
        <div className=' d-flex justify-content-center col-12'>
          <div className='col-4 row d-flex justify-content-between'>
            <div className='soriana-img'></div>
            <div className='farmacias-img'></div>
            <div className='bbva-img'></div>
          </div>
        </div>
      </section>
      <section className='seccionThree'>
        <p className='d-flex justify-content-center text-big-black'>!Haz tu envío en un dos por tres!</p>
        <section className='d-flex justify-content-center'>
          <div className='row d-flex justify-content-between pb-5 col-10'>
            <Card className='col-2'>
              <Card.Body>
                <section className='d-flex justify-content-between col-12 mb-3'>
                  <div className='whats2-img col-1'></div>
                  <Card.Title className='col-11'>Escríbenos</Card.Title>
                </section>
                <Card.Text className='text-lit-black'>
                  Haz clic en el botón
                  de Envía Dinero Hoy 
                  e inicia un chat dentro
                  de WhatsApp.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='col-2'>
              <Card.Body>
                <section className='d-flex justify-content-between col-12 mb-3'>
                  <div className='note-img col-1'></div>
                  <Card.Title className='col-11'>Ingresa los detalles</Card.Title>
                </section>
                <Card.Text className='text-lit-black'>
                  Sigue los pasos indicados
                  el el chat.Ingresa el monto
                  del envío.tu destinatario y 
                  la forma en que va a recibir
                  el dinero.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='col-2'>
              <Card.Body>
                <section className='d-flex justify-content-between col-12 mb-3'>
                  <div className='coin2-img col-1'></div>
                  <Card.Title className='col-11'>Paga</Card.Title>
                </section>
                <Card.Text className='text-lit-black'>
                  Selecciona un método
                  de pago a tráves de un
                  enlace seguro y 
                  confirma el envío.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='col-2'>
              <Card.Body>
                <section className='d-flex justify-content-between col-12 mb-3'>
                  <div className='check-img col-1'></div>
                  <Card.Title className='col-11'>Recibe tu confirmación</Card.Title>
                </section>
                <Card.Text className='text-lit-black'>
                  Recibirás la confirmación
                  del envío después 
                  de procesar tu pago.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='col-12 d-flex justify-content-center mt-5'>
              <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black mt-3'><div className='btnwhats-img'></div></Nav.Link>
            </div>
          </div>
        </section>
      </section>
      <section className='seccionFour row'>
        <div className='col-6'>
          <div className='nube2-img'></div>
          <div className='senora-img'></div>
          <div className='senoracel-img'></div>
        </div>
        <div className='col-6'>
          <p className='text-big-white mt-5 mb-5'>bueno, bonito y barato</p>
          <div className='col-12 row mb-5'>
            <div className='col-1'>
              <div className='whats-img'></div>
            </div>
            <div className='col-11'>
              <p className='text-mid-white'>Súper fácil</p>
              <p className='text-lit-white'>Libérate de hacer fila en la tienda o de bajar una aplicación</p>
              <p className='text-lit-white'>más.Envía dinero de volada desde WhatsApp.</p>
            </div>
          </div>
          <div className='col-12 row mb-5'>
            <div className='col-1'>
              <div className='lock-img'></div>
            </div>
            <div className='col-11'>
              <p className='text-mid-white'>Seguro</p>
              <p className='text-lit-white'>Tu información está encriptada por lo que es seguro.</p>
              <p className='text-lit-white'>Estamos registrados ante FinCEN con el gobierno de los</p>
              <p className='text-lit-white'>Estados Unidos y tu envío está protegido con nuestra</p>
              <p className='text-lit-white'>garantía de devolución.</p>
            </div>
          </div>
          <div className='col-12 row mb-5'>
            <div className='col-1'>
              <div className='coin-img'></div>
            </div>
            <div className='col-11'>
              <p className='text-mid-white'>Económico</p>
              <p className='text-lit-white'>La comisión de tu primer envío es gratuita con nosotros.</p>
              <p className='text-lit-white'>Después, puedes continuar sin pagar comisión en envíos</p>
              <p className='text-lit-white'>mayores de $500.00 o pagar desde $3.99</p>
              <p className='text-lit-white'>en envíos más chicos.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='seccionTwo'>
        <div className='plane2-img'></div>
        <section className='col-12 d-flex justify-content-center'>
          <div className='d-flex justify-content-between col-8'>
            <div className='col-4'>
              <div className='chat-img'></div>
            </div>
            <div className='col-10 mt-5'>
              <p className='text-big-black2'>Sólo estás a un mensaje de distancia</p>
              <p className='text-lit-black2'>¿Tienes alguna duda o comentario? Estamos aquí para ayudarte,</p>
              <p className='text-lit-black2'>chatea con nosotros en WhatsApp o escribenos a hola@zapp.global.</p>
            </div>
          </div>
        </section>
      </section>
      <section className='seccionThree'>
        <section className='col-12 d-flex justify-content-center'>
            <div className='col-10 p-5'>
              <p className='text-big-black3'>Descubre la <span className='text-big-green mx-2'> nueva </span> forma fácil, rápida y segura</p>
              <p className='text-big-black3'>de enviar dinero a mexico</p>
              <iframe src="" height='500' width='100%'>

              </iframe>
            </div>
        </section>
      </section>
      <section className='seccionFive col-12'>
        <section className='d-flex justify-content-center col-12'>
          <div className='d-flex justify-content-center col-10 m-5'>
            <div className='col-8'>
              <p className='text-mid-white'>Libérate de hacer fila en la tienda</p>
              <p className='text-mid-white'>o de bajar aplicaciones.</p>
            </div>
            <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black mt-3'><div className='btnwhats-img'></div></Nav.Link>
          </div>
        </section>
        <hr></hr>
        <section className='d-flex justify-content-center col-12'>
          <div className='d-flex justify-content-around col-9 m-5'>
            <div className='col-6'>
              <div className='zapp2-img mb-4'></div>
              <p className='text-lit-white'>Envía dinero a México de forma segura desde WhatsApp.</p>
              <p className='text-lit-white'>Zapp es la forma más fácil y segura de enviar dinero</p>
              <p className='text-lit-white'>sin hacer fila en la tienda ni descargar una app.</p>
              <div className='uni-img'></div>
            </div>
            <div className='col-3'>
              <p className='text-lit-white'>Compañia</p>
              <p className='text-lit-white'>FAQ</p>
              <p className='text-lit-white mb-2'>empleos</p>
              <p className='text-lit-white'>Legales</p>
              <p className='text-lit-white'>Aviso de privacidad</p>
              <p className='text-lit-white'>Términos de uso</p>
            </div>
            <div className='col-3'>
              <p className='text-lit-white'>Contacto</p>
              <p className='text-lit-white'>2001 Timberloch place,</p>
              <p className='text-lit-white'>suite 500,The Woodlands</p>
              <p className='text-lit-white mb-2'>TX 77380</p>
              <p className='text-lit-white mb-2'>Hola@zapp.global</p>
              <p className='text-lit-white'>2023 Zapp Inc.</p>
              <p className='text-lit-white'>Todos los derechos reservados</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;