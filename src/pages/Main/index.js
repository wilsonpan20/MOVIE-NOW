import React,{Component} from 'react'
import {Container,Card,Row,Col,Button} from 'react-bootstrap'
class Main extends Component {
    state = {  }
    render() {
        return (
          <>
            <Container
                style ={{
                    padding:50,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    minWidth:300,
                }}
                >
              <h1 style ={{color:'#fff',marginTop:20,fontFamily:"ubuntu"}}>Movie Now</h1>
               <Row style ={{display:'flex',justifyContent:'center'}}>
              <Card style={{ width: 250,margin:10, }}>
                <Card.Img variant="top" 
                style={{
                    width:220,
                    height:300,
                    alignSelf:'center',
                    paddingTop:20,
                    cursor:'pointer',
                }}
                src="https://i0.wp.com/bancaconect.com.br/wp-content/uploads/2021/03/Livro-ilustrado-Oficial-One-Piece.jpg" />
                <Card.Body style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',

                }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{fontSize:12,}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button style={{width:'100%',}} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: 250,margin:10, }}>
                <Card.Img variant="top" 
                style={{
                    width:220,
                    height:300,
                    alignSelf:'center',
                    paddingTop:20,
                    cursor:'pointer',
                }}
                src="https://i.pinimg.com/236x/8d/5a/4f/8d5a4fffc9ef16404beb1aadc0ef0926.jpg" />
                <Card.Body style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',

                }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{fontSize:12,}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button style={{width:'100%',}} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: 250,margin:10, }}>
                <Card.Img variant="top" 
                style={{
                    width:220,
                    height:300,
                    alignSelf:'center',
                    paddingTop:20,
                    cursor:'pointer',
                }}
                src="https://i0.wp.com/bancaconect.com.br/wp-content/uploads/2021/03/Livro-ilustrado-Oficial-One-Piece.jpg" />
                <Card.Body style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',

                }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{fontSize:12,}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button style={{width:'100%',}} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: 250,margin:10, }}>
                <Card.Img variant="top" 
                style={{
                    width:220,
                    height:300,
                    alignSelf:'center',
                    paddingTop:20,
                    cursor:'pointer',
                }}
                src="https://i0.wp.com/bancaconect.com.br/wp-content/uploads/2021/03/Livro-ilustrado-Oficial-One-Piece.jpg" />
                <Card.Body style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',

                }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{fontSize:12,}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button style={{width:'100%',}} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: 250,margin:10, }}>
                <Card.Img variant="top" 
                style={{
                    width:220,
                    height:300,
                    alignSelf:'center',
                    paddingTop:20,
                    cursor:'pointer',
                }}
                src="https://i0.wp.com/bancaconect.com.br/wp-content/uploads/2021/03/Livro-ilustrado-Oficial-One-Piece.jpg" />
                <Card.Body style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',

                }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{fontSize:12,}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button style={{width:'100%',}} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: 250,margin:10, }}>
                <Card.Img variant="top" 
                style={{
                    width:220,
                    height:300,
                    alignSelf:'center',
                    paddingTop:20,
                    cursor:'pointer',
                }}
                src="https://i0.wp.com/bancaconect.com.br/wp-content/uploads/2021/03/Livro-ilustrado-Oficial-One-Piece.jpg" />
                <Card.Body style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',

                }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{fontSize:12,}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button style={{width:'100%',}} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Row>
            </Container>
          </>
        );
    }
}

export default Main;

