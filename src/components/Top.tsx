import { Header, Button, Menu } from 'grommet';
import { Home } from 'grommet-icons';
import { useNavigate } from 'react-router';

function Top(){
    const nav = useNavigate();
    return(
        <Header background="brand" className='position-fixed w-100'>
          <Button icon={<Home />} onClick={()=>nav("/")} hoverIndicator />
          <Menu label="account" items={[
              { 
                label: 'TodoAdd',
                onClick: () => {nav("/todoadd")}
              },
              { 
                label: 'SinAccountProofs',
                onClick: () => {nav("/sinaccountproofs")}
              },
              { 
                label: 'Logout',
                onClick: () => {console.log("logout")}
              }
          ]} />
        </Header>
    )
}

export default Top;
