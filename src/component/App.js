import React from "react";
import axios from "axios";
import SearBar from "./SearBar";
import Image from "./Image"

class App extends React.Component {
    state = {
        images: [],

    }
    onSearchSubmit = async (text) => {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: text },
            headers: {
                Authorization: "Client-ID GjFy1VOZZy8VaFKVSsdhpFjU9pGwhRnik3s7CR87bYo"
            }
        })

        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: "30px" }}>
                <SearBar onSubmit={this.onSearchSubmit} />
                <Image images={this.state.images} />
            </div>
        )
    }



}
export default App;