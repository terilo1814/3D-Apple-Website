import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {

    return (
        <View
            index={index}
            id={gsapType} // ID for styling or animation purposes
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >

            {/* Ambient light to provide basic lighting to the scene */}
            <ambientLight intensity={0.3} />

            {/* Perspective camera setup with a position farther away from the origin */}
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            {/* OrbitControls to handle camera controls */}
            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false} //disable moving the camera instead we move the object
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            // Callback to update the rotation state when the user stops rotating
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
                {/* Suspense to handle lazy loading of the iPhone component 
                We wait for the 3D model to load*/}
                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}  //size of the iphone
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView