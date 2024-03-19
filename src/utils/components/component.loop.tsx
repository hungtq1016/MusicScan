import React from 'react';
import { View, Text } from 'react-native';

// Extending the SectionProps to explicitly type children as a function
// that receives an object with an 'item' property and returns a ReactNode.
type SectionProps = {
  data: Array<any>;
  children: (props: { item: any, key: number }) => React.ReactNode;
};

const Loop: React.FC<SectionProps>  = ({ data, children }) => {
  return (
    <>
      {data.map((item, index) =>
        // Directly calling the children function with item and index as arguments.
        // This eliminates the need to use React.Children.map and React.cloneElement.
        children({ item, key: index })
      )}
    </>
  );
};

export default Loop;
