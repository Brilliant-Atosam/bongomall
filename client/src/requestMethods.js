import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTg4NTc0ZDlhNzBlNWNmOGJiNzdmZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzYzNTYzNzksImV4cCI6MTYzNjYxNTU3OX0.MHeCQMU1jR43hylKfCrIZydl5sRbJg1XHPUN31ZTqtA';

export const publicRequest = axios.create(
    {baseURL: BASE_URL}
)

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}`}
})
