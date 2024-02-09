import { useState } from 'react';
import * as Yup from 'yup'; // Import Yup for form validation

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState('');

    const schema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
    });

    const validateField = async (name, value) => {
        try {
            await schema.validateAt(name, {[name]: value});
        } catch (error) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: error.message }));
        }
    }

    const handleChange = async (event) => {
        const { name, value } = event.target; 
        setFormData(prevData => ({ ...prevData, [name]: value }));
        await validateField(name, value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await schema.validate(formData, { abortEarly: false });
            // Simulate API call with a delay
            setTimeout(() => {
                setLoading(false);
                setSuccessMessage('Registration successful!');
            }, 2000);
        } catch(error) {
            const validationErrors = {};
            error.inner.forEach(fieldError => {
                validationErrors[fieldError.path] = fieldError.message;
            });
            setErrors(validationErrors);
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>User Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ marginRight: '4px'}}>FirstName</label>
                    <input 
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    { errors.firstName && <span>{errors.firstName}</span>}
                </div>
                <div>
                    <label style={{ marginRight: '4px'}}>LastName</label>
                    <input 
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    { errors.lastName && <span>{errors.lastName}</span>}
                </div>
                <div>
                    <label style={{ marginRight: '4px'}}>email</label>
                    <input 
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    { errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label style={{ marginRight: '4px'}}>password</label>
                    <input 
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    { errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default SignupForm;