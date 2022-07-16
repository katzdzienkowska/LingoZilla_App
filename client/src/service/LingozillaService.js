const baseURL = 'http://localhost:9000/api/feedback';

export const getFeedback = () => {
    return fetch(baseURL)
        .then(res => res.json())
};