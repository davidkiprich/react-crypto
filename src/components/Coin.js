import styled from 'styled-components';

const CoinContainer = styled.div`
height:300px;
width: 400px;
background: #f0f0f0;
margin-bottom: 20px;
border-radius: 10px;
text-align: center;
box-shadow: 0 3px 8px rgba(0,0,0,0.3);
padding: 8px 0;
`;

const ContImg = styled.img`

width:64px;
height:64px;

`;

const Button = styled.button`
padding: 15px 35px;
border-radius: 8px;
border: none;
background: rgb(48,48,252);
color: #fff;
cursor:pointer;
`;

export default function Coin({name, price, icon, symbol}) {
  return (
    <CoinContainer>
        <h2>Név: {name}</h2>
        <ContImg src={icon} alt={name}/>
        <h3>Ár: {(price*380).toFixed(0)}HUF</h3>
        <h3>Ikon: {symbol}</h3>
        <Button>Vásárlás</Button>
    </CoinContainer>
  )
}
