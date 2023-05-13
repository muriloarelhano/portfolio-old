import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Education, EducationProps } from "./Education";
import { Experience, ExperienceProps } from "./Experience";

export const ResumeMainInfos = () => {
  return (
    <VStack align={"start"} p={5} gap={2}>
      <Heading size={"lg"}>Perfil</Heading>
      <Text size={"lg"}>
        Sou bacharel em Sistemas de Informação, tenho experiência principalmente
        com plataforma NodeJs com Typescript, além de algumas outras linguagens,
        como Go e .Net/C#. Trabalho com desenvolvimento de microsserviços e
        aplicações web no geral, também estudo bastante sobre outras áreas como
        segurança da informação, DevOps e desenvolvimento de games.
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
    title: "Desenvolvedor full-stack",
    employer: "Callix",
    activities: ["Desenvolvimento de aplicações web."],
    startDate: "Setembro 2021",
    endDate: "Atualmente",
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
    title: "Freelancer Web Developer",
    activities: [
      "Criação de websites estáticos para lojas e divulgação com HTML, CSS e Js puros.",
      "Modificações visuais em aplicações existentes.",
    ],
    startDate: "Janeiro 2020",
    endDate: "Setembro 2021",
  },
];
