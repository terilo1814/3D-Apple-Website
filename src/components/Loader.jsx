import React from 'react';
import { Html } from '@react-three/drei';
import { Loader as RSuiteLoader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // Import RSuite styles

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div>
          <RSuiteLoader size="lg" />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
