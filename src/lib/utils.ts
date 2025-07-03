

export const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));