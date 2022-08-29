import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Education, EducationProps } from "./Education";
import { Experience, ExperienceProps } from "./Experience";

export const ResumeMainInfos = () => {
  return (
    <VStack align={"start"} p={5} gap={2}>
      <Heading size={"lg"}>Perfil</Heading>
      <Text size={"lg"}>
        Passo boa parte do tempo estudando, realmente gosto do que eu faço.
        Estudo muito sobre a área e também sobre negócios e gestão em geral para
        melhorar minha comunicação, mas minha principal atividade é desenvolver,
        tenho muita facilidade em aprender tecnologias novas. Tenho foco em
        aplicações web, sou bem comunicativo e me preocupo com a qualidade do
        meu trabalho.
      </Text>

      <Divider></Divider>

      <Heading size={"lg"}>Formação Acadêmica</Heading>
      {EDUCATIONS.map((item, index) => (
        <Education
          key={index}
          title={item.title}
          description={item.description}
          startDate={item.startDate}
          endDate={item.endDate}
        />
      ))}

      <Divider></Divider>

      <Heading size={"lg"}>Experiência Profissional</Heading>
      {EXPERIENCE.map((item, index) => (
        <Experience
          key={index}
          title={item.title}
          activities={item.activities}
          employer={item.employer}
          startDate={item.startDate}
          endDate={item.endDate}
        />
      ))}
    </VStack>
  );
};

const EDUCATIONS: EducationProps[] = [
  {
    title: "Bacharelado, Universidade Federal de Mato Grosso do Sul",
    description: "Sistemas de Infromação",
    startDate: "Janeiro 2019",
    endDate: "Dezembro 2022",
  },
];

const EXPERIENCE: ExperienceProps[] = [
  {
    title: "Freelancer Web Developer",
    activities: [
      "Criação de websites estáticos para lojas e divulgação com HTML, CSS e Js puros.",
      "Modificações visuais em aplicações existentes.",
    ],
    startDate: "Janeiro 2020",
    endDate: "Setembro 2021",
  },
  {
    title: "Etag. Desenvolvedor full-stack",
    employer: "Climatempo",
    activities: [
      "Criação de scripts do para automação em Python.",
      "Correção de bugs em sistemas legados em PHP.",
      "Desenvolvimento e correção de bugs em aplicações NodeJs.",
    ],
    startDate: "Janeiro 2021",
    endDate: "Setembro 2021",
  },
  {
    title: "Desenvolvedor full-stack",
    employer: "Climatempo",
    activities: [
      "Desenvolvimento completo web services e micros serviços em NodeJs com ExpressJs, no padrão REST API, gRPC e GraphQL.",
      "Desenvolvimento seguindo padrões arquiteturais como Hexagonal Architecture e SOLID. ",
      "Criação de pipelines CI/CD e deploy de aplicações em ambiente Kubernetes.",
      "Criação e modelagem de bancos de dados SQL e NoSQL e integrações.",
      "Implantação de ferramentas de monitoramento e observabilidade das aplicações, com Grafana, Prometheus, Graylog e Istio.",
      "Criação de aplicações com uso de filas de mensageira, como RabbitMQ.",
      "Desenvolvimento de teste de unitários e de integração nas aplicações.",
    ],
    startDate: "Janeiro 2020",
    endDate: "Atualmente",
  },
];
