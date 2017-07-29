export interface Response {
    status: number;
    response: any;
}

export class DataGenerator {
    
    private readonly api = "http://localhost:55092/api/values";

    constructor() {
    }

    public DataGet(apiUrl: string) : Promise<Response> {
        return new Promise(
            (resolve, reject) => {
                const httpRequest = new XMLHttpRequest();

                httpRequest.onreadystatechange =
                    () => {
                        if (httpRequest.readyState === 4) {
                            resolve({ 
                                status: httpRequest.status, 
                                response: httpRequest.response 
                            });
                        }
                    };

                httpRequest.open("GET", apiUrl, true);
                httpRequest.send();
            }
        );
    }

}
