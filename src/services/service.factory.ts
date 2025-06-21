
import { DataSource } from "typeorm";
import { UserService } from "./user.service";
//import { NoteService } from "./note.service";
import { User } from "../database/entities/user.entity";
//import { Note } from "../database/entities/note.entity";

export class ServiceFactory {
    constructor(private dataSource: DataSource) {}

    createUserService() {
        return new UserService(this.dataSource.getRepository(User));
    }

    // createNoteService() {
    //     return new NoteService(
    //         this.dataSource.getRepository(Note),
    //         this.createUserService()
    //     );
    // }


}