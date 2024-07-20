import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Style.scss';

const Register = () => {
    const [step, setStep] = useState(1);
    const [panCard, setPanCard] = useState('');
    const [aadharCard, setAadharCard] = useState('');
    const [photo, setPhoto] = useState('');
    const [qualification, setQualification] = useState('');
    const [errors, setErrors] = useState({});
    const [selectedItems, setSelectedItems] = useState([]); // Track selected items
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNext = () => {
        if (step === 1) {
            if (!panCard) {
                setErrors({ panCard: 'Please upload your PAN Card' });
            } else {
                setErrors({});
                setStep(step + 1);
            }
        } else if (step === 2) {
            if (!aadharCard) {
                setErrors({ aadharCard: 'Please upload your Aadhar Card' });
            } else {
                setErrors({});
                setStep(step + 1);
            }
        } else if (step === 3) {
            if (!photo) {
                setErrors({ photo: 'Please upload your photo' });
            } else {
                setErrors({});
                setStep(step + 1);
            }
        } else if (step === 4) {
            if (!qualification) {
                setErrors({ qualification: 'Please enter your qualification' });
            } else {
                setErrors({});
                // Store the selected items
                setSelectedItems([panCard, aadharCard, photo, qualification]);
            }
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setErrors({});
            setStep(step - 1);
        }
    };

    // Pop Up Modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckNow = () => {
        // When "Check Now" is clicked, collect the selected items in an array
        const items = [];
        if (panCard) items.push('PAN Card');
        if (aadharCard) items.push('Aadhar Card');
        if (photo) items.push('Photo');
        if (qualification) items.push('Qualification');
        setSelectedItems(items);
        openModal(); // Open the modal to display selected items
    };

    const handleSubmission = () => {
        // Perform your final submission logic here
        // Close the modal
        closeModal();
    };

    return (
        <div className="your-form">
            <div className="progress">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>Step 1</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>Step 2</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>Step 3</div>
                <div className={`step ${step >= 4 ? 'active' : ''}`}>Step 4</div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                {step === 1 && (
                    <div className="form-step">
                        <h2>Upload PAN Card:</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setPanCard(e.target.files[0])}
                        />
                        {errors.panCard && <p className="error">{errors.panCard}</p>}
                    </div>
                )}
                {step === 2 && (
                    <div className="form-step">
                        <h2>Upload Aadhar Card:</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAadharCard(e.target.files[0])}
                        />
                        {errors.aadharCard && <p className="error">{errors.aadharCard}</p>}
                    </div>
                )}
                {step === 3 && (
                    <div className="form-step">
                        <h2>Upload Photo:</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                        {errors.photo && <p className="error">{errors.photo}</p>}
                    </div>
                )}
                {step === 4 && (
                    <div className="form-step">
                        <h2>Your Qualification</h2>
                        <input
                            type="text"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            placeholder="Enter your qualification"
                        />
                        {errors.qualification && <p className="error">{errors.qualification}</p>}
                        <button onClick={handleCheckNow}>Check Now</button>
                    </div>
                )}

                <div className="button-container">
                    {step > 1 && <button className='next' onClick={handlePrevious}>Previous</button>}
                    {step < 4 && <button className='prev' onClick={handleNext}>Next</button>}
                </div>
            </form>

            {/* {step === 4 && (
                <div className="button-container">
                    <button onClick={handleCheckNow}>Check Now</button>
                </div>
            )} */}

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Selected Documents Summary"
                ariaHideApp={false}
            >
                <h2>Selected Documents Summary</h2>
                {selectedItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <button onClick={handleSubmission}>Submit</button>
            </Modal>
        </div>
    );
};

export default Register;
