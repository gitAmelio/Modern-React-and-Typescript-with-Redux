
type PurposeType = (
  "primary"   | 
  "secondary" |
  "success"   | 
  "warning"   |
  "danger"
);

interface ButtonProps {
  // purpose
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  // shape
  rounded?: boolean;
  outlined?: boolean;
  purpose?: PurposeType;
  children: React.ReactNode
}

// const Button: React.FC<ButtonProps>  = ({children}: PropsWithChildren<{}>) => {
const Button: React.FC<ButtonProps>  = ({rounded, outlined, purpose, children}) => {
  console.log(`${rounded ? "pill" : "standard"}`)
  console.log(`${outlined ? "outlined": "not-outlined"}`)
  console.log(purpose)
  return <button>{children}</button>
}

export default Button;