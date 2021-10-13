import React, { useContext } from 'react';
import logotipo from '../assets/images/logo.png';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'
import { Content } from './styles';

const Header = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Content>
            <section>
                <img className="headerLogo" src={logotipo} alt="Logotipo SuperHeroes" />
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={colors.background}
                    onColor={colors.secundary}
                />
            </section>
        </Content>
    );
}

export default Header;