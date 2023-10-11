import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  times: number;
  [key:string]: any;
}

const Skeleton: React.FC<SkeletonProps> = ({times, ...props}) => {

  const [count, setCount] = useState(1);

  const {className} = props;

  useEffect(()=>{

    const interval = setInterval(() => {
      if (count < times) setCount(count+1);
    }, 100);

    return () => clearInterval(interval);
  },[count])

  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5'
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );

  return Array(count).fill(0).map((_, index) => {
    return (
      <div key={index} className={twMerge(outerClassNames, className)}>
        <div className={innerClassNames}></div>
      </div>
      
    ) 
  } )
}

export default Skeleton;