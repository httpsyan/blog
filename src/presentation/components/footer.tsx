export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-primary-foreground py-12 flex items-center justify-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Blog R1. Todos os direitos reservados.
      </p>
    </footer>
  );
};
