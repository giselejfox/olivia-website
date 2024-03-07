import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { Body, Engine, Render, World, Bodies, Mouse, MouseConstraint, MatterBodies } from 'matter-js';

import Navbar from "./Navbar";

export default function MainSplash2D() {

    return (
        <div>
            <FloatingImages2D />
            <div style={{ zIndex: 1 }} className="content-wrapper d-flex vh-100 flex-column justify-content-between">
                <Navbar />
                {/* <div style={{zIndex: 2}} >Test</div> */}
                <ProjectBar />
            </div>
        </div>
    )
}


function FloatingImages2D() {

    const boxRef = useRef(null);
    const canvasRef = useRef(null);

    // Refs for the bodies
    const beamRef = useRef(null);
    const conversationAveRef = useRef(null);
    const guitarCaseBenchRef = useRef(null);
    const onsightRef = useRef(null);
    const spurRef = useRef(null);
    const wellRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {

        const engine = initializeEngine();
        const render = initializeRender(engine, canvasRef, boxRef);
        const walls = createWalls();

        const createPicture = (x, y, imgURL, scale) => {
            return Bodies.rectangle(x, y, 100, 100, {
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: imgURL,
                        xScale: scale,
                        yScale: scale,
                    }
                }
            });
        };

        const canvasWidth = window.innerWidth; // Replace with your actual canvas width
        const canvasHeight = window.innerHeight; // Replace with your actual canvas height

        const beam = createPicture(canvasWidth * .55, canvasHeight * .3, 'img/homepage-2d-floting-images/beamhomepage.png', .3);
        const conversationAve = createPicture(canvasWidth * .75, canvasHeight * .4, 'img/homepage-2d-floting-images/conversationavehomepage.png', .6);
        const guitarCaseBench = createPicture(canvasWidth * .85, canvasHeight * .85, 'img/homepage-2d-floting-images/guitarcasebenchhomepage.png', .1);
        const onsight = createPicture(canvasWidth * .1, canvasHeight * .75, 'img/homepage-2d-floting-images/onsighthomepage.png', .2);
        const spur = createPicture(canvasWidth * .1, canvasHeight * .2, 'img/homepage-2d-floting-images/spurhomepage.png', .15);
        const well = createPicture(canvasWidth * .5, canvasHeight * .8, 'img/homepage-2d-floting-images/wellhomepage.png', .2);

        const text = Bodies.rectangle(canvasWidth / 2, canvasHeight / 2, 1, 1, {
            isStatic: true, // Set the body as static
            restitution: 0.6,
            render: {
                sprite: {
                    texture: 'img/homepage-2d-floting-images/texthomepage.png',
                    xScale: .2,
                    yScale: .2,
                }
            }
        });

        beamRef.current = beam;
        conversationAveRef.current = conversationAve;
        guitarCaseBenchRef.current = guitarCaseBench;
        onsightRef.current = onsight;
        spurRef.current = spur;
        wellRef.current = well;
        textRef.current = text

        // makes it spurt out
        Body.setAngularVelocity(beam, .1)
        Body.setAngularVelocity(conversationAve, .1)
        Body.setAngularVelocity(guitarCaseBench, .1)
        Body.setAngularVelocity(onsight, .1)
        Body.setAngularVelocity(spur, .1)
        Body.setAngularVelocity(well, .1)

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: true,
                    elementCategory: 2, // Set a unique category to the MouseConstraint
                },
            },
        });

        // Add an event listener to prevent default behavior on mouse clicks
        mouseConstraint.mouse.element.addEventListener("mousedown", function (event) {
            event.preventDefault();
        });


        World.add(engine.world, [...walls, text, beam, conversationAve, guitarCaseBench, onsight, spur, well]);
        World.add(engine.world, mouseConstraint);
        // Add text bodies to the world
        //   World.add(engine.world, staticText);

        Engine.run(engine);
        Render.run(render);

    }, []);

    return (
        <div className="floating-shapes-wrapper" style={{ width: '100vw', height: '100vh' }}>
            <div ref={boxRef} style={{ width: '100vw', height: '100vh' }}>
                <canvas ref={canvasRef} style={{ width: '100vw', height: '100%' }} />
            </div>
        </div>
    )
}

const initializeEngine = () => {
    const engine = Engine.create({
        gravity: { x: 0, y: 0 }
    });
    return engine;
};

const initializeRender = (engine, canvasRef, boxRef) => {

    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth

    const render = Render.create({
        element: boxRef.current,
        engine: engine,
        canvas: canvasRef.current,
        options: {
            width: windowWidth,
            height: windowHeight,
            background: 'white',
            wireframes: false,
            slop: 0.7, // Adjust this value to reduce distortion
        },
    });
    return render;
};

const createWalls = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const floor = Bodies.rectangle(width / 2, height, width, 20, {
        isStatic: true,
        render: { fillStyle: 'none' },
    });
    const leftWall = Bodies.rectangle(0, height / 2, 20, height, {
        isStatic: true,
        render: { fillStyle: 'none' },
    });
    const rightWall = Bodies.rectangle(width, height / 2, 20, height, {
        isStatic: true,
        render: { fillStyle: 'none' },
    });
    const ceiling = Bodies.rectangle(width / 2, 0, width, 20, {
        isStatic: true,
        render: { fillStyle: 'none' },
    });
    return [floor, leftWall, rightWall, ceiling];
};

export function ProjectBar() {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div style={{ zIndex: 2 }} className="d-flex flex-wrap justify-content-center project-bar mb-5 pb-4">
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/well" onClick={handleLinkClick}>
                    WELL
                </Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/beam" onClick={handleLinkClick}>
                    BEAM
                </Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/spur" onClick={handleLinkClick}>
                    SPUR
                </Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/onsight" onClick={handleLinkClick}>
                    ONSIGHT
                </Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/conversation-ave" onClick={handleLinkClick}>
                    CONVERSATION AVE
                </Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/site-archive-cite" onClick={handleLinkClick}>
                    SITE / ARCHIVE / CITE
                </Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/coda" onClick={handleLinkClick}>
                    CODA
                </Link>
            </div>
        </div>

    );
}