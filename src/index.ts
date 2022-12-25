import express from "express";
import statusRoute from "./routes/status.route";

import usersRoute from "./routes/users.route";

const app = express();
// configurações da aplicação
// middleware responsavel por interpretar e lidar com json
app.use(express.json())

// Configurações de rotas
// rotas contendo o CRUD do usuario no padrão REST
app.use(usersRoute);
// rota de atatus
app.use(statusRoute)

// Inicialização de servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})