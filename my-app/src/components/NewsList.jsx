import React, { Component} from "react";
import PropTypes  from "prop-types";
import { NewsItem} from "./NewsItem";
import someData from "./news.json"
export class NewsList extends Component{
    state = {
        news: this.props.items 
    };
    
    addNews = () => {
        this.setState({
          news: [
            someData[Math.floor(Math.random()*someData.length)],
            ...this.state.news,
          ]
        });
      };

    onDelete = (newsID) => {
        this.setState({
            news: this.state.news.filter((el) => el.id !== newsID),
        });
    };

    render() {
        const { news } = this.state;
        return(
            <div className="news__list">
                <button onClick={() => this.addNews()}>Add News</button>
                {news.map((item) => (
                    <NewsItem key={item.id}
                                item={item}
                                onDelete={this.onDelete}
                    ></NewsItem>
                ))}
            </div>
        )
    }
}

NewsList.propTypes = {
    items: PropTypes.array,
};
NewsList.defaultProps = {
    item: [],
};