export interface IMail {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
}

export class Mail implements IMail {
    constructor(
        public name?: string,
        public phone?: string,
        public email?: string,
        public message?: string
    ) {
    }
}
