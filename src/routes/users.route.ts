import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';

const usersRoute = Router();
// teste simulando os dados
const users = [{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }, { id: 3, nome: "Jose" }];
// GET
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).json(users);
})
// GET por ID
//obs o params é um ParamsDictionary então eu posso configurar o tipo
usersRoute.get('/users/:uuid', (req: Request<{ uuid: Number }>, res: Response, next: NextFunction) => {// : -> (dois pontos) indica que este pedaço será dinâmico
    const uuid = req.params.uuid;
    for (let i = 0; i < users.length; i++) {
        if (uuid == users[i].id) {
            res.status(StatusCodes.OK).send(users[i]);// semelhante ao return
        }
    }
    res.sendStatus(StatusCodes.NOT_FOUND);
})
// POST
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
})

// PUT
usersRoute.put('/users/:uuid', (req: Request<{ uuid: Number }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const userModified = req.body;// pegar conteudo d postman pra evitar ter que fazer um get
    userModified.uuid = uuid;
    userModified.nome = "Juluis com dois empregos";
    res.status(StatusCodes.OK).send(userModified);
})

// DELETE
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: Number }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})

export default usersRoute;