export const template = `// import { property } from "@loopback/repository";
import { {{_Model.name}}BaseModel } from "./_base/models/{{_Model.name}}-model";

export class {{_Model.name}}Model extends {{_Model.name}}BaseModel {}`