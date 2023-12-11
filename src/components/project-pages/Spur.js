import React, { useRef, useEffect, useMemo } from 'react';
import { World, Body, Sphere, Vec3 } from 'cannon';
import * as THREE from 'three';

import TwoSpheresBouncingCannon from './TEMP-animation-tests/TwoSpheresBouncingCannon';
import TwoSpheresDragging from './TEMP-animation-tests/TwoSpheresDragging';

export default function Spur() {
    return (
        <div>
            <h1>I'm here</h1>
            <TwoSpheresDragging />
            {/* <TwoSpheresBouncing /> */}
        </div>
    )
}


