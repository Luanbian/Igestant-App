const datasPrincipal = [
  {
    name: "Muda algo em relação as vacinas em crianças prematuras?",
    description:
      "Sim, no caso do bebê ter menos do que 2kg algumas vacinas devem ser adiadas.",
    resposta:
      "Se o peso do bebê ao nascer for menor que 2kg, a BCG deve ser adiada até que alcance os 2kg ainda na maternidade. As demais vacinas devem ser aplicadas conforme idade cronológica. Alguns bebês prematuros podem ter indicação de receber anticorpos, que não são uma vacina propriamente dita, mas sim um anticorpo “pronto”, mas que devem ser avaliados caso a caso junto do médico pediatra.",
    refe: "Ref: Beatriz Milene de Oliveira Camargo Acadêmica de Medicina do 4o ano Universidade Anhembi Morumbi - SP",
    image: require("../../../assets/imgs/vacina.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "1",
  },
  {
    name: "Mães de adoção conseguem realizar a amamentação?",
    description:
      "O sonho de amamentar não precisa ser exclusividade das mulheres que engravidam",
    resposta:
      "Mães adotivas também podem nutrir o filho graças à indução à lactação. A técnica consiste em oferecer leite artificial ou materno (doado) atrávez de um cateter aclopado, e ao mesmo tempo o bebê suga o seio, esta técnica pode estimular o organismo da mulher a fabricar leite depois de um tempo, pois quanto mais o bebê suga o peito mais líquido é produzido.",
    refe: "Ref: Marcus Renato de Carvalho, pediatra docente da UFRJ.",
    image: require("../../../assets/imgs/ado.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "2",
  },
  {
    name: "Quando posso colocar açucar na alimentação do recém nascido?",
    description: "não se deve oferecer açúcar para bebês menores de dois anos.",
    resposta:
      "Coisas com açúcar em sua composição não devem ser dados os bebês. Isso inclui sucos industrializados cheios de açúcar, bolachas (sim, a de maisena também) e doces em geral, todo açúcar que é consumido engorda - Você pode levar o bebê a desenvolver sobrepeso! - É altamente viciante e crianças que consomem açúcar têm maior risco de desenvolver diabetes, obesidade e problemas relacionados.",
    refe: "Ref: Guia alimentar para crianças - Ministério da Saúde.",
    image: require("../../../assets/imgs/assucar.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "3",
  },
  {
    name: "Cólicas em bebês é algo comum? e como lidar?",
    description:
      "Sim, cólicas são comuns e costumam desaparecer antes dos 4 meses de vida",
    resposta:
      "Cólicas são comuns e definidas como choro que não para por pelo menos três horas, em três dias da semana, com duração maior que três semanas. Costuma desaparecer antes dos 4 meses de vida. Para ajudar, o bebê pode se colocar sob barriga da mãe, contato pele a pele; depois enrolar o bebê em uma manta, outra opção é flexionar com cuidado as coxas do bebê sobre a barriga e dar um banho morno; NÃO utilizar chás sem avaliação do pediatra.",
    refe: "Ref: Beatriz Milene de Oliveira Camargo Acadêmica de Medicina do 4o ano na Universidade Anhembi Morumbi - SP",
    image: require("../../../assets/imgs/colicas.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "4",
  },
  {
    name: "Até quando eu amamento meu bebê?",
    description: "Serão 6 meses de pura amamentação, até mesmo sem água.",
    resposta:
      "Após os seis meses recomenda-se começar a introduzir outros alimentos na dieta, ao mesmo tempo em que na medida do possível o aleitamento continue até os 2 anos de idade. Nos casos em que a mãe não pode amamentar por qualquer motivo, temos perguntas respondidas sobre este assunto, pode-se recorrer às fórmulas infantis. A orientação é procurar a ajuda de um pediatra para saber qual a melhor conduta em cada caso.",
    refe: "Ref: Dr. Rubens Feferbaum, pediatra e presidente do Departamento de Nutrição da Sociedade de Pediatria de São Paulo (SPSP)",
    image: require("../../../assets/imgs/quando.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "5",
  },
  {
    name: "Em qual posição a criança deve dormir no berço?",
    description:
      "De acordo com a S.B.P. os bebês devem dormir de barriga para cima.",
    resposta:
      "Bebês devem dormir de barriga para cima, não de lado nem de barriga para baixo. Os riscos de dormir de lado são semelhantes aos de dormir de bruços. Essa posição é instável e muitos bebês rolam e ficam de barriga para baixo. Evite agasalhar demais o bebê na hora de dormir, pois isso dificulta os movimentos e pode superaquecê-lo. E também deixe o berço livre de almofadas, travesseiros, “cheirinhos”, pelúcias e outros brinquedos, pois eles podem dificultar a respiração.",
    refe: "Ref: Beatriz Milene de Oliveira Camargo Acadêmica de Medicina do 4o ano na Universidade Anhembi Morumbi - SP",
    image: require("../../../assets/imgs/dormir.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "6",
  },
  {
    name: "Sinais de excesso de leite nos seios",
    description:
      "Isso se chama hiperlactação, confira no saiba mais alguns dos sinais",
    resposta:
      'Quando a mãe produz leite demais, o bebê pode: "Brigar" com o peito, ficar soltando e largando o seio da mãe, com dificuldade para abocanhar a aréola e sustentar a pega, e morder o mamilo tentando conter o fluxo muito intenso de leite, tossir e engasgar enquanto mama por não conseguir engolir rápido o suficiente ou regurgitar bastante (a hiperlactação pode ser confundida com o refluxo) O peito de uma mulher que produz leite materno em excesso tende a quase nunca ficar mais leve e confortável.',
    refe: "Ref: Conselho Médico do BabyCenter Brasil.",
    image: require("../../../assets/imgs/hiperlac.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "7",
  },
  {
    name: "Por que se deve procurar pediatra ainda durante o pré-natal?",
    description:
      "A consulta com o pediatra durante o pré-natal é essencial para antecipar certos riscos.",
    resposta:
      "A consulta com o pediatra durante o pré-natal é essencial para antecipar certos riscos. Os primeiros 1000 dias de vida (desde a concepção até dois anos de idade) são extremamente importantes para a definição da saúde da criança. Nessa consulta podem ser trabalhadas diversas dúvidas sobre gestação, parto, nascimento, aleitamento, teste do pézinho, acompanhamento da saúde da criança e outras dúvidas que possam surgir.",
    refe: "Ref: Beatriz Milene de Oliveira Camargo Acadêmica de Medicina do 4o ano Universidade Anhembi Morumbi - SP.",
    image: require("../../../assets/imgs/pre.jpeg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "8",
  },
  {
    name: "O refluxo em bebês é algo normal?",
    description: "O refluxo é frequente em bebês nos primeiros meses de vida.",
    resposta:
      "Os episódios de refluxo é frequente em bebês normais nos primeiros meses de vida, e para a maioria se resolvem sozinhos entre o primeiro e segundo ano de vida. É importante procurar ajuda médica se não tiver melhora até seis meses de vida, ou se não melhorar com ajustes de postura e dieta do bebê ou quando houver parada do crescimento, irritabilidade e choro excessivo.",
    refe: "Ref: Beatriz Milene de Oliveira Camargo Acadêmica de Medicina do 4o ano Universidade Anhembi Morumbi - SP",
    image: require("../../../assets/imgs/refluxo.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "9",
  },
  {
    name: "O tamanho dos seios influencia na quantidade de leite?",
    description:
      "Sejam grandes ou pequenos, o tamanho dos seios não tem relação com a produção de leite",
    resposta:
      "As mamas são constituídas por glândulas, gordura e músculo. O que define o tamanho dos seios é a gordura, e ele não possui relação com a produção de leite. Quem é responsável pela produção do leite são as glândulas mamárias, e elas são preparadas para o processo durante todo o período gestacional. “A produção do leite está relacionada a fatores como estímulo hormonal, ingestão de água e o estado emocional da mulher. Ela se adequa às necessidades do bebê”.",
    refe: "Ref: Dra. Monique Novacek, ginecologista e mastologista da Clínica Mantelli.",
    image: require("../../../assets/imgs/leite.jpg"),
    saiba: "saiba mais",
    voltar: "Voltar",
    id: "10",
  },
];
export default datasPrincipal;
