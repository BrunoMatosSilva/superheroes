import logotipo from '../assets/images/logo.png';
import { Content } from './styles';

export function Header() {
    return (
        <Content>
            <div>
                <img className="headerLogo" src={logotipo} alt="Logotipo SuperHeroes" />
                <a>cor</a>
            </div>
        </Content>
    );
}