

export default function NameColorAnimation() {

    // Whenever someone hovers over a letter it changes color and moves in a random direction and back
    // after a little bit

    const firstName = "OLIVIA"
    const lastName = "OOMEN"

    const moveColorLetter = (e) => {
        // Change it's color and position to random options
        e.target.style.color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        e.target.style.top = -30 + Math.random() * 60 + "px";
        e.target.style.left = -30 + Math.random() * 60 + "px";

        // Change it back after a certain period of time
        setTimeout(function(){
            e.target.removeAttribute("style")
        }, 1500);
    }

    const firstNameElements = firstName.split('').map((letter) => {
        return <div onMouseOver={moveColorLetter} className="main-splash-letter">{letter}</div>
    })

    const lastNameElements = lastName.split('').map((letter) => {
        return <div onMouseOver={moveColorLetter} className="main-splash-letter">{letter}</div>
    })

    return (
        <h1 className="pb-4 justify-self-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-row">
                    {firstNameElements}
                </div>
                <div className="d-flex flex-row">
                    {lastNameElements}
                </div>
            </div>
        </h1>
    )
}