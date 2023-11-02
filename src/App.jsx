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
            <Nav className="justify-content-center flex-grow-1">
              <Nav.Link href="#primero" className='text-header-black'>¿Cómo funciona?</Nav.Link>
              <Nav.Link href="#tercero" className='text-header-black'>Preguntas frecuentes</Nav.Link>
              <Nav.Link href="#cuarto" className='text-header-black'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black pt-3 desktop'><div className='btnwhats-img'></div></Nav.Link>
        </Container>
      </Navbar>

      <section className='desktop'>
        <section className='seccionTwo'>
          <div className='fondoverde-img col-12 row'>
              <div className='col-5'></div>
              <div className='col-7'>
                <div className='top-text'></div>
                <div className='col-12'>
                  <p className='text-big-white1'>Envía dinero a México</p>
                  <p className='text-big-white1' >tan fácil como chatear</p>
                  <p className='text-big-white1'>por WhatsApp</p>
                </div>
                <Card className='col-6 mt-5 p-2'>
                    <Card.Body>
                      <p className='text-lit-black4'>Escríbenos por WhatsApp </p>
                      <p className='text-lit-black4'>y haz tu primer envío por</p>
                      <Card.Text className='text-mid-green'>
                        ! $0 de comisión!
                      </Card.Text>
                      <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black'><div className='btnwhats2-img col-11'></div></Nav.Link>
                    </Card.Body>
                  </Card>
            </div>
          </div>
          <div className='col-12'>
            <p className='d-flex justify-content-center text-mid-black'>Tus seres queridos podrán recibir su dinero en más de <span className='text-mid-green2 mx-2'> 40,000 </span> <span className='text-mid-green2 mx-2'> puntos </span> de pago</p>
            <p className='d-flex justify-content-center text-mid-black mb-5'>o directo a su cuenta bancaria.</p>
            <div className=' d-flex justify-content-center col-12'>
              <div className='col-8  row d-flex justify-content-between'>
                <div className='electra-img col-3'></div>
                <div className='oxxo-img col-3'></div>
                <div className='coppel-img col-3'></div>
                <div className='walmart-img col-3'></div>
                <div className='banorte-img col-3'></div>
              </div>
            </div>
            <div className=' d-flex justify-content-center col-12'>
              <div className='col-4 row d-flex justify-content-between'>
                <div className='soriana-img col-4'></div>
                <div className='farmacias-img col-4'></div>
                <div className='bbva-img col-4'></div>
              </div>
            </div>
          </div>
        </section>
        <section className='seccionThree'>
          <p className='d-flex justify-content-center text-big-black'>¡Haz tu envío en un dos por tres!</p>
          <section className='pb-5 col-12'>
            <div className='row justify-content-center'>
              <Card className='col m-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='whats2-img col-1'></div>
                    <Card.Title className='col-9'>Escríbenos</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Haz clic en el botón</Card.Text>
                  <Card.Text className='text-lit-black5'>de <span className='text-lit-black6'> Envía Dinero Hoy </span></Card.Text>
                  <Card.Text className='text-lit-black5'>e inicia un chat dentro </Card.Text>
                  <Card.Text className='text-lit-black5'>de WhatsApp. </Card.Text>
                </Card.Body>
              </Card>
              <Card className='col m-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='note-img col-1'></div>
                    <Card.Title className='col-9'>Ingresa los detalles</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Sigue los pasos indicados</Card.Text>
                  <Card.Text className='text-lit-black5'> en el chat. Ingresa el monto</Card.Text>
                  <Card.Text className='text-lit-black5'>del envío, tu destinatario y </Card.Text>
                  <Card.Text className='text-lit-black5'>la forma en que va a recibir </Card.Text>
                  <Card.Text className='text-lit-black5'>  el dinero.</Card.Text>
                </Card.Body>
              </Card>
              <Card className='col m-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='coin2-img col-1'></div>
                    <Card.Title className='col-9'>Paga</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Selecciona un método</Card.Text>
                  <Card.Text className='text-lit-black5'>de pago a través de un</Card.Text>
                  <Card.Text className='text-lit-black5'>enlace seguro y </Card.Text>
                  <Card.Text className='text-lit-black5'>confirma el envío.</Card.Text>
                </Card.Body>
              </Card>
              <Card className='col m-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='check-img col-1'></div>
                    <Card.Title className='col-9'>Recibe tu confirmación</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Recibirás la confirmación</Card.Text>
                  <Card.Text className='text-lit-black5'>del envío después </Card.Text>
                  <Card.Text className='text-lit-black5'>de procesar tu pago.</Card.Text>
                </Card.Body>
              </Card>
              <div className='col-12 d-flex justify-content-center'>
                <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black mt-3'><div className='btnwhats3-img'></div></Nav.Link>
              </div>
            </div>
          </section>
        </section>
        <section className='seccionFour'>
          <div className='fondoazul-img row'>
            <div className='col-6'>
              <div className='nube2-img'></div>
              <div className='senora-img'></div>
              <div className='senoracel-img'></div>
            </div>
            <div className='col-6'>
              <p className='text-big-white mt-5 mb-5'>Bueno, bonito y barato</p>
              <div className='col-12 row mb-5'>
                <div className='col-1'>
                  <div className='whats-img'></div>
                </div>
                <div className='col-9'>
                  <p className='text-mid-white'>Súper fácil</p>
                  <p className='text-lit-white'>Libérate de hacer fila en la tienda o de bajar una aplicación</p>
                  <p className='text-lit-white'>más. Envía dinero de volada desde WhatsApp.</p>
                </div>
              </div>
              <div className='col-12 row mb-5'>
                <div className='col-1'>
                  <div className='lock-img'></div>
                </div>
                <div className='col-9'>
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
                <div className='col-9'>
                  <p className='text-mid-white'>Económico</p>
                  <p className='text-lit-white'>La comisión de tu primer envío es gratuita con nosotros.</p>
                  <p className='text-lit-white'>Después, puedes continuar sin pagar comisión en envíos</p>
                  <p className='text-lit-white'>mayores de $500.00 o pagar desde $3.99</p>
                  <p className='text-lit-white'>en envíos más chicos.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='plane2-img'></div>
          <section className='col-12 d-flex justify-content-center'>
            <div className='d-flex justify-content-between col-8'>
              <div className='col-4'>
                <div className='chat-img'></div>
              </div>
              <div className='col-10'>
                <p className='text-big-black2'>Sólo estás a un mensaje de distancia</p>
                <p className='text-lit-black2'>¿Tienes alguna duda o comentario? Estamos aquí para ayudarte,</p>
                <p className='text-lit-black2'>chatea con nosotros en WhatsApp o escríbenos a hola@zapp.global</p>
              </div>
            </div>
          </section>
        </section>
        <section className='seccionThree'>
          <section className='col-12 d-flex justify-content-center'>
              <div className='col-10 p-5'>
                <p className='text-big-black3'>Descubre la <span className='text-big-green mx-2'> nueva </span> forma fácil, rápida y segura</p>
                <p className='text-big-black3'>de enviar dinero a México</p>
                {/* <div className='col-10 video'></div> */}
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
              <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black mt-3'><div className='btnwhats4-img'></div></Nav.Link>
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
                <div className='row'>
                  <div className='facebook-img'></div>
                  <div className='instagram-img'></div>
                  <div className='x-img'></div>
                  <div className='linkeding-img'></div>
                  <div className='uni-img'></div>
                </div>
              </div>
              <div className='col-3'>
                <p className='text-lit-white'>Compañia</p>
                <p className='text-lit-white2'>FAQs</p>
                <p className='text-lit-white2 mb-2'>Empleos</p>
                <p className='text-lit-white'>Legales</p>
                <p className='text-lit-white2'>Aviso de privacidad</p>
                <p className='text-lit-white2'>Términos de uso</p>
                <p className='text-lit-white2'>Aviso legal</p>
              </div>
              <div className='col-3'>
                <p className='text-lit-white'>Contacto</p>
                <div className='row'>
                  <div className='col-1'>
                    <div className='location-img'></div>
                  </div>
                  <div className='col-8'>
                    <p className='text-lit-white3'>2001 Timberloch place,</p>
                  </div>
                </div>
                <p className='text-lit-white4'>suite 500, The Woodlands </p>
                <p className='text-lit-white2 mb-2'>TX 77380</p>
                <div className='row'>
                  <div className='col-1'>
                    <div className='correo-img'></div>
                  </div>
                  <div className='col-8'>
                    <p className='text-lit-white3'>hola@zapp.global</p>
                  </div>
                </div>
                <p className='text-lit-white2'>2023 Zapp Inc.</p>
                <p className='text-lit-white2'>Todos los derechos reservados.</p>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className='mobile'>          
        <section className='seccionTwo'>
          <div className='fondoverde-img'>
              <div className='col-12 d-flex justify-content-center'>
                <div className='col-8 mt-5 pt-5'>
                  <p className='text-big-white1'>Envía dinero</p>
                  <p className='text-big-white1'>a Mexico tan fácil</p>
                  <p className='text-big-white1' >como chatear</p>
                  <p className='text-big-white1'>en WhatsApp</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
              <Card className='col-8 p-3'>
                <Card.Body>
                  <p className='text-lit-black4'>Escríbenos por WhatsApp </p>
                  <p className='text-lit-black4'>y haz tu primer envío por</p>
                  <Card.Text className='text-mid-green'>
                    ! $0 de comisión !
                  </Card.Text>
                  <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black'><div className='btnwhats2-img col-12'></div></Nav.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center mt-5 mb-4'>
            <div className='col-7'>
              <p className='text-mid-black'>Tus seres queridos podrán</p>
              <p className='text-mid-black'>recibir su dinero en más de</p>
              <p className='text-mid-black'><span className='text-mid-green2 ml-2'> 40,000 </span> <span className='text-mid-green2 mx-2'> puntos </span> de pago</p>
              <p className='text-mid-black'>o directo a su cuenta bancaria.</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <div className='col-8 row d-flex justify-content-around'>
              <div className='electra-img'></div>
              <div className='oxxo-img'></div>
              <div className='coppel-img'></div>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <div className='col-8 row d-flex justify-content-around'>
              <div className='walmart-img col-6'></div>
              <div className='banorte-img col-6'></div>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center mb-5'>
            <div className='col-8 row d-flex justify-content-around'>
                <div className='soriana-img'></div>
                <div className='farmacias-img'></div>
                <div className='bbva-img'></div>
            </div>
          </div>
        </section>
        <section className='seccionThree'>
          <div className='col-12 d-flex justify-content-center mt-5 mb-4'>
            <div className='col-8'>
            <p className='d-flex justify-content-center text-big-black'>¡Haz tu envío en</p>
            <p className='d-flex justify-content-center text-big-black'>un dos por tres!</p>
           </div>
          </div>
          <section className='pb-5 col-12'>
            <div className='row justify-content-center'>
              <Card className='col-7 p-4 my-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='whats2-img col-1'></div>
                    <Card.Title className='col-9'>Escríbenos</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Haz clic en el botón</Card.Text>
                  <Card.Text className='text-lit-black5'>de <span className='text-lit-black6'> Envía Dinero Hoy </span></Card.Text>
                  <Card.Text className='text-lit-black5'>e inicia un chat dentro </Card.Text>
                  <Card.Text className='text-lit-black5'>de WhatsApp. </Card.Text>
                </Card.Body>
              </Card>
              <Card className='col-7 p-4 my-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='note-img col-1'></div>
                    <Card.Title className='col-9'>Ingresa los detalles</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Sigue los pasos indicados</Card.Text>
                  <Card.Text className='text-lit-black5'> en el chat. Ingresa el monto</Card.Text>
                  <Card.Text className='text-lit-black5'>del envío, tu destinatario y </Card.Text>
                  <Card.Text className='text-lit-black5'>la forma en que va a recibir </Card.Text>
                  <Card.Text className='text-lit-black5'>  el dinero.</Card.Text>
                </Card.Body>
              </Card>
              <Card className='col-7 p-4 my-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='coin2-img col-1'></div>
                    <Card.Title className='col-9'>Paga</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Selecciona un método</Card.Text>
                  <Card.Text className='text-lit-black5'>de pago a través de un</Card.Text>
                  <Card.Text className='text-lit-black5'>enlace seguro y </Card.Text>
                  <Card.Text className='text-lit-black5'>confirma el envío.</Card.Text>
                </Card.Body>
              </Card>
              <Card className='col-7 p-4 my-5 color-blue'>
                <Card.Body>
                  <section className='d-flex justify-content-between col-12 mb-3'>
                    <div className='check-img col-1'></div>
                    <Card.Title className='col-9'>Recibe tu confirmación</Card.Title>
                  </section>
                  <Card.Text className='text-lit-black5'>Recibirás la confirmación</Card.Text>
                  <Card.Text className='text-lit-black5'>del envío después </Card.Text>
                  <Card.Text className='text-lit-black5'>de procesar tu pago.</Card.Text>
                </Card.Body>
              </Card>
              <div className='col-12 d-flex justify-content-center mt-5'>
                <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black mt-3'><div className='btnwhats3-img'></div></Nav.Link>
              </div>
            </div>
          </section>
        </section>
        <section className='seccionFour'>
          <div className='fondoazul-img py-5'>
            <div className='col-12 d-flex justify-content-center my-5'>
              <div className='col-8'>
                <p className='text-big-white'>Bueno, bonito</p>
                <p className='text-big-white'>y barato</p>
              </div>
            </div>
            <div className='col-12 d-flex justify-content-center'>
              <div className='col-9 row'>
                <div className='col-3'>
                  <div className='whats-img'></div>
                </div>
                <div className='col-9'>
                  <p className='text-mid-white1 my-4'>Súper fácil</p>
                  <p className='text-lit-white'>Libérate de hacer fila</p>
                  <p className='text-lit-white'>en la tienda o de bajar</p>
                  <p className='text-lit-white'>una aplicación más.</p>
                  <p className='text-lit-white'>Envía dinero de volada</p>
                  <p className='text-lit-white mb-4'>desde WhatsApp.</p>
                </div>
              </div>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <div className='col-9 row'>
                  <div className='col-3'>
                    <div className='lock-img'></div>
                  </div>
                  <div className='col-9'>
                    <p className='text-mid-white1 my-4'>Seguro</p>
                    <p className='text-lit-white'>Tu información está</p>
                    <p className='text-lit-white'>encriptada por lo que</p>
                    <p className='text-lit-white'>Estamos registrados ante</p>
                    <p className='text-lit-white'>FinCEN con el gobierno</p>
                    <p className='text-lit-white'>de los  Estados Unidos y tu</p>
                    <p className='text-lit-white'>envío está protegido con</p>
                    <p className='text-lit-white'>nuestra garantía</p>
                    <p className='text-lit-white mb-4'>de devolución.</p>
                  </div>
                </div>
            </div>
          <div className='col-12 d-flex justify-content-center'>
              <div className='col-9 row'>
                <div className='col-3'>
                  <div className='coin-img'></div>
                </div>
                <div className='col-9'>
                  <p className='text-mid-white1 my-4'>Económico</p>
                  <p className='text-lit-white'>La comisión de tu primer</p>
                  <p className='text-lit-white'>envío es gratuita con nosotros.</p>
                  <p className='text-lit-white'>Después, puedes continuar</p>
                  <p className='text-lit-white'>sin pagar comisión en envíos</p>
                  <p className='text-lit-white'>mayores de $500.00 o</p>
                  <p className='text-lit-white'>pagar desde $3.99</p>
                  <p className='text-lit-white'>en envíos más chicos.</p>
                </div>
              </div>
          </div>
        </div>
        <div className='plane2-img'></div>
          <section className='col-12 d-flex justify-content-center'>
            <div className='d-flex justify-content-between col-8'>
              <div className='col-10 mt-5'>
                <p className='text-big-black2'>Sólo estás</p>
                <p className='text-big-black2'>a un mensaje</p>
                <p className='text-big-black2'>de distancia</p>
                <p className='text-lit-black2 mt-5'>¿Tienes alguna duda</p>
                <p className='text-lit-black2'>o comentario?</p>
                <p className='text-lit-black2'>Estamos aquí para ayudarte,</p>
                <p className='text-lit-black2'>chatea con nosotros en WhatsApp</p>
                <p className='text-lit-black2 mb-4'>o escríbenos a hola@zapp.global</p>
              </div>
              <div className='col-4'>
                <div className='chat-img'></div>
              </div>
            </div>
          </section>
        </section>
        <section className='seccionThree'>
          <section className='col-12 d-flex justify-content-center py-5'>
              <div className='col-8'>
                <p className='text-big-black3'>Descubre la <span className='text-big-green mx-2'> nueva </span> forma</p>
                <p className='text-big-black3'>fácil, rápida y segura de</p>
                <p className='text-big-black3'>enviar dinero a México</p>
                {/* <div className='col-10 video'></div> */}
              </div>
          </section>
        </section>
        <section className='seccionFive col-12 py-5'>
          <section className='d-flex justify-content-center col-12 mt-5'>
            <div className='col-8'>
              <p className='text-mid-white'>Libérate de hacer</p>
              <p className='text-mid-white'>fila en la tienda</p>
              <p className='text-mid-white'>o de bajar</p>
              <p className='text-mid-white'>aplicaciones.</p>
            </div>
          </section>
          <section className='d-flex justify-content-center col-12 mt-5'>
          <Nav.Link href="https://api.whatsapp.com/send?phone=13468144905" className='text-header-black mt-3'><div className='btnwhats4-img'></div></Nav.Link>
          </section>
          <hr></hr>
          <section className='d-flex justify-content-center col-12 mt-5'>
            <div className='zapp2-img'></div>
          </section>
          <section className='d-flex justify-content-center col-12'>
            <div className='col-8'>
              <p className='text-lit-white6'>Envía dinero a México de forma segura desde WhatsApp.</p>
              <p className='text-lit-white6'>Zapp es la forma más fácil y segura de enviar dinero</p>
              <p className='text-lit-white6'>sin hacer fila en la tienda ni descargar una app.</p>
            </div>
          </section>
          <section className='d-flex justify-content-center col-12'>
            <div className='col-8 row'>
              <div className='facebook-img'></div>
              <div className='instagram-img'></div>
              <div className='x-img'></div>
              <div className='linkeding-img'></div>
              <div className='uni-img'></div>
            </div>
          </section>
          <section className='d-flex justify-content-center col-12'>
            <div className='col-8'>
              <p className='text-lit-white'>Compañia</p>
              <p className='text-lit-white2'>FAQs</p>
              <p className='text-lit-white2 mb-2'>Empleos</p>
              <p className='text-lit-white'>Legales</p>
              <p className='text-lit-white2'>Aviso de privacidad</p>
              <p className='text-lit-white2'>Términos de uso</p>
              <p className='text-lit-white2'>Aviso legal</p>
            </div>
          </section>
          <section className='d-flex justify-content-center col-12 mb-5'>
            <div className='col-8'>
              <p className='text-lit-white'>Contacto</p>
              <div className='row'>
                <div className='col-1'>
                  <div className='location-img'></div>
                </div>
                <div className='col-8'>
                  <p className='text-lit-white3'>2001 Timberloch place,</p>
                </div>
              </div>
              <p className='text-lit-white4'>suite 500, The Woodlands </p>
              <p className='text-lit-white2 mb-2'>TX 77380</p>
              <div className='row'>
                <div className='col-1'>
                  <div className='correo-img'></div>
                </div>
                <div className='col-8'>
                  <p className='text-lit-white3'>hola@zapp.global</p>
                </div>
              </div>
              <p className='text-lit-white2'>2023 Zapp Inc.</p>
              <p className='text-lit-white2'>Todos los derechos reservados.</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;