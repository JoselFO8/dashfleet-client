export interface IOrder {
    _id: string;
    clientId: string;
    deliveryAddress: string;
    products: IProduct[];
    deliveryStatus: 'received' | 'in process' | 'finished';
    deliverDate: Date
    userInfo: IUser
}

export interface IProduct {

    name: string,
    reference: string,
    quantity: number

}

export interface IUser {
    _id: string,
    name: string,
    documentType: string,
    documentNumber: number,
}