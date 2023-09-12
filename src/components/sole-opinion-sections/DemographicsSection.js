

// TODO: Should be able to randomize pseudonym

export default function DemographicsSection({ name, handleSetName, age, handleSetAge, gender, handleSetGender}) {

    const handleNameChange = (e) => { handleSetName(e.target.value) }
    const handleAgeChange = (e) => { handleSetAge(e.target.value) }
    const handleGenderChange = (e) => { handleSetGender(e.target.value) }

    return (
        <div className="demographics-section container d-flex flex-column justify-content-center">
            <h2 className="fw-bold mb-4">DEMOGRAPHICS</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <form>
                <div className="d-flex flex-row mb-3 align-items-center">
                    <label htmlFor="nameInput" className="form-label me-4">Name</label>
                    <input value={name} onChange={handleNameChange} type="text" className="form-control" id="nameInput" />
                </div>
                <div className="d-flex flex-row mb-3 align-items-center">
                    <label htmlFor="ageInput" className="form-label me-4">Age</label>
                    <input value={age} onChange={handleAgeChange} type="text" className="form-control" id="ageInput" />
                </div>
                {/* <CustomBlackRadioGenderOptions gender={gender} handleGenderChange={handleGenderChange} /> */}
                <CustomShoeGenderOptions gender={gender} handleGenderChange={handleGenderChange} />
            </form>
        </div>
    )
}

// function CustomBlackRadioGenderOptions({ gender, handleGenderChange }) {

//     const otherChecked = gender !== 'Female' && gender !== 'Male' && gender !== 'Non-binary' && gender !== 'starting-blank'

//     return (
//         <div className="d-flex flex-column flex-sm-row mb-3 ms-4 ms-sm-0 mt-4 mt-sm-0 align-items-sm-center">
//             <div className="form-check me-4">
//                 <input value="Female" checked={gender === 'Female'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="femaleRadio" />
//                 <label className="form-check-label" htmlFor="femaleRadio">
//                     Female
//                 </label>
//             </div>
//             <div className="form-check me-4">
//                 <input value="Male" checked={gender === 'Male'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="maleRadio" />
//                 <label className="form-check-label" htmlFor="maleRadio">
//                     Male
//                 </label>
//             </div>
//             <div className="form-check me-4">
//                 <input value="Non-binary" checked={gender === 'Non-binary'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="nonBianryRadio" />
//                 <label className="form-check-label" htmlFor="nonBianryRadio">
//                     Non-binary
//                 </label>
//             </div>
//             <div className="form-check d-flex flex-row align-items-center">
//                 <label className="form-check-label visually-hidden" htmlFor="otherRadio">Other Gender Select</label>
//                 <input className="form-check-input me-2" checked={otherChecked} value="Not Listed" onChange={handleGenderChange} type="radio" name="flexRadioDefault" id="otherRadio" />
//             </div>
//             <div className="">
//                 <label className="form-label visually-hidden" htmlFor="genderTextInpu">Other Gender Input</label>
//                 <input value={otherChecked ? gender : 'Not Listed'} onChange={handleGenderChange} type="text" className="form-control" id="genderTextInput" />
//             </div>
//         </div>
//     )
// }

function CustomShoeGenderOptions({ gender, handleGenderChange }) {
    return (
        <div className="d-flex flex-column flex-sm-col mb-3 ms-4 ms-sm-0 mt-4 mt-sm-0">
            <CustomShoeRadio gender="Female" genderState={gender} handleGenderChange={handleGenderChange} />
            <CustomShoeRadio gender="Male" genderState={gender} handleGenderChange={handleGenderChange} />
            <CustomShoeRadio gender="Non-binary" genderState={gender} handleGenderChange={handleGenderChange} />
            <CustomShoeTextInputRadio genderState={gender} handleGenderChange={handleGenderChange} />
        </div>
    )
}


function CustomShoeRadio({ gender, genderState, handleGenderChange }) {
    return (
        <div className="me-4">
            <input
                value={gender}
                checked={genderState === gender}
                onChange={handleGenderChange}
                type="radio"
                name="genderRadio"
                id={gender + "Radio"}
                className="d-none"
            />
            <label className="form-check-label" htmlFor={gender + "Radio"}>
                {/* SVG for the Female option */}
                <svg className="me-2 shoe-radio" width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_147)">
                    <path fill={genderState === gender ? 'black' : 'white'} d="M44.35 25.05C38.77 25.2 33.39 23.75 27.92 23C26.39 22.79 24.86 22.56 23.33 22.48C22.01 22.41 21.11 23.3 20.46 24.3C20.08 24.88 19.73 25.12 19.09 25.11C13.94 24.96 8.78 25.36 3.65 24.68C3.08 24.6 2.52 24.45 1.95 24.32C0.839999 24.06 0.409999 23.43 0.509999 22.23C0.839999 18.26 1.31 14.3 0.949999 10.29C0.739999 7.95 1.7 5.74 2.4 3.53C2.88 2 4.17 2.45 5.17 2.62C9.03 3.29 12.88 4.08 16.74 4.79C21.35 5.64 25.98 6.4 30.51 7.67C31.06 7.82 31.77 8.16 32.15 7.68C32.65 7.06 31.81 6.7 31.51 6.28C30.5 4.91 30.07 3.41 30.4 1.73C30.61 0.640001 31.06 0.0800006 32.25 0.880001C33.63 1.8 35.01 2.91 36.55 3.36C37.89 3.75 38.93 4.5 40.12 5.06C42.03 5.96 43.42 7.48 45.07 8.67C48.36 11.04 52.06 11.86 56.02 11.74C58.93 11.65 61.61 12.21 64.11 13.8C65.1 14.43 65.79 15.16 66.07 16.28C66.21 16.84 66.3 17.42 66.51 17.96C67.83 21.39 67.73 21.6 64.23 22.57C57.73 24.37 51.06 24.77 44.37 25.04L44.35 25.05Z" stroke="black" strokeMiterlimit="10"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_147">
                    <rect width="67.78" height="25.61" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                {gender}
            </label>
        </div>
    )
}


// TODO: Fidgure out accessibility here :(
function CustomShoeTextInputRadio({ genderState, handleGenderChange }) {

    const checked = genderState !== 'Female' && genderState !== 'Male' && genderState !== 'Non-binary' && genderState !== 'starting-blank'

    return (
        <div className="me-4 d-flex flex-row align-items-center">
            <label className="form-check-label visually-hidden" htmlFor="otherRadio">Other Gender Select</label>
            <input className="d-none form-check-input me-2" value="Not Listed" checked={genderState !== 'Female' && genderState !== 'Male' && genderState !== 'Non-binary'} onChange={handleGenderChange} type="radio" name="flexRadioDefault" id="gender" />
            <label className="form-label" htmlFor="gender">
                <svg value="Not Listed" className="me-2 shoe-radio" width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_147)">
                    <path fill={checked ? 'black' : 'white'} d="M44.35 25.05C38.77 25.2 33.39 23.75 27.92 23C26.39 22.79 24.86 22.56 23.33 22.48C22.01 22.41 21.11 23.3 20.46 24.3C20.08 24.88 19.73 25.12 19.09 25.11C13.94 24.96 8.78 25.36 3.65 24.68C3.08 24.6 2.52 24.45 1.95 24.32C0.839999 24.06 0.409999 23.43 0.509999 22.23C0.839999 18.26 1.31 14.3 0.949999 10.29C0.739999 7.95 1.7 5.74 2.4 3.53C2.88 2 4.17 2.45 5.17 2.62C9.03 3.29 12.88 4.08 16.74 4.79C21.35 5.64 25.98 6.4 30.51 7.67C31.06 7.82 31.77 8.16 32.15 7.68C32.65 7.06 31.81 6.7 31.51 6.28C30.5 4.91 30.07 3.41 30.4 1.73C30.61 0.640001 31.06 0.0800006 32.25 0.880001C33.63 1.8 35.01 2.91 36.55 3.36C37.89 3.75 38.93 4.5 40.12 5.06C42.03 5.96 43.42 7.48 45.07 8.67C48.36 11.04 52.06 11.86 56.02 11.74C58.93 11.65 61.61 12.21 64.11 13.8C65.1 14.43 65.79 15.16 66.07 16.28C66.21 16.84 66.3 17.42 66.51 17.96C67.83 21.39 67.73 21.6 64.23 22.57C57.73 24.37 51.06 24.77 44.37 25.04L44.35 25.05Z" stroke="black" strokeMiterlimit="10"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_147">
                    <rect width="67.78" height="25.61" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <span className="visually-hidden">Other Gender</span>
            </label>
            <input value={checked ? genderState : 'Not Listed'} onChange={handleGenderChange} type="text" className="form-control" id="genderTextInput" />
        </div>
    )
}