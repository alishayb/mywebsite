import Link from "next/link"

const Button = ({ to, children }) => {
  return (
    <Link href={to}>
      <button>{children}</button>
    </Link>
  )
}

export default Button
