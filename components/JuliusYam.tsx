interface JuliusYamProps {
  className?: string,
}

export default function JuliusYam({ className }: JuliusYamProps) {
  return (
    <h1 className={`font-ocr uppercase text-left drop-shadow-jy-text ${ className|| '' }`}>Julius Yam</h1>
  )
}