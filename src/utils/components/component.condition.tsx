import React from 'react';

interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

export const If: React.FC<IfProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

interface ElseProps {
  children: React.ReactNode;
}

export const Else: React.FC<ElseProps> = ({ children }) => {
  return <>{children}</>;
};

interface ConditionProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Condition: React.FC<ConditionProps> = ({ children }) => {
  let elseChild = null;
  let ifRendered = false;

  const renderedChildren = React.Children.map(children, child => {
    // Kiểm tra để chắc chắn rằng child có props condition
    if ('condition' in child.props && child.type !== Else) {
      if (!ifRendered && child.props.condition) {
        ifRendered = true;
        return child;
      }
    } else if (child.type === Else) {
      elseChild = child;
      return null;
    }
    return null;
  });

  return <>{ifRendered ? renderedChildren : elseChild}</>;
};
