import { generateToken } from "../utils/tokenGenerator.js";

const default_user = {
    id: 1,
    email: "user@email.com",
    password: "password123"
}

export async function login (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y password son requeridos' });
    }

    const user = { id: 1, email };
    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
}