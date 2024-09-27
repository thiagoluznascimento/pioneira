import { Accordion, Container } from "react-bootstrap";

import '../styles.css'


function About() {
    return(
        <Container>
            <h2 className="titulo-h2">Quem somos</h2>
            <h3 className="sub-titulo-h3 " >VISÃO, MISSÃO E VALOR</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Visão</Accordion.Header>
                        <Accordion.Body>
                            Ser referência nacional e internacional no fornecimento de soluções agrícolas inovadoras e sustentáveis,
                            promovendo o desenvolvimento do agronegócio com qualidade, tecnologia e compromisso com o meio ambiente.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Missão</Accordion.Header>
                    <Accordion.Body>
                        Nossa missão é oferecer produtos e serviços agrícolas de alta qualidade,
                        ajudando produtores rurais a otimizar suas colheitas com eficiência, produtividade e sustentabilidade.
                        Buscamos aprimorar o agronegócio por meio de inovações tecnológicas e práticas responsáveis, sempre com o foco na satisfação dos nossos clientes e no crescimento sustentável.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Valores</Accordion.Header>
                    <Accordion.Body>
                    <strong>Inovação:</strong> Estamos comprometidos com a implementação de novas tecnologias e práticas modernas que impulsionem a eficiência no campo. <br />
                    <strong>Sustentabilidade:</strong> Atuamos com responsabilidade ambiental, promovendo soluções que respeitam o equilíbrio ecológico e reduzem impactos negativos. <br />
                    <strong>Qualidade:</strong> Garantimos a excelência em cada produto e serviço oferecido, sempre buscando superar as expectativas de nossos clientes. <br />
                    <strong>Parceria:</strong> Valorizamos relações de confiança com nossos clientes, fornecedores e colaboradores, trabalhando lado a lado para alcançar os melhores resultados. <br />
                    <strong>Ética:</strong> Nossa conduta é pautada pela transparência e respeito em todas as nossas relações, garantindo um ambiente de negócios íntegro e justo. <br />
                    <strong>Compromisso com o Cliente:</strong> Nossa prioridade é oferecer soluções que agreguem valor ao negócio dos nossos clientes, ajudando-os a alcançar o sucesso em suas atividades agrícolas. <br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h3 className="sub-titulo-h3">Nossa História</h3>
            <p>Fundada em [ano de fundação], a Terragro nasceu do desejo de transformar o agronegócio com produtos de alta qualidade e tecnologias inovadoras. Iniciamos nossas operações focados em fornecer sementes de excelência, desenvolvidas por meio de pesquisas avançadas e cuidadosamente selecionadas para atender às necessidades dos agricultores brasileiros. Desde o início, nossa missão sempre foi clara: ajudar os produtores rurais a aumentar sua produtividade de forma sustentável e eficiente.</p>
            <p>Com o tempo, expandimos nosso portfólio para incluir máquinas e equipamentos agrícolas, como drones pulverizadores e cortadores de grama de alta performance. Nossos produtos foram criados para simplificar o trabalho no campo, oferecendo mais praticidade e resultados superiores para produtores de todos os portes. Ao longo dessa jornada, consolidamos parcerias estratégicas com centros de pesquisa e especialistas agronômicos, garantindo que nossas soluções estivessem sempre à frente das inovações do setor.</p>
            <p>Além de tecnologia, temos um compromisso sólido com a sustentabilidade. Desde o início, implementamos práticas que respeitam o meio ambiente, desenvolvendo sementes e tecnologias que promovem o uso responsável dos recursos naturais. Essa visão nos permitiu crescer e nos tornar uma referência no setor agrícola, atendendo clientes em diversas regiões do Brasil.</p>            
            <p>Hoje, a Terragro continua a crescer, sempre guiada pelos valores que nos trouxeram até aqui: inovação, sustentabilidade e excelência. Nossa equipe trabalha diariamente para oferecer soluções que impulsionam o futuro do agronegócio, ajudando agricultores a alcançar o sucesso e a produzir com responsabilidade.</p>

            <h3 className="sub-titulo-h3" >Sustentabilidade</h3>
            <p>A sustentabilidade sempre foi uma das nossas principais preocupações. Desde o início, buscamos desenvolver soluções que minimizem o impacto ambiental e promovam o uso responsável dos recursos naturais. Acreditamos que o futuro da agricultura depende de práticas sustentáveis, e trabalhamos constantemente para inovar nesse sentido. Um dos nossos marcos importantes foi o lançamento de sementes adaptadas a diferentes condições climáticas e resistentes a pragas, ajudando os agricultores a produzir mais com menos recursos, mantendo o foco na preservação do solo e da biodiversidade.</p>

            <h3 className="sub-titulo-h3" >Inovação Contínua</h3>
            <p>A Terragro acredita que a inovação é a chave para o futuro do agronegócio. Estamos constantemente investindo em pesquisas e novas tecnologias para oferecer soluções mais eficientes e modernas aos nossos clientes. Nossos produtos são desenvolvidos com foco na tecnologia de ponta, garantindo que os agricultores tenham acesso ao que há de melhor para melhorar a produtividade e enfrentar os desafios do campo. Trabalhamos lado a lado com centros de pesquisa e especialistas para que a inovação esteja presente em cada uma de nossas soluções, do plantio à colheita.</p>

            <h3 className="sub-titulo-h3">Parceria com o Produtor Rural</h3>
            <p>Valorizamos profundamente a parceria com o agricultor e entendemos que cada fazenda, cada colheita, tem suas próprias particularidades. Por isso, oferecemos um atendimento personalizado, com foco em entender as necessidades específicas de cada cliente e oferecer soluções que realmente façam a diferença. Estamos ao lado dos produtores em todas as etapas do processo, desde o planejamento até a execução, oferecendo suporte técnico, consultoria especializada e produtos que agregam valor. A confiança que construímos ao longo dos anos com nossos clientes é a base do nosso sucesso.</p> <br />
        </Container>
    );
}

export default About;

