import logotipo from "../assets/images/logo.png";
import { Content } from "../styles/Home/styles";

export function Home() {

    return (
        <Content>
            <div className="sectionAcess">
            </div>
            <section>
                <img className="logotipo" src={logotipo} alt="Logo SuperHeroes" />

            </section>
            <div className="sectionImg">

                <section>
                    <p>Conheça mais sobre o seu héroi favorito e crie seu esquadrão.</p>
                    <a href="/listhero">Acessar o Catalogo</a>
                </section>
            </div>
        </Content>
    )
}