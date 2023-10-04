import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { 
  PiAirplaneTiltFill,
  PiBellFill, 
  PiCloudArrowDownFill,
  PiEyeFill,
  PiHandPalmFill,
  PiCodesandboxLogoFill
} from 'react-icons/pi'; 

type Icon = 
  'plane' |
  'bell'  |
  'down'  |
  'palm'  |
  'eye'   |
  'box';

export const renderIcon = (icon: Icon) => {
  switch(icon){
    case 'plane':
      return <PiAirplaneTiltFill />
    case 'bell':  
      return <PiBellFill />
    case 'down':
      return <PiCloudArrowDownFill />
    case 'palm':
      return <PiHandPalmFill />
    case 'box':
      return <PiCodesandboxLogoFill />  
    case 'eye':
      return <PiEyeFill />     
  }  
  return <></>
}

interface ButtonProps {
  // purpose?: Purpose;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;

  // shape
  rounded?: boolean;
  outlined?: boolean;
  children: React.ReactNode;
  [key: string]: any;  // ...rest
}

// const Button: React.FC<ButtonProps>  = ({children}: PropsWithChildren<{}>) => {
const Button: React.FC<ButtonProps>  = ({

  // purpose
  primary,
  secondary,
  success,
  warning,
  danger,

  // purpose,
  rounded, 
  outlined, 

  children,
  ...rest
}) => {
  
  const { className } = rest;

  let classes = classNames(rest.className, 'w-[100%] button flex flex-1 items-center m-2 h-8 px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
  });

  if (outlined) twMerge(classes, 'bg-white');

  if (outlined && primary) classes = twMerge(classes, 'text-blue-500 bg-white');
  if (outlined && secondary) classes = twMerge(classes, 'text-gray-900 bg-white');
  if (outlined && success) classes = twMerge(classes,  'text-green-500 bg-white');
  if (outlined && warning) classes = twMerge(classes,  'text-yellow-400 bg-white');
  if (outlined && danger)  classes = twMerge(classes, 'text-red-500 bg-white');

  classes = twMerge(classes, className);

  return <button {...rest} className={classes}>{children}</button>
}

export default Button;