type RichTextProps = {
  content: string;
}

// Componente para a renderização do HTML
export const RichText = ({ content }: RichTextProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}