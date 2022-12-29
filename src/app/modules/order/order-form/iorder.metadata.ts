export interface IOrders {
    users: IOrder[]
}

export interface IOrder {
    _id: string;
    clientName: string;
    deliveryAddress: string;
    deliveryStatus: string;
    deliverDate: number;
}