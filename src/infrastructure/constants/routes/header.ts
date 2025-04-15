export const MAIN_NAVIGATION_ITEMS = [
  { name: "Neurodiversidade", href: "/categorias/neurodiversidade" },
  {
    name: "Desenvolvimento Infantil",
    href: "/categorias/desenvolvimento-infantil",
  },
  { name: "Saúde Mental", href: "/categorias/saude-mental" },
  { name: "Educação Inclusiva", href: "/categorias/educacao-inclusiva" },
  { name: "Terapias", href: "/categorias/terapias" },
] as const;

export const SECONDARY_NAVIGATION_ITEMS = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Equipe", href: "/equipe" },
  { name: "Contato", href: "/contato" },
] as const;

export const FOOTER_LINKS = {
  institucional: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Nossa Equipe", href: "/equipe" },
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
  ],
  categorias: [
    { name: "Neurodiversidade", href: "/categorias/neurodiversidade" },
    {
      name: "Desenvolvimento Infantil",
      href: "/categorias/desenvolvimento-infantil",
    },
    { name: "Saúde Mental", href: "/categorias/saude-mental" },
    { name: "Educação Inclusiva", href: "/categorias/educacao-inclusiva" },
    { name: "Terapias", href: "/categorias/terapias" },
  ],
  recursos: [
    { name: "Artigos", href: "/artigos" },
    { name: "Guias", href: "/guias" },
    { name: "FAQ", href: "/faq" },
    { name: "Newsletter", href: "/newsletter" },
  ],
  contato: [
    { name: "Fale Conosco", href: "/contato" },
    { name: "Agende uma Consulta", href: "/agendar" },
    { name: "Localização", href: "/localizacao" },
  ],
} as const;
