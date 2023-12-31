import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// import countryRoutes from './routes/countries.js';
import totalgdpRoutes from './routes/totalGDP.js';
import countryRoutes from './routes/countries.js';
import cityRoutes from './routes/cities.js';
import stateRoutes from './routes/states.js';
import airRoutes from './routes/air.js';
import totalpopulationRoutes from './routes/totalPopulation.js';
import populationgrowthRoutes from './routes/pgrowth.js';
import gdppercapitaRoutes from './routes/gdpPerCapita.js';
import gdpgrowthRoutes from './routes/gdpGrowth.js';
const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/countries',countryRoutes);
app.use('/cities',cityRoutes);
app.use('/states',stateRoutes);
app.use('/air', airRoutes);
app.use('/totalgdp', totalgdpRoutes );
app.use('/totalpopulation', totalpopulationRoutes );
app.use('/populationgrowth', populationgrowthRoutes );
app.use('/gdppercapita', gdppercapitaRoutes);
app.use('/gdpgrowth', gdpgrowthRoutes);
//mongodb+srv://kabbobhai:kabbobhai123@cluster0.zd1azte.mongodb.net/
const CONNECTION_URL = 'mongodb+srv://kabbobhai:kabbobhai123@cluster0.zd1azte.mongodb.net/';
//GkaBOED4BoayvHFX
const PORT = process.env.PORT  || 5005;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
).catch(
    (error)=> console.log(error.message)
);