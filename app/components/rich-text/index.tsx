type RichTextProps = {
  content: string;
}

export const RichText = ({ content }: RichTextProps) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <style jsx>{`
        b {
          font-weight: 600;
          color: #f1f1f1;
        }
        ul {
          list-style-type: disc;
          padding-left: 1rem;
        }
        a {
          color: inherit;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #10b981;
        }
      `}</style>
    </div>
  )
}