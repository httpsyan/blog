import { Category, Post } from "./types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Neurodiversidade",
    slug: "neurodiversidade",
    description: "Conteúdo sobre diferentes formas de neurodivergência",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Dia Mundial da Conscientização do Autismo",
    description:
      "2 de Abril - Um dia para compreender, aceitar e celebrar a neurodiversidade",
    content: `<p>O Transtorno do Espectro Autista (TEA) é uma condição neurológica que afeta o desenvolvimento cerebral, impactando a forma como uma pessoa se comunica, interage socialmente e processa informações sensoriais. É chamado de "espectro" porque se manifesta de maneiras diferentes em cada pessoa.</p>

<p>Como especialista em neurologia e desenvolvimento infantil, tenho observado ao longo dos anos que cada pessoa autista é única, com suas próprias características, desafios e potencialidades. O TEA não é uma doença a ser curada, mas uma forma diferente de desenvolvimento neurológico que merece compreensão, respeito e suporte adequado.</p>

<h2>Características do TEA:</h2>
<ul>
  <li>Diferenças na comunicação social e interação</li>
  <li>Padrões repetitivos de comportamento</li>
  <li>Interesses específicos e intensos</li>
  <li>Sensibilidade sensorial (sons, luzes, texturas)</li>
  <li>Formas únicas de processar informações</li>
</ul>

<h2>Por que o dia 2 de abril?</h2>
<p>O dia 2 de abril foi estabelecido pela ONU em 2007 como o Dia Mundial da Conscientização do Autismo. A data tem como objetivo promover a compreensão sobre o autismo, combater o preconceito e celebrar a neurodiversidade. Como profissional da área, considero esta data fundamental para ampliar o diálogo e a conscientização sobre o TEA.</p>

<h2>Como apoiar a comunidade autista:</h2>
<ul>
  <li>Eduque-se sobre o TEA e suas diferentes manifestações</li>
  <li>Respeite as diferenças e necessidades individuais</li>
  <li>Promova ambientes inclusivos e acessíveis</li>
  <li>Apoie organizações que trabalham com pessoas autistas</li>
  <li>Combata estigmas e desinformação</li>
</ul>

<p>É importante ressaltar que o símbolo do quebra-cabeça e a cor azul, frequentemente usados para representar a conscientização sobre o autismo, têm sido questionados pela própria comunidade autista. Muitos preferem o símbolo do infinito dourado ou arco-íris, que representa a neurodiversidade de forma mais positiva e inclusiva.</p>

<blockquote>"Diferente, não menos" - Este é um lema que sempre compartilho com as famílias que atendo. Ser diferente não significa ser inferior, e cada pessoa autista tem seu próprio potencial para se desenvolver e contribuir com a sociedade de maneira única.</blockquote>

<p>Como médico especialista em desenvolvimento infantil, enfatizo a importância do diagnóstico precoce e do acompanhamento adequado. Quanto mais cedo identificarmos e compreendermos as características individuais de cada pessoa autista, melhor poderemos apoiar seu desenvolvimento e garantir sua inclusão plena na sociedade.</p>`,
    slug: "dia-mundial-conscientizacao-autismo",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop",
    category: categories[0],
    author: {
      name: "Dr. Renato de Paula",
      avatar: "/renato.jpeg",
    },
    readTime: "8 min",
    publishedAt: "02/04/2025",
    tags: [
      "autismo",
      "neurodiversidade",
      "conscientização",
      "inclusão",
      "desenvolvimento infantil",
    ],
  },
];
