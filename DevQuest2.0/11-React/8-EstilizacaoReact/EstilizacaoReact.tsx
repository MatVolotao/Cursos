function EstilizacaoReact() {

    // =====================================================
    // 1. CSS INLINE COM OBJETO
    // =====================================================

    const estiloParagrafo = {
        color: "blue",
        fontSize: "18px",
        fontWeight: "bold",
    };

    // =====================================================
    // ESTILO CONDICIONAL
    // =====================================================

    const ativo = true;

    return (
        <div>
            <h1>Estilização no React</h1>


            {/* =================================================
                1. CSS INLINE
               ================================================= */}

            <h2>1. CSS Inline</h2>

            <p
                style={{
                    color: "red",
                    fontSize: "18px",
                }}
            >
                CSS Inline diretamente no elemento
            </p>


            {/* Também podemos criar um objeto com os estilos */}

            <p style={estiloParagrafo}>
                CSS Inline utilizando um objeto
            </p>


            {/* =================================================
                2. ESTILIZAÇÃO CONDICIONAL
               ================================================= */}

            <h2>2. Estilização Condicional</h2>

            <button
                style={{
                    backgroundColor: ativo ? "green" : "gray",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                {ativo ? "Ativo" : "Inativo"}
            </button>


            {/* =================================================
                3. CSS TRADICIONAL
               ================================================= */}

            <h2>3. CSS Tradicional</h2>

            {/*
                Normalmente importaríamos:

                import "./EstilizacaoReact.css";

                CSS:

                .texto {
                    color: purple;
                    font-size: 18px;
                }

                JSX:

                <p className="texto">
                    CSS tradicional
                </p>

                IMPORTANTE:

                HTML:
                class="texto"

                React:
                className="texto"
            */}

            <p>
                CSS tradicional utiliza arquivos .css externos.
            </p>


            {/* =================================================
                4. CSS MODULES
               ================================================= */}

            <h2>4. CSS Modules</h2>

            {/*
                Arquivo:

                EstilizacaoReact.module.css


                CSS:

                .texto {
                    color: orange;
                }


                Import:

                import styles from "./EstilizacaoReact.module.css";


                Utilização:

                <p className={styles.texto}>
                    CSS Modules
                </p>


                VANTAGEM:

                As classes ficam isoladas e evitam conflitos
                entre componentes.
            */}

            <p>
                CSS Modules cria estilos isolados por componente.
            </p>


            {/* =================================================
                5. STYLED COMPONENTS
               ================================================= */}

            <h2>5. Styled Components</h2>

            {/*
                É necessário instalar a biblioteca:

                npm install styled-components


                Exemplo:

                import styled from "styled-components";


                const Botao = styled.button`
                    background-color: blue;
                    color: white;
                    padding: 10px 20px;
                `;


                Depois:

                <Botao>Salvar</Botao>
            */}

            <p>
                Styled Components permite escrever CSS dentro
                do JavaScript/TypeScript.
            </p>


            {/* =================================================
                6. TAILWIND CSS
               ================================================= */}

            <h2>6. Tailwind CSS</h2>

            {/*
                Com Tailwind configurado no projeto:

                <button
                    className="
                        bg-blue-500
                        text-white
                        px-4
                        py-2
                        rounded
                    "
                >
                    Salvar
                </button>

                Cada classe representa uma propriedade CSS.

                bg-blue-500 -> background
                text-white  -> cor do texto
                px-4        -> padding horizontal
                py-2        -> padding vertical
                rounded     -> border-radius
            */}

            <p>
                Tailwind utiliza classes utilitárias para estilização.
            </p>


            {/* =================================================
                7. SASS / SCSS
               ================================================= */}

            <h2>7. Sass / SCSS</h2>

            {/*
                Arquivo:

                EstilizacaoReact.scss


                Exemplo:

                .card {
                    padding: 20px;

                    .titulo {
                        font-weight: bold;
                    }

                    .descricao {
                        color: gray;
                    }
                }


                Depois:

                import "./EstilizacaoReact.scss";
            */}

            <p>
                Sass adiciona recursos extras para organização do CSS.
            </p>

        </div>
    );
}

export default EstilizacaoReact;