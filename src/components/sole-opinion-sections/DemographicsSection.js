

// TODO: Should be able to randomize pseudonym

export default function DemographicsSection({ name, handleSetName, age, handleSetAge, gender, handleSetGender}) {

    const handleNameChange = (e) => { handleSetName(e.target.value) }
    const handleAgeChange = (e) => { handleSetAge(e.target.value) }
    const handleGenderChange = (e) => { handleSetGender(e.target.value) }

    return (
        <div>
            <form>
                <div className="d-flex flex-row mb-3 align-items-center">
                    <label htmlFor="nameInput" className="form-label me-4">Name</label>
                    <input value={name} onChange={handleNameChange} type="text" className="form-control" id="nameInput" />
                </div>
                <div className="d-flex flex-row mb-3 align-items-center">
                    <label htmlFor="ageInput" className="form-label me-4">Age</label>
                    <input value={age} onChange={handleAgeChange} type="text" className="form-control" id="ageInput" />
                </div>
                <div className="d-flex flex-row mb-3 align-items-center">
                    <div className="form-check me-4">
                        <input value="Female" checked={gender === 'Female'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Female
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input value="Male" checked={gender === 'Male'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Male
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input value="Non-binary" checked={gender === 'Non-binary'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Non-binary
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input value="Other" checked={gender === 'Other'} onChange={handleGenderChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Other
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}