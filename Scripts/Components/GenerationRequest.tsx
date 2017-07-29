import * as React from "react";
import { DataGenerator } from "../Services/DataGenerator";

class State {
    url: string;
    response: string;
}

export class GenerationRequest extends React.Component<{}, State> {
    private readonly _dataGenerator: DataGenerator;

    constructor(prop: any) {
        super(prop);

        this._dataGenerator = new DataGenerator();
        this.state = { url: "", response: "" };

        this.inputValueChanged = this.inputValueChanged.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        return <div>
            <form onSubmit={this.formSubmit}>
                <label>
                    Url:
                    <input
                        type="text"
                        value={this.state.url}
                        onChange={this.inputValueChanged}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <textarea
                    style={{width: "300px", height: "300px"}}
                    value={this.state.response}
                    readOnly 
                />
            </div>
        </div>;
    }

    private inputValueChanged(event: React.FormEvent<HTMLInputElement>) {
        this.setState({url: event.currentTarget.value});
    }

    private async formSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await this._dataGenerator.DataGet(this.state.url);
        if (response.status === 200) {
            //const data = JSON.parse(response.response) as DataItem[];
            this.setState({response: response.response});
        }
        else {
            this.setState({response: `ERROR (status code ${response.status})`});
        }
    }

}

interface DataItem {
    readonly id: string;
    readonly name: string;
}