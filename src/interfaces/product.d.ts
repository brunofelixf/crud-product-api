import { Status } from "@prisma/client";

export interface ICreateProduct {
    name: string;
    category: string;
    status: Status;
    quantity: number;
}

export interface IUpdateProduct {
    name?: string;
    category?: string;
    status?: Status;
    quantity?: number;
}

export interface IQueryProduct {
    id?: string;
}

export interface IParamProduct {
    id?: string;
}