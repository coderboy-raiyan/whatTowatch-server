import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

const PORT = config.PORT || 5000;

const server = http.createServer(app);

async function bootstrap() {
    try {
        await mongoose.connect(config.DB_URI);
        console.log('');
        console.log('Database connected successfully');
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

bootstrap();