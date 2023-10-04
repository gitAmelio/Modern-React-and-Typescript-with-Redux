import { twMerge } from "tailwind-merge";

interface PanelProps  {
  children: React.ReactNode;
  className: string;
  [key: string]: any;  // ...rest
}

const Panel: React.FC<PanelProps> = ({children, className, ...rest}) => {
  return (
    <div {...rest} className={twMerge('rounded p-3 shadow bg-white w-full', className)}>
      {children}
    </div>
  )
}

export default Panel;