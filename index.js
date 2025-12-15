import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/productsRoutes.js';
import "dotenv/config";
import authRouter  from './src/routes/authRoutes.js';
import { authentication } from './src/middlewares/authentication.js';
const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Proyecto Final TalentoTech');
});

app.use('/auth', authRouter);
app.use('/api', authentication, productsRouter);

// Middleware para manejar rutas no definidas
app.use((req, res, next) => {
res.status(404).json({message: 'Recurso no encontrado o ruta inválida'});
});

const PORT = process.env.PORT || 3005;  

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});