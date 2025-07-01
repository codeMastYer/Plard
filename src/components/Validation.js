export const userEmailValidation = {
    required: {
        value: true,
        message: "Email is required!"
    },
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address!"
    }
};


export const userPasswordValidation = {
    required: {
        value: true,
        message: "Password is required!"
    },
    pattern: {
        value:/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/,
        message: "Password must be at least 6 characters, include a number, a lowercase letter, and a special character."

    }
};