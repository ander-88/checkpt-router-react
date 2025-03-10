import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({Title,Description,posterURL,rating}) {
  const navigate = useNavigate()
  const handleNavigation = () => {
    switch (Title) {
      case "The Matrix (1999)":
        navigate("/matrix");
        break;
      case "The Hangover (2009)":
          navigate("/hangover");
          break;
      default:
        navigate("/"); 
        break;
    }
  };

  return (
    <Card style={{ width: '300px',height:'550px',backgroundColor:"#1a1a1a", borderRadius:"20px", margin:"10px",display:'flex',justifyContent:'center',alignItems:'center', flexDirection:"column", padding:'20px'}}>
      <Card.Img variant="top" src={posterURL} style={{width:"200px",}} />
      <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:"column"}}>
        <Card.Title style={{color:'white'}}>{Title}</Card.Title>
        <Card.Title><h2 style={{color:'#ffba02', }}>Rating:{rating}</h2></Card.Title>
        <Card.Text style={{textAlign:'center', color:'white', height:"60px" }}>{Description}</Card.Text>
        <Button className='btn-watch' variant="primary" style={{borderRadius:'14px', height:'40px', width:'80px',border:'none',color:"#1a1a1a",fontWeight:'600', marginTop:"60px", cursor:'pointer'}}
        onClick={handleNavigation}>Watch</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;